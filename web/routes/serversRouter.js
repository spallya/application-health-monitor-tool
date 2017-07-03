const router = require(`express`).Router();
import passport from 'passport';
import jwt  from 'jsonwebtoken';
import {
  security as securityObject
} from '../../config';
const UserIndex = require(`../models/user`);




module.exports = router;
