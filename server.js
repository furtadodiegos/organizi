const express = require('express');
const http = require('http');
const { urlencoded, json } = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(logger(process.env.NODE_ENV === 'production' ? 'tiny' : 'dev'));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use(helmet());

// require('./configs/environments');
// require('./configs/mongo');
// require('./configs/routes')(app);
// require('./middleware/handleError')(app);

app.get('/', (req, res, next) => {
    res.send('Hello world');
});

// app.listen(PORT, () => console.log(`Server is runing on: ${PORT}`));
http.createServer(app).listen(PORT, () => console.log(`Api running on port: ${PORT}`));
