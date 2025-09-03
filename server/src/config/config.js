import {Sequelize} from 'sequelize';


const sequelize =  new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});


async function testConnectiosn(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(e){
        console.error('Unable to connect to the database:', e);
    }
}

testConnectiosn();
export default sequelize;