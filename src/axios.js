import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-16a0f.cloudfunctions.net/api' //API (cloud function) URL
    // Testing API
    // http://localhost:5001/clone-16a0f/us-central1/api
});

//When deployed, I encounter an error : C:\Users\Joe\Desktop\amazon-clone\functions\index.js
//  18:56  error  Parsing error: Unexpected token =>
// This is due to the default syntax in functions\package.json
// "scripts": {
//   "lint": "eslint ."
//  },

// changed to 

// "scripts": {
//   "lint": "eslint"
//  },

// https://stackoverflow.com/questions/53735009/including-async-function-within-firebase-cloud-functions-eslint-parsing-error



export default instance;