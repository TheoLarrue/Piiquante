const emailValidator = require('email-validator');

module.exports = (req, res, next) => {
    if (!emailValidator.validate(req.body.email)) {
        return res.status(400).json({ message: "Veuillez saisir une adresse électronique valide." });
    } else {
        next();
    }
};