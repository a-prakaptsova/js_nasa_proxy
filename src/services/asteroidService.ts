import axios from 'axios';
import { calculateRequestDates } from '../utils/dateHelper';
import { Exception } from '../utils/exceptions/Exception';
import { mapAsteroidsData } from '../utils/asteroidsMapper';
import { config } from '../config/config';
import type { AsteroidNasaData, AsteroidQueryParams, AsteroidResponse } from '../utils/types/asteroid';
import { resolveException } from '../utils/exceptionResolver';

export const getAsteroidsInPeriod = async (params: AsteroidQueryParams): Promise<AsteroidResponse> => {
    try {
        const datesForApiCall = calculateRequestDates(params.start_date, params.end_date);
        const asteroidNasaData = await axios.get<AsteroidNasaData>(config.nasaApi.getAsteroidsUrl, {
            params: {
                start_date: datesForApiCall.startDate,
                end_date: datesForApiCall.endDate,
                api_key: config.nasaApi.apiKey
            }
        });
        if (!asteroidNasaData.data) {
            throw new Exception(404, "There is no asteroid data in NASA");
        }
        return mapAsteroidsData(asteroidNasaData.data, mapStringToBoolean(params.count), mapStringToBoolean(params.were_dangerous_asteroids));
    } catch (err) {
        return resolveException(err);
    }
};

const mapStringToBoolean = (value?: string): boolean => value === undefined ? false : value === 'true';
