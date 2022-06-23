const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 5, // Limit each IP to 5 requests per `window` (here, per 5 minutes)
    message: "Compte bloqué pendant 5min suite à 5 tentatives de connexion."
});

module.exports = limiter