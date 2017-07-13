import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
const usersRouter = require(`./routes/usersRouter`);
const serversRouter = require(`./routes/serversRouter`);
const organizationRouter = require(`./routes/organizationRouter`);
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

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, `public`)));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require(`../config/components/passport`)(passport);

app.use(`/users`, usersRouter);

app.use(`/servers`, serversRouter);

app.use(`/organizations`, organizationRouter);

app.get('/', (req, res) => {
    res.send(`Hello MEAN Stack!!!`);
});

module.exports = app;
