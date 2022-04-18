/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 var nodemailer = require('nodemailer');

 var smtpTransport = nodemailer.createTransport({
     service: 'gmail',
     secure: false,
     port: 25,
     auth: {
         user: 'makotehnapage@gmail.com',
         pass: 'm@kotEhn@!'
     },
     tls: {
         rejectUnauthorized: false
     }
 });

module.exports = {

    dashboard: function (req, res) {
        User.find().exec(function(err, users){
            if(err) return console.log(err);
            Product.find().exec(function(err, products){
                if(err) return console.log(err);
                Category.find().exec(function(err, categories){
                    if(err) return console.log(err);

                    return res.view({ users:users, categories:categories, products:products });
                });
            });
        });
    },

    index: function (req, res) {
        User.find().exec(function(err, users){
            if(err) return console.log(err);
            Product.find().exec(function(err, products){
                if(err) return console.log(err);
                Category.find().exec(function(err, categories){
                    if(err) return console.log(err);

                    return res.view({ users:users, categories:categories, products:products });
                });
            });
        });
    },

    sendMail: function (req, res) {
        const output = `
        <head>
            <meta http-equiv="content-type" content="text/html; charset=ISO-8859-15">
        </head>
        <div>
            Испратено од: ${req.body.emailFrom}<br><br><br>
            <p style="white-space: break-spaces; text-align: left;">${req.body.message}</p>
        </div>`;
        var mailOptions = {
            to: 'makotehna.info@gmail.com',
            from: req.body.emailFrom,
            subject: req.body.subject,
            html: output
        };
        console.log(mailOptions.from);
        smtpTransport.sendMail(mailOptions, function(error) {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json({info:'OK'});
                
            }
        });
    }

};

