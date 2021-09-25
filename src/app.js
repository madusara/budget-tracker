const express = require('express');
// const cors = require('cors');
const dotenv = require('dotenv')
const dbConnect = require('./config/dbConnect');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
const userRouter = require('./routes/users/usersRoutes')


const app = express();

dotenv.config();

//db
dbConnect();

//middleware
app.use(express.json());

//routes
app.use('/api/users', userRouter);

//error
app.use(notFound);
app.use(errorHandler);

module.exports = app;