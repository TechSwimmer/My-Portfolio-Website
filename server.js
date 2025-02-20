import dotenv from "dotenv";
dotenv.config();


import express from 'express';
import cors from 'cors';
import bodyParser  from "body-parser";
import nodemailer from "nodemailer";

const PORT = 5000
const app = express()
app.use(cors());
app.use(bodyParser.json());

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
         user: process.env.EMAIL_USER,
         pass:process.env.EMAIL_PASS   

    }
});


app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Email sent successfully!" });
    });
});



app.listen(5000, () => console.log(`Server running on port ${PORT}`));