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
        // console.log("params: ",params);
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
                res.status(200).json({ 
                    status: 'OK', 
                    data: { 
                        productName: product.productName,
                        productNameEN: product.productNameEN,
                        productCode: product.productCode,
                        productDescription: product.productDescription,
                        productDescriptionEN: req.body.productDescriptionEN,
                        productCategory: product.productCategory,
                        productImageID: product.productImageID,
                        productPurpose: product.productPurpose,
                        productPurposeEN: req.body.productPurposeEN
                    }
                });
            }
        });
    },

    updateProduct: function(req, res, next) {

        var params = req.allParams();
        // console.log("params: ",params);

        Product.findOne(req.param('id'), function foundProduct(err, fProduct){

            if(req.body.productImageID != 'current'){
                // console.log("Vlegov vo funkcija 2");
                req.file(req.body.productImageID).upload({
                    dirname: '../../assets/images/products',
                    maxBytes: 10000000
                },function (err, uploadedFile) {
                    if (err) {
                        return res.serverError("Error"); 
                    }
                    // console.log(uploadedFile);
        
                    if (uploadedFile.length === 0){
                        console.log('No image attached');
                        return res.redirect('/admin/dashboard');
                    }
        
                    var fileName = uploadedFile[0].filename;
                    var fileUID = uploadedFile[0].fd.replace(/^.*[\\\/]/, '');
        
                    console.log("uploadedFile: ", uploadedFile);
                    // params.productImageName = fileName;
                    // params.productImageID = fileUID;
        
                    Product.update(req.param('id'), { productName: req.body.productName, productNameEN: req.body.productNameEN, productCategory: req.body.productCategory, productCode: req.body.productCode, 
                        productDescription: req.body.productDescription, productDescriptionEN: req.body.productDescriptionEN, productPurpose: req.body.productPurpose, productPurposeEN: req.body.productPurposeEN, productImageName: fileName, productImageID: fileUID }, function productUpdated(err, product){
                        if(err) return next(err);
                        setTimeout(function() {
                            res.status(200).json({ data: { info: "OK", productImageID: product.productImageID } });
                        }, 3000)
                    });
                });
            }else{
                // console.log("Vlegov vo funkcija 3");
                Product.update(req.param('id'), { productName: req.body.productName, productNameEN: req.body.productNameEN, productCategory: req.body.productCategory, productCode: req.body.productCode, productDescription: req.body.productDescription,productDescriptionEN: req.body.productDescriptionEN, productPurpose: req.body.productPurpose, productPurposeEN: req.body.productPurposeEN, }, function productUpdated(err, product){
                    if(err) return next(err);

                    res.status(200).json({ data: { info: "OK" } });
                });
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

                res.status(200).json({info: "OK"});
                // res.redirect('/admin/dashboard');
            });
        });
    },
};

