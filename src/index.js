const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = async () => {
    // Create the express object

    const app = express();

    // middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);

        sendBasicEmail(
            'support@admin.com',
            'teja.dandu484@gmail.com',
            'this is a testing email',
            'Hey, what up buddy , notification from Reminder service'
        );
    });
}

setupAndStartServer();
