/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        productName: { type: 'string' },
        productCode: { type: 'string' }, 
        productCategory: { type: 'string' },
        productDescription: { type: 'string' }, 
        productImageID: { type: 'string' },
        productImageName: { type: 'string' }, 

    },

};

