import {DataTypes, Model} from "sequelize";
import sequelize from '/server/src/config/config.js';


class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    timestamps: true
})