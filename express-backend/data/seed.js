require('dotenv').config()
const { default: mongoose } = require('mongoose');
const User = require('../models/userModel');
const connectDB = require('../config/db');

const insertUsers = async () => {
    await connectDB();

    const userCounts = await User.countDocuments();

    if(userCounts === 0) {
        try {
            await User.insertMany([
                {
                    name: 'Maxime',
                    email: 'maxime@example.com',
                    tags: [],
                    address: {
                        city: 'bordeaux',
                        country: 'france',
                    },
                    role: 'admin',
                },
                {
                    name: 'Enzo le dozo',
                    email: 'dozo@example.com',
                    tags: [],
                    address: {
                        city: 'bordeaux',
                        country: 'france',
                    },
                    role: 'user',
                },
                {
                    name: 'Samuel',
                    email: 'sam@example.com',
                    tags: [],
                    address: {
                        city: 'bordeaux',
                        country: 'france',
                    },
                    role: 'user',
                },
            ]);
        } catch (error) {
            console.error(`Erreur d'insertion : ${error}`);
        }
        console.log('Users inséré avec succés');
    } else {
        console.log('Users déjà créés');
    }

    mongoose.disconnect();
}

insertUsers();
