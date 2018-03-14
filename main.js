"use strict";

const config = require('config');
// load dependencies
const db = require("./database");

// boostrap app

db.connect(config.get('mongodb.uri'))
        .then((msg) => {
            console.log(msg);
            const generateData = require("./generate-data");
            return generateData();
        })
    .then(() => {
        console.log("---------------Insert successfully---------");
        db.close();
        process.exit(0);
    })
    .catch(err=> {
        console.log(err)
    });
