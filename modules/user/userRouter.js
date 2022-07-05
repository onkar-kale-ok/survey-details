const Router = require('express-promise-router');

const controller = require('./userController');

module.exports = () => {
    console.log("user routes");
    const router = Router({ mergeParams: true });
    
    router.route('/login').post(controller.login);
    router.route('/createUser').post(controller.createUser);

    return router;
};