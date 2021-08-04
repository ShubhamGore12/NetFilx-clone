const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;

const dotenv = require('dotenv');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

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
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);

app.listen(PORT, () => {
	console.log('Backend server is running...');
});
