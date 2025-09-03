import {DataTypes, Model} from 'sequelize';
import sequelize from '/server/src/config/config.js';

class User extends Model{}

User.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
});

export default User;