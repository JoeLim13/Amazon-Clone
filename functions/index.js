const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51INDSfIkf9zt2WM0Cl8jrZJqU0wNZvpFsB7Cjvj0XmMZrnIcjZOapwRqLus6ArDxfCdHQUyzVj6Xhbhxq8WyYofL00yytaD4T0')

//API

// - App config
const app = express() 

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    })

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/clone-16a0f/us-central1/api