const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const bodyParse = require('body-parser');

const connectDB = require('./config/db');

const { readdirSync } = require('fs');
// const productRouters = require('./routes/product')
// const authRouters = require('./routes/auth')

const app = express();

connectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParse.json({ limit: '10mb' }));

// Route 1
// app.get('/product', (req, res) => {
//     res.send('Hello Endpoint 555')
// })

// Route 2
// app.use('/api', productRouters)
// app.use('/api', authRouters)

// Route 3
readdirSync('./routes').map(r => app.use('/api', require('./routes/' + r)));

app.listen(5000, () => console.log('Server is Running 5000'));
