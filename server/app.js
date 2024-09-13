const express = require('express');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');
const cors = require('cors');
const path = require('path');

const app = express();

// serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// handle the routes if it's not in the server from the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// enable cors
app.use(cors({
    origin: 'https://fsd61wde-socify.onrender.com/',
    credentials: true
}));

// middlewares
// parse the cookies
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));

// parse the incoming request with JSON payload
app.use(express.json());

// setup the routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/posts', commentRouter);

// export the app
module.exports = app;