const JwtStrategy = require(`passport-jwt`).Strategy;
const ExtractJwt = require(`passport-jwt`).ExtractJwt;
import { User as UserModel } from '../../web/models';
import securityObject from './security';

module.exports = function(passport) {
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = securityObject.security.keys.jwt;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        UserModel.getUserById(jwt_payload._doc._id, (err, user) => {
            if(err) {
                return done(err, false);
            }
            if(user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
}));
};
