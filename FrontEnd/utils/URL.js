/*
* Module in which to store constant URL values
*/

import { Platform } from "react";

// The file env.json is used in place of actual system enviroment variables
// since those don't translate to a mobile device, hence we need some other way
// to define them. Think of this file being the same as config.json in the server folder.
const ENV = require("./env.json");

// Set the useAWS environment variable to false when you do NOT want to use
// the AWS server. If not set, then the default will assume that AWS SHOULD be used.
const { useAWS } = false;

// Make sure the useAWS variable is actually defined before referencing it
const useAWSServer = typeof(useAWS) === "undefined" || (useAWS !== false);

// This will set the base URL depending on whether AWS or localhost is being used.
// Note that Android OS uses a proxy for localhost, hence the need for the Platform check.
// TODO: Move these URLs out of code and into .env files
/* const baseURL = useAWSServer
   ? "http://ec2-18-222-158-16.us-east-2.compute.amazonaws.com"
   : "http://localhost:3000";
*/
const baseURL = "http://localhost:3000";

console.debug(`============> URL.JS -- useAWSServer='${useAWSServer}' -- useAWS='${useAWS}' -- baseURL='${baseURL}'`);

/**
* List of URLs
*
*/
const URL = {
   // LEVEL
   addLevel:                      `${baseURL}/levels/add`,
   archiveLevel:                  `${baseURL}/levels/:id/archive`,
   getLevel:                      `${baseURL}levels/:id`,
   getLevels:                     `${baseURL}/levels`,
   updateLevel:                   `${baseURL}levels/:id/update`
};

/**
* Export the list and make the values constant by freezing them from any external changes
*/
module.exports = Object.freeze(URL);
