const express = require('express');
const rateLimit = require('express-rate-limit');
const { body } = require('express-validator');
const { sendContactEmail } = require('../controllers/contactController')

const router = express.Router();

const limiter = rateLimit({
    windowMs: 1000 * 60 * 60, //Hour
    max: 5,
    message: {
        error: 'Too many submissions, Try again later'
    }
});

router.post('/', limiter, [
    body('name').notEmpty().withMessage('Name is Required'),
    body('email').isEmail().withMessage('Valid Email is required'),
    body('message').notEmpty().withMessage('Message is Required')
],
    sendContactEmail
);
module.exports = router;