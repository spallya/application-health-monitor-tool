const router = require(`express`).Router();
const passport = require(`passport`);
const jwt = require(`jsonwebtoken`);
import {
  security as securityObject
} from '../../config';
import { User as UserModel } from '../models';

router.post(`/register`, (req, res, next) => {
    let newUser = new UserModel({
        firstName:  req.body.firstName,
        lastName:  req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        organization: req.body.organization
    });
    UserModel.addUser(newUser).then((response)=>{
      res.json(response);
    });
});

router.post(`/authenticate`, (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    UserModel.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, msg: `User not found`});
        } else {
            UserModel.comparePassword(password, user.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch) {
                    const token = jwt.sign(user, securityObject.keys.jwt, {
                        expiresIn: 604880 // 1 week secs
                    });
                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        user: {
                            id: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email
                        }
                    });
                } else {
                    res.json({success: false, msg: `Password incorrect`});
                }
            });
        }
    });
});

router.get(`/profile`, passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let userProfile = {
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    userId: req.user._id,
  }
  res.json({user: userProfile});
});

module.exports = router;
