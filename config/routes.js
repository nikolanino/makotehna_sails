/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/about' },
  '/about': {view: 'pages/about'},
  '/contact': {view: 'pages/contact'},

  /////////////////////////////////////////

  'GET /login': { view: 'pages/login' },
  'POST /login': 'AuthController.login',
  '/logout': 'AuthController.logout',
  /*'GET /register': { view: 'pages/register' },*/

  /////////////////////////////////////////

  '/admin/dashboard': { view: 'pages/admin/dashboard', controller: 'index', action: 'dashboard' },
  '/proizvodi': { view: 'pages/proizvodi', controller: 'index', action: 'index' },

  '/add/category': { controller: 'category', action: 'addCategory' },
  '/destroy/category/:id': { controller: 'category', action: 'destroyCategory' },
  '/category/show/:id': { view: 'pages/category/show', controller: 'category', action: 'getCategory' },
  '/category/edit/:id': { controller: 'category', action: 'editCategory' },

  '/add/product': { controller: 'product', action: 'addProduct' },
  '/get/infoProduct/:id': { controller: 'product', action: 'getProduct' },
  '/destroy/product/:id': { controller: 'product', action: 'destroy' },
  '/update/product/:id': { controller: 'product', action: 'updateProduct' },

  '/contact/sendmail': { controller: 'index', action: 'sendMail'},
  '/callLocale': { controller: 'index', action: 'changeLocale'},


};
