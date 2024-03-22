import { previousFriday, previousMonday, subWeeks, format } from 'date-fns';
import { config } from '../config/config';
import { type AsteroidPeriod } from './types/asteroid';

const END_DATE = previousFriday(new Date());
const START_DATE = previousMonday(END_DATE);

const START_DATE_FORMATTED = format(START_DATE, config.dateFormats.defaultDateFormat);
const END_DATE_FORMATTED = format(END_DATE, config.dateFormats.defaultDateFormat);

export const calculateRequestDates = (startDate?: string, endDate?: string): AsteroidPeriod => ({
    startDate: startDate ?? (endDate !== undefined ? String(subWeeks(endDate, 1)) : START_DATE_FORMATTED),
    endDate: endDate ?? (endDate !== undefined ? undefined : END_DATE_FORMATTED)
});
