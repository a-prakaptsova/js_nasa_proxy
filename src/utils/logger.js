const log = (data) => {
    console.log(data);
}

const error = (error) => {
    console.error(`Error occurred during request: ${error.stack}`);
}

module.exports = { log, error };