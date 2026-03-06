const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    const uri = process.env.MONGO_URI;

    try {
        await mongoose.connect(uri);
        console.log('Connecté à la base de données mongo avec succés');
    } catch (error) {
        console.error('Erreur de connection à la base de données : ', error);
        process.exit(1);
    }
}

module.exports = connectDB;