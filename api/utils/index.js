function getNextDay(date, skipHolidays = false) {
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + 1);

  if (skipHolidays && (nextDate.getDay() === 5 || nextDate.getDay() === 6)) {
    while (nextDate.getDay() === 5 || nextDate.getDay() === 6) {
      nextDate.setDate(nextDate.getDate() + 1);
    }
  }

  return nextDate.toISOString().split("T")[0];
}

const getAvailableDate = (date) => {
  date = new Date(date);
  const nextDay = new Date(getNextDay(new Date()));

  const availableDate = date.getTime();
  const nextDate = nextDay.getTime();

  if (availableDate > nextDate) {
    return date;
  }

  return nextDay;
};

const getFormatedDate = (date) => {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
module.exports = { getNextDay, getAvailableDate, getFormatedDate };
