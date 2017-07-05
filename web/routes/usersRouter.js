const router = require(`express`).Router();
const passport = require(`passport`);
const jwt = require(`jsonwebtoken`);
import {
  security as securityObject
} from '../../config';
import { User as UserModel } from '../models';

// Register
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

// Authenticate
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

// Profile
router.get(`/profile`, passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
