const { DataTypes } = require("sequelize");
const sequelize = require('../database/connection')



const Post = sequelize.define('post',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
    },
)

sequelize
    .sync()
    .then(() => {
        console.log("Post synchronized with the database(znz).");
    })
    .catch((error) => {
        console.error("Error synchronizing Post", error);
    });


module.exports = Post