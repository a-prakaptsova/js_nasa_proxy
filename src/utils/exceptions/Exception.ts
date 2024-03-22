export class Exception extends Error {
    status?: number;
    constructor(statusCode: number , message: string) {
        super();
        this.status = statusCode;
        this.message = message;
    }
}
