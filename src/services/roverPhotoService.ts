import axios, { AxiosError } from 'axios';
import { Exception } from '../utils/exceptions/Exception';
import { config } from '../config/config';
import { type Manifest } from '../utils/types/rover';

export const getMostRecentRoverPhotoLink = async (apiKey: string): Promise<string> => {
    try {
        const date = await getMostRecentRoverPhotoDate(apiKey);
        const resp = await axios.get(config.nasaApi.getRoverPhotoUrl, {
            params: {
                earth_date: date,
                api_key: apiKey
            }
        });
        return resp.data.photos.pop().img_src;
    } catch (err) {
        return handleException(err);
    }
};

const getMostRecentRoverPhotoDate = async (apiKey: string): Promise<string> => {
    try {
        const resp = await axios.get<Manifest>(config.nasaApi.getRoverManifestUrl, { params: { api_key: apiKey } });
        return resp.data.photo_manifest.max_date;
    } catch (err) {
        return handleException(err);
    }
};

const handleException = (err: AxiosError): never => { throw new Exception(err.response ? err.response.status : 500, err.message); };
