import axios from 'axios';
import { calculateRequestDates } from '../utils/dateHelper';
import { Exception } from '../utils/exceptions/Exception';
import { mapAsteroidsData } from '../utils/asteroidsMapper';
import { config } from '../config/config';
import type { AsteroidNasaData, AsteroidQueryParams, AsteroidResponse } from '../utils/types/asteroid';

export const getAsteroidsInPeriod = async (params: AsteroidQueryParams): Promise<AsteroidResponse> => {
    try {
        const dates = calculateRequestDates(params.start_date, params.end_date);
        const resp = await axios.get<AsteroidNasaData>(config.nasaApi.getAsteroidsUrl, {
            params: {
                start_date: dates.startDate,
                end_date: dates.endDate,
                api_key: config.nasaApi.apiKey
            }
        });
        return mapAsteroidsData(resp.data, mapStringToBoolean(params.count), mapStringToBoolean(params.were_dangerous_asteroids));
    } catch (err) {
        throw new Exception(err.response ? err.response.status : 500, err.message);
    }
};

const mapStringToBoolean = (value?: string): boolean => value === undefined ? false : value === 'true';
