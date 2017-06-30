const JwtStrategy = require(`passport-jwt`).Strategy;
const ExtractJwt = require(`passport-jwt`).ExtractJwt;
const UserIndex = require(`../../web/models/user`);
import securityObject from './security';

module.exports = function(passport) {
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = securityObject.security.keys.jwt;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        UserIndex.helpers.getUserById(jwt_payload._doc._id, (err, user) => {
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
