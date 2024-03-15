const { previousFriday, previousMonday, subWeeks, format } = require("date-fns");
const config = require('../config/config');

const END_DATE = previousFriday(new Date());
const START_DATE = previousMonday(END_DATE);

const START_DATE_FORMATTED = format(START_DATE, config.dateFormats.defaultDateFormat);
const END_DATE_FORMATTED = format(END_DATE, config.dateFormats.defaultDateFormat);

const calculateRequestDates = (queryStartDate, queryEndDate) => ({
    startDate: queryStartDate || (queryEndDate ? subWeeks(queryEndDate) : START_DATE_FORMATTED),
    endDate: queryEndDate || (queryStartDate ? undefined : END_DATE_FORMATTED)
});

module.exports = calculateRequestDates;