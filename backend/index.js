const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config()

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const authRoute = require('./routes/auth.route');
const teacherRoute = require('./routes/teacher.route');
const studentRoute = require('./routes/student.route');

const authMiddleware = require('./middlewares/auth.middleware');

app.use(cors());
app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION_SECRET));

app.get('/', (req, res) => {
  res.render('login');
})

app.use('/auth', authRoute);
app.use('/teacher', authMiddleware.requireAuth, teacherRoute);
app.use('/student', authMiddleware.requireAuth, studentRoute);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})