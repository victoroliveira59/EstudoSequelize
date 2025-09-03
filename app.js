import express from 'express';
import sequelize from 'server/src/config/config.js';
import User from './models/User.js';
import Post from './models/Post.js';

const app = express();
const PORT = 3000;

User.hasOne(Post,{ foreignKey: 'userId'});
Post.belongsTo(Post,{ foreignKey: 'userId'});


app.get('/', (req, res) => {
    res.status(200).send({message: "Hello World!"});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});