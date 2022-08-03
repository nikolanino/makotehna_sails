/**
 * Local environment settings
 *
 * Use this file to specify configuration settings for use while developing
 * the app on your personal system.
 *
 * For more information, check out:
 * https://sailsjs.com/docs/concepts/configuration/the-local-js-file
 */
module.exports = {

    port: 1337,
   environment: 'development',
    //environment: 'production',
  
   datastores: {
                default: {
                        adapter: 'sails-mongo',
                        host: 'localhost',
                        port: 27017,
                        user: '',
                        password: '',
                        database: 'makotehnaEN'
                }
        },
 
    models:{
        connection: 'default',
        migrate: 'safe'
    },
};
