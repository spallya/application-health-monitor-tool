import promisify from 'es6-promisify';
import logger from 'winston';
import {
  security as securityObject
} from '../config';

import mongoose from 'mongoose';

mongoose.connect(securityObject.dbConfig.url);
const db = mongoose.connection;
db.on('error' , () => console.log('failed to connect to db'))
  .once('open', () => console.log('connected to DB'));


import app from './server';

// Start Server
app.listen(3000, () => {
    console.log(`Yeyyy server is running on port: ` + 3000);
});
