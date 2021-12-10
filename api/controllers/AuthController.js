/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');
module.exports = {
    login: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user
                });
                return res.redirect('/login');
            }
            req.login(user, function(err) {
                if (err) res.send(err);
                
                return res.redirect('/admin/dashboard');
            });
        })(req, res);
    },
    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};

