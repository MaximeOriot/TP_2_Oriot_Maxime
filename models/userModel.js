const { USERS } = require('../data/user');

class UserModel {
    getAll(role) {
        let filteredUsers = USERS;
        if (role) {
        filteredUsers = USERS.filter(u => u.role === role);
        }
        return filteredUsers;
    }

    create(name, email, role) {
        const emailVerification = USERS.some(u => u.email === email);
        if (emailVerification) {
        throw new Error('Email already exists');
        }
        const newUser = {
            id: USERS.length + 1,
            name,
            email,
            role,
            createdAt: new Date().toISOString(),
        };
        USERS.push(newUser);
        return newUser;
    }

    getById(id) {
        const userId = parseInt(id);
        const user = USERS.find(u => u.id === userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    update(id, name, email, role) {
        const userId = parseInt(id);
        const userIndex = USERS.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        const emailVerification = USERS.some(u => u.email === email);
        if (emailVerification) {
            throw new Error('Email already exists');
        }
        const updatedUser = {
            ...USERS[userIndex],
            name: name || USERS[userIndex].name,
            email: email || USERS[userIndex].email,
            role: role || USERS[userIndex].role,
        };
        USERS[userIndex] = updatedUser;
        return updatedUser;
    }

    delete(id) {
        const userId = parseInt(id);
        const userIndex = USERS.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        USERS.splice(userIndex, 1);
    }
}

exports.UserModel = UserModel;