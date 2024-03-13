class Exception extends Error {
    constructor(statusCode, message) {
        super();
        this.code = statusCode;
        this.message = message;
    }
}

module.exports = Exception;