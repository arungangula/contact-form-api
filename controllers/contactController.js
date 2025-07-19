const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

exports.sendContactEmail = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    const  { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_USER}>`,
            to: `${process.env.EMAIL_NAME} <${process.env.EMAIL_USER}>`,
            subject: 'New Contact Form Message',
            text: message,
            html: `<p><strong>From: </strong> ${name} ${email}</p><br/>
                    <p><strong>Message: </strong> ${message}</p>
            `
        })
        res.json({message: 'Message sent successfully'});

    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Failed to send email'});
    }

}