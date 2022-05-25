const express = require('express');
const { SaveUser } = require('./controllers/save.user.controller');

// Se inicializa aplicación
const app = express();
const cors = require('cors');
const router = express.Router();

router.post('/user',SaveUser)

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', [router]);

module.exports = app;