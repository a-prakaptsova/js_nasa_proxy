const { previousFriday, previousMonday, format } = require("date-fns");

const END_DATE = previousFriday(new Date());
const START_DATE = previousMonday(END_DATE);

const START_DATE_FORMATTED = format(START_DATE, process.env.DATE_FORMAT);
const END_DATE_FORMATTED = format(END_DATE, process.env.DATE_FORMAT);

module.exports = { START_DATE: START_DATE_FORMATTED, END_DATE: END_DATE_FORMATTED };