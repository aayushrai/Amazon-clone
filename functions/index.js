const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HQJ4HHvjyLwkiWqtXMehm6NxNLaMJdo1cXUeV3DFG7kuRdCDFD2jL2F9YebGRCQJy6QRrG8xelbppP2pwLsz2U9001t1tQbPQ" 
);
// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
//example endpoint
//http://localhost:5001/clone-e5042/us-central1/api