const express = require('express');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');

const router = express.Router();

const limiter = rateLimit({
    windowMs: 1 * 60 * 60, //Hour
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
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        res.json({"msg": "Hello world"});
    }
);
module.exports = router;