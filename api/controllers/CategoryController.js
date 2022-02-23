/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    addCategory: function(req, res) {
        var params = req.allParams();
        
        req.file('categoryBg_Name').upload({
            dirname: '../../assets/images/category',
            maxBytes: 50000000
        },function (err, uploadedFile) {
            if (err) {
                return res.serverError("Error"); 
            }
            // console.log(uploadedFile);

            if (uploadedFile.length === 0){
                return res.redirect('/admin/dashboard');
                return console.log('Category is not created');
            }

            var fileName = uploadedFile[0].filename;
            var fileUID = uploadedFile[0].fd.replace(/^.*[\\\/]/, '');

            params.categoryImageName = fileName;
            params.categoryImageID = fileUID;

            Category.create(params, function categoryCreated(err, category) {
                if(err) return next(err);
                setTimeout(function() {
                    res.redirect('/admin/dashboard');
                }, 3000)
            });
        });
    },

    destroyCategory: function(req, res) {
        Category.destroy(req.param('id')) .exec(function(err, category) {
            if(err) return (err);

            res.redirect('/admin/dashboard');
        });
    },

    getCategory: function(req, res){
        Category.findOne(req.param("id")).exec(function(err, category) {
            if (err) return console.log(err);

            Product.find(productFound);
  
            function productFound(err, products) {
                if(err) return console.trace(err);

                return res.view({
                    category:category, products: products
                });            
            }
        });
    }

};

