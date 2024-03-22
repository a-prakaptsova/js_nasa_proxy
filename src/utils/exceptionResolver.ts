import { AxiosError } from "axios";
import { Exception } from '../utils/exceptions/Exception';

export const resolveException = (err: AxiosError | Exception): never => {
    let statusCode: number | undefined;
    if (err instanceof AxiosError) {
        statusCode = err.response?.status;
    } else if (err instanceof Exception) {
        statusCode = err.status;
    }
    throw new Exception(statusCode ?? 500, err.message);
};