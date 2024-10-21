const notificationTemplate = ({
  name,
  date,
  center,
  serial,
  location,
}) => ` <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vaccination Appointment Reminder</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    "
  >
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
      style="
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      "
    >
      <tr>
        <td style="padding: 20px">
          <p style="margin-bottom: 15px">Dear ${name},</p>

          <p style="margin-bottom: 15px">
            This email is to remind you that your COVID-19 vaccination
            appointment is scheduled for
            <strong>tomorrow, ${date}</strong>
          </p>

          <table
            cellpadding="10"
            cellspacing="0"
            border="0"
            width="100%"
            style="
              background-color: #f0f7ff;
              border-radius: 4px;
              margin-bottom: 20px;
            "
          >
            <tr>
              <td>
                <h2 style="font-size: 18px; margin-bottom: 10px">
                  Vaccination Center Details:
                </h2>
                <p style="margin: 5px 0">
                  <strong>Name:</strong> ${center}
                </p>
                <p style="margin: 5px 0">
                  <strong>Address:</strong> ${location}
                </p>
                <p style="margin: 5px 0">
                  <strong>Serial No:</strong> ${serial}
                </p>
            </td>
            </tr>
          </table>

          <p style="margin-bottom: 15px">Please remember to bring:</p>
          <ul style="margin-bottom: 20px; padding-left: 20px">
            <li>A valid form of identification</li>
            <li>Your health insurance card (if applicable)</li>
            <li>Proof of eligibility (if required)</li>
            <li>
              Wear a mask and clothing that allows easy access to your upper arm
            </li>
          </ul>

          <p
            style="
              font-size: 14px;
              color: #666666;
              text-align: center;
              margin-top: 30px;
            "
          >
            Thank you for doing your part to protect yourself and your
            community.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

module.exports = { notificationTemplate };
