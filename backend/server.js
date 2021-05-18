//require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dbuser:Password123@cluster0.5mdym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//mongoose.connect(process.env.DATABASE_URL, { 
mongoose.connect(uri, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
 });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');
app.use('/auth', userRouter);
app.use('/auth', authRouter);
app.use('/api/products', productsRouter);

app.listen(3000, () => console.log('Server Started'));