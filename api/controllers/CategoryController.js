/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    addCategory: function(req, res) {
        Category.create(req.allParams(), function categoryCreated(err, category) {
            if(err) return next(err);

            res.redirect('/admin/dashboard');
        });
    },

    destroyCategory: function(req, res) {
        Category.destroy(req.param('id')) .exec(function(err, category) {
            if(err) return (err);

            res.redirect('/admin/dashboard');
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

};

