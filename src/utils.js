export const returnNthMonth = function (date, nth) {
  const newDate = new Date(date);
  if (nth === 0) return newDate;

  newDate.setMonth(date.getMonth() + nth);
  return newDate;
}

export const returnNextMonth = function (date) {
  return returnNthMonth(date, 1);
};

export const returnPreviousMonth = function (date) {
  return returnNthMonth(date, -1);
};