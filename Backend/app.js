const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');
const authRoute = require('./Routes/authRoute');
const saucesRoute = require('./Routes/saucesRoute')

// Connexion à la DataBase MongoDB

mongoose.connect('mongodb+srv://TheoLarrue:Kor2302*@cluster0.uvmy3.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Lancement d'Express

const app = express();

// Config Cors / Headers

app.use(helmet());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware parse request Json

app.use(express.json());

// Routes

app.use('/api/auth', authRoute);
app.use('/api/sauces', saucesRoute);
app.use('/images', express.static(path.join(__dirname, 'images')));



module.exports = app;