const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Le nom est obligatoire'],
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Email invalide'],
    },
    createdAt: {
            type: Date,
            default: Date.now,
    },
    tags: [String], // tableau de strings
    address: { // objet imbriqué
        city: String,
        country: String,
    },
});
const User = model('User', userSchema);
module.exports = User;
