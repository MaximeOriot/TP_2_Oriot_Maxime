const { UserService } = require('../services/userService');

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async getAllUsers(req, res) {
        const { role } = req.query;
        try {
            res.json(await this.userService.getAll(role));
        } catch (error) {
            res.status(500).json({ message: "Server error" });
            console.error('getAllUsers error -> ', error);
        }
    }

    async createUser(req, res) {
        const { name, email, role } = req.body;
        try {
            res.status(201).json(await this.userService.create(name, email, role));
        } catch (error) {
            res.status(400).json({ message: error.message });
            console.error('createUser error -> ', error);
        }
        
    }

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await this.userService.getById(id);

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json({ message: "Server error" });
            console.error('getUserById error -> ', error);
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email, role } = req.body;

            const user = await this.userService.update(id, name, email, role);

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
            console.error('updateUser error -> ', error);
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await this.userService.delete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: "Server error" });
            console.error('deleteUser error -> ', error);
        }
    }
}

exports.UserController = UserController;