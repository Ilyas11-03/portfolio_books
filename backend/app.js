const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth');
const booksApi = require('./routes/bookApi')

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());

//Routes
app.use('/auth', authRouter);
app.use('/bookApi', booksApi)

//Launch the server
app.listen(5000, () => {
    console.log('Serveur démarré sur http://localhost:5000');
});
