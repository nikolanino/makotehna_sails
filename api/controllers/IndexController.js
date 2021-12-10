/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

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

};

