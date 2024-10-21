const schedule = require("node-schedule");
const nodemailer = require("nodemailer");
const { getAppoinmentsByDate } = require("./appointment.service");
const { getNextDay, getFormatedDate } = require("../utils");
const { notificationTemplate } = require("../templates/emailTemplates");
const { updateUser } = require("./user.service");
require("dotenv").config();

class AutomatedEmailService {
  constructor() {
    // Initialize email transporter
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    this.date = new Date(getNextDay(new Date()));

    // Keep track of sent emails to avoid duplicates
    this.sentEmails = new Set();

    // Start the scheduler
    this.initializeScheduler();
  }

  async fetchEmailsFromService() {
    try {
      const response = await getAppoinmentsByDate(this.date);

      return response.map((appointment) => {
        const {
          user,
          vaccineCenter: { name, location },
          date,
          serial,
          _id,
        } = appointment;

        return {
          id: _id,
          recipient: user.email,
          subject: "Vaccination Appointment Reminder",
          htmlBody: notificationTemplate({
            name: user.name,
            center: name,
            location,
            date: getFormatedDate(date),
            serial,
          }),
        };
      });
    } catch (error) {
      console.error("Error fetching emails:", error);
      return [];
    }
  }

  async sendEmail(emailData) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: emailData.recipient,
      subject: emailData.subject,
      html: emailData.htmlBody, // If HTML content is available
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log("Email sent:", info.messageId);

      // Add to sent emails tracking
      this.sentEmails.add(emailData.id);

      // Keep only last 1000 entries to manage memory
      if (this.sentEmails.size > 1000) {
        const entriesToRemove = Array.from(this.sentEmails).slice(0, 100);
        entriesToRemove.forEach((entry) => this.sentEmails.delete(entry));
      }

      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  }

  async processEmails() {
    console.log("Starting daily email processing...");

    try {
      // Fetch emails from service
      const emails = await this.fetchEmailsFromService();

      // Process each email
      for (const email of emails) {
        // Skip if already sent
        if (this.sentEmails.has(email.id)) {
          console.log(`Email ${email.id} already sent, skipping`);
          continue;
        }

        // Send email
        const sent = await this.sendEmail(email);

        if (sent) {
          console.log(`Successfully sent email ${email.id}`);
        } else {
          console.error(`Failed to send email ${email.id}`);
        }

        // Add delay between sends to avoid rate limits
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error("Error in email processing:", error);
    }
  }

  initializeScheduler() {
    // Schedule to run at 9 PM daily
    const job = schedule.scheduleJob("0 21 * * *", () => {
      this.processEmails();
    });

    console.log("Email scheduler initialized");

    // Optional: Process immediately on startup
    // this.processEmails();

    // Handle cleanup on application shutdown
    process.on("SIGINT", () => {
      job.cancel();
      console.log("Email scheduler stopped");
      process.exit(0);
    });
  }
}

// Error handling for uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);
});

// Create and export service instance
module.exports = new AutomatedEmailService();
