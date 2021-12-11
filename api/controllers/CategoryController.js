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

};

