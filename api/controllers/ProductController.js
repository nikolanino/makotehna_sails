/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var fs = require('fs');

module.exports = {
  
    addProduct: function(req, res, next) {

        var params = req.allParams();

        req.file('productImage_Name').upload({
            dirname: '../../assets/images/products',
            maxBytes: 50000000
        },function (err, uploadedFile) {
            if (err) {
                return res.serverError("Error"); 
            }
            // console.log(uploadedFile);

            if (uploadedFile.length === 0){
                return res.redirect('/admin/dashboard');
                return console.log('Product is not created');
            }

            var fileName = uploadedFile[0].filename;
            var fileUID = uploadedFile[0].fd.replace(/^.*[\\\/]/, '');

            params.productImageName = fileName;
            params.productImageID = fileUID;

            Product.create(params, function productCreated(err, product) {
                if(err) return next(err);
                setTimeout(function() {
                    res.redirect('/admin/dashboard');
                }, 3000)
            });
        });
    },

    getProduct: function(req, res) {
        Product.findOne(req.param('id'), function productFound(err, product){
            if(err) { 
                console.log(err); 
            }else{
                res.status(200).json({ status: 'OK', data: { productName: product.productName, productCode: product.productCode, productDescription: product.productDescription, productCategory: product.productCategory, productImageID: product.productImageID  }});
            }
        });
    },

    destroy: function(req, res, next) {
        Product.findOne(req.param('id'), function bookFounded(err, product){
            var path = 'assets/images/products/';
            fs.unlink(path + product.productImageID, function (err) {
                if (err) throw err;
            });
            Product.destroy(req.param('id')) .exec(function(err, result) {
                if(err) return (err);
                res.redirect('/admin/dashboard');
            });
        });
    },
};

