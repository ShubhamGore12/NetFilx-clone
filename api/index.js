const express = require('express');
const app = express();
const PORT = 8000;

const dotenv = require('dotenv');
const authRouter = require('./routes/auth');

dotenv.config();

const mongoose = require('mongoose');
const { Router } = require('express');

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('DB Connection Successfull!'))
	.catch((err) => console.log(err));

app.use(express.json());

app.use('/api/auth', authRouter);

app.listen(PORT, () => {
	console.log('Backend server is running...');
});
