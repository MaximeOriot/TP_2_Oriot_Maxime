const express = require('express')
const { UserController } = require('../controllers/useController');

const router = express.Router();
const userController = new UserController();

router.route('/users')
  .get((req, res) => { userController.getAllUsers(req, res); })
  .post((req, res) => { userController.createUser(req, res); });

router.route('/users/:id')
    .get((req, res) => { userController.getUserById(req, res); })
    .put((req, res) => { userController.updateUser(req, res); })
    .delete((req, res) => { userController.deleteUser(req, res); });

module.exports = router;