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
module.exports = { getNextDay };
