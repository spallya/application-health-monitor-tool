import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
// const { exec } = require('child_process');
// const cron = require('node-cron');
// let count = 1;
// // cron.schedule('* * * * *', function(){
// setInterval(()=>{
//   console.log('running a task every minute');
//   console.log(count++);
//   exec(`curl "localhost:27017/meanauth"`, (error, stdout, stderr)=>{
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.log(JSON.stringify(stderr));
//   });
// },1000);

// App initialization
const app = express();

// Users router
const usersRouter = require(`./routes/usersRouter`);

// CORS Middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, `public`)));

// Body-Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require(`../config/components/passport`)(passport);

// Users Route
app.use(`/users`, usersRouter);

// Index Route
app.get('/', (req, res) => {
    res.send(`Hello MEAN Stack!!!`);
});

module.exports = app;
