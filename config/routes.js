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

  '/': { view: 'pages/index' },
  '/about': {view: 'pages/about'},
  '/contact': {view: 'pages/contact'},

  /////////////////////////////////////////

  'GET /login': { view: 'pages/login' },
  'POST /login': 'AuthController.login',
  '/logout': 'AuthController.logout',
  'GET /register': { view: 'pages/register' },

  /////////////////////////////////////////

  '/admin/dashboard': { view: 'pages/admin/dashboard', controller: 'index', action: 'dashboard' },
  '/proizvodi': { view: 'pages/proizvodi', controller: 'index', action: 'index' },

  '/add/category': { controller: 'category', action: 'addCategory' },
  '/destroy/category/:id': { controller: 'category', action: 'destroyCategory' },

  '/add/product': { controller: 'product', action: 'addProduct' },
  '/edit/product': { controller: 'product', action: 'editProduct' },
  '/destroy/product/:id': { controller: 'product', action: 'destroy' },
  '/contact/sendmail': { controller: 'index', action: 'sendMail'},


};
