//const {onRequest} = require("firebase-functions/v2/https");
//const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51PMYl2D1xaDQdpGo30SDwSEqLUFbJaX2jwOpWcZx6Tdy9kiRpbzOCi5wHary1VhvXXE4LvkyyRO5Q0UdCIzEZKSn00PJEEt9Gf')

// api

// app config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

// api routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received for', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency:'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


// listen command
exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/skincare-store-5d090/us-central1/api 



