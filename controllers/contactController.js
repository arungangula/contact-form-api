const { validationResult } = require('express-validator');

exports.sendContactEmail = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    res.json({"msg": "Hello world"});
}