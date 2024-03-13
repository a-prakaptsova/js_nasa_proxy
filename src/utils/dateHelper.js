const { previousFriday, previousMonday, subWeeks, format } = require("date-fns");

const END_DATE = previousFriday(new Date());
const START_DATE = previousMonday(END_DATE);

const START_DATE_FORMATTED = format(START_DATE, process.env.DATE_FORMAT);
const END_DATE_FORMATTED = format(END_DATE, process.env.DATE_FORMAT);

const calculateRequestDates = (queryStartDate, queryEndDate) => ({
    startDate: queryStartDate || (queryEndDate ? subWeeks(queryEndDate) : START_DATE_FORMATTED),
    endDate: queryEndDate || (queryStartDate ? undefined : END_DATE_FORMATTED)
});

module.exports = calculateRequestDates;