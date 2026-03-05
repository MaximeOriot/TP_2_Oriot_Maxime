const { UserModel } = require('../models/userModel');

class UserController {
    constructor() {
        this.userModel = new UserModel();
    }

    getAllUsers(req, res) {
        const { role } = req.query;
        res.json(this.userModel.getAll(role));
    }

    createUser(req, res) {
        const { name, email, role } = req.body;
        res.status(201).json(this.userModel.create(name, email, role));
    }

    getUserById(req, res) {
        const { id } = req.params;
        res.json(this.userModel.getById(id));
    }

    updateUser(req, res) {
        const { id } = req.params;
        const { name, email, role } = req.body;
        res.json(this.userModel.update(id, name, email, role));
    }

    deleteUser(req, res) {
        const { id } = req.params;
        this.userModel.delete(id);
        res.status(204).send();
    }
}

exports.UserController = UserController;