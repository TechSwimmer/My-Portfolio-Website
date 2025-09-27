import dotenv from "dotenv";
dotenv.config();


import express from 'express';
import cors from 'cors';
import bodyParser  from "body-parser";
import nodemailer from "nodemailer";

const PORT = 5000
const app = express()
// app.use(cors());
app.use(cors({
        origin: "https://techdevnikhil.netlify.app",
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["Content-Type"],
}));
app.use(bodyParser.json());

const transport = nodemailer.createTransport({
    service: 'smtp.sendgrid.net',
    PORT:587,
    secure:false,
    auth: {
         user: "apiKey",
         pass:process.env.SENDGRID_API_KEY   

    }
});


app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.post("/send-email", async (req, res) => {
    console.log("Received request:", req.body);

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        console.log("Validation failed");
        return res.status(400).json({ error: "All fields are required" });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER_OWNER,
        to: process.env.EMAIL_USER_OWNER,
        subject: `New Contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        const info = await transport.sendMail(mailOptions);
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Nodemailer error:", error); // <-- See exact error
        res.status(500).json({ error: error.message });
    }
});


app.listen(5000, () => console.log(`Server running on port ${PORT}`));