const { USERS } = require('../data/user');
const User = require('../models/userModel');

class UserService {
    async getAll(role) {
        return await User.find({});
    }

    async create(name, email, role) {
        return await User.create({
            name,
            email,
            tags: [],
            address: {
                city: 'bordeaux',
                country: 'france',
            },
        });
    }

    async getById(id) {
        return await User.findById(id, {});
    }

    async update(id, name, email, role) {
        return await User.updateOne({ _id: id }, { name, email });
    }

    async delete(id) {
        await User.deleteOne({ _id: id });
    }
}

exports.UserService = UserService;