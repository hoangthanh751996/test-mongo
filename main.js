"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require('config');

// load dependencies
const db = require("./database");

// boostrap app
const app = express();
const server = require("http").Server(app);

db.connect(config.get('mongodb.uri'))
        .then((msg) => {
            console.log(msg);

            app.use(cors());
            app.use(bodyParser.json({limit: '50mb'}));
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(cookieParser());
            let PORT = config.get('server.port');
            if(process.env.PORT) {
                PORT = process.env.PORT;
            }
            server.listen(PORT, function (err) {
                if (err) throw err;

                console.log("Test Mongo Server is listening on port " + PORT);
            });
        });
