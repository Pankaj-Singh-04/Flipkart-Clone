import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import DefaultData from './default.js';
import Router from './routes/route.js';

import stripePackage from 'stripe';


const app=express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

// for payment
const stripeSecretKey = "sk_test_51Ou9GBSJNwVoAu8JpiRqUpYPWGj22wWab9IYWEjrhNuSpm2Dbx7vWdP0IzGNGMECPXvko6i1c4LXjJogzxjFSXvh00RljWvQWc";
const stripe = stripePackage(stripeSecretKey);

app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    // console.log(products);

    // Default values for customerName and customerAddress
    const customerEmail = "xyz@example.com";

    // Map the products array to construct line items for the Stripe session
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.title.longTitle,
                images: [product.url] 
            },
            unit_amount: product.price.cost * 100, 
        },
        quantity: product.quantity
    }));

    try {
        // Create a new Stripe checkout session with the constructed line items
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/cart",
            cancel_url: "http://localhost:3000/cart",
            billing_address_collection: 'required', // Specify that billing address is required
            customer_email: customerEmail, // Include customer email
        });

        // Send the session ID back to the client
        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        // Handle any errors that occur during session creation
        console.error("Error creating checkout session:", error);
        res.status(500).send("Error creating checkout session");
    }
});


const UserName=process.env.USER;
const Password=process.env.Password;
connection(UserName,Password);
const PORT=8000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
DefaultData();