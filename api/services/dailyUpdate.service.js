const { getAppoinmentsByDate } = require("./appointment.service");
const { updateUser } = require("./user.service");
const schedule = require("node-schedule");
const { updateAvailableDate } = require("./vaccineCenter.service");

class DailyUpdator {
  constructor() {
    this.initializeScheduler();
  }

  async vaccinatedUser() {
    const appoinments = await getAppoinmentsByDate(new Date());

    appoinments.forEach(async (appoinment) => {
      await updateUser({
        _id: appoinment.user._id,
        payload: { status: "vaccinated" },
      });
    });
  }

  async updateCenters() {
    await updateAvailableDate();
  }

  initializeScheduler() {
    // Schedule to run at 9 PM daily
    const job = schedule.scheduleJob("0 21 * * *", () => {
      this.vaccinatedUser();
      this.updateCenters();
    });

    console.log("daily update scheduler initialized");

    // Handle cleanup on application shutdown
    process.on("SIGINT", () => {
      job.cancel();
      console.log("daily update scheduler stopped");
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

module.exports = new DailyUpdator();
