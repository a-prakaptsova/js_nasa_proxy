const express =require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running on the port ${PORT}`);
});