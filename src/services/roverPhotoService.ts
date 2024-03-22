import axios from 'axios';
import { Exception } from '../utils/exceptions/Exception';
import { config } from '../config/config';
import { type Manifest } from '../utils/types/rover';
import { resolveException } from '../utils/exceptionResolver';

export const getMostRecentRoverPhotoLink = async (apiKey: string): Promise<string> => {
    try {
        const mostRecentPhotoDate = await getMostRecentRoverPhotoDate(apiKey);
        const roverPhotosByDate = await axios.get(config.nasaApi.getRoverPhotoUrl, {
            params: {
                earth_date: mostRecentPhotoDate,
                api_key: apiKey
            }
        });
        const photos = roverPhotosByDate.data?.photos;
        if (!photos || photos.length === 0) {
            throw new Exception(404, 'There is no photo for the most recent date');
        }
        return photos.pop().img_src;
    } catch (err) {
        return resolveException(err);
    }
};

const getMostRecentRoverPhotoDate = async (apiKey: string): Promise<string> => {
    try {
        const roverManifest = await axios.get<Manifest>(config.nasaApi.getRoverManifestUrl, { params: { api_key: apiKey } });
        const maxDate = roverManifest.data?.photo_manifest?.max_date;
        if (!maxDate) {
            throw new Exception(404, 'There is no data on the date of the last photo of the rover');
        }
        return maxDate;
    } catch (err) {
        return resolveException(err);
    }
};
