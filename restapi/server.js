const express = require("express");
const promBundle = require("express-prom-bundle");
const cors = require("cors");
const mongoose = require("mongoose");
const api = require("./api");

//const metricsMiddleware = promBundle({includeMethod: true});
//app.use(metricsMiddleware);

function connect(){
    //The MONGO_URI variable is the connection string to MongoDB Atlas (for production). This env variable is created in heroku.
    mongo_uri = process.env.MONGO_URI || "mongodb://localhost:27017/api";
    mongoose.connect(mongo_uri, { useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
        const app = express();

        //Monitoring middleware
        const metricsMiddleware = promBundle({includeMethod: true});
        app.use(metricsMiddleware);

        //app.options("*", cors());
        app.use(cors());
        app.use(express.json());
        app.use("/api", api);

        app.use( (request, response) => {
            //para hacer el acceso solo desde estas ips
            response.header("Access-Control-Allow-Origin", "https://radarinen3awebapp.herokuapp.com/*");
            response.header("Access-Control-Allow-Origin", "https://radarinen3arestapi.herokuapp.com/*");
            response.header("Access-Control-Allow-Origin", "http://localhost:3000/*"); 
            response.header("Access-Control-Allow-Origin", "http://localhost:5000/api/*");
            //para hacer el acceso solo desde estas ips
            request.header("Access-Control-Allow-Origin", "https://radarinen3awebapp.herokuapp.com/*");
            request.header("Access-Control-Allow-Origin", "https://radarinen3arestapi.herokuapp.com/*");
            request.header("Access-Control-Allow-Origin", "http://localhost:3000/*");
            request.header("Access-Control-Allow-Origin", "http://localhost:5000/api/*");
            request.header("GET, POST");
        });


        app.listen(process.env.PORT || 5000, () => {
            console.log("Server has started! Using db in "+mongo_uri)
        });
    });
}

// Connect to MongoDB database, the wait is for giving time to mongodb to finish loading
setTimeout(connect,5000);