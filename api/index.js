const express = require('express');
const mongoose = require('mongoose');
const { Router } = require('express');
const app = express();
const PORT = 8000;

const dotenv = require('dotenv');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('DB Connection Successfull!'))
	.catch((err) => console.log(err));

app.use(express.json());

//// Router

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.listen(PORT, () => {
	console.log('Backend server is running...');
});
