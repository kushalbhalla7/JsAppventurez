const router = require('express').Router();

const userController = require('../controllers/user');

router.post(
    '/add',
    userController.addUser
);

router.get(
    '/get',
    userController.getUser
);

router.put(
    '/update',
    userController.updateUser
);

router.delete(
    '/delete',
    userController.deleteUser
);

module.exports = router;