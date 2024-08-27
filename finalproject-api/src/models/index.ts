import { Sequelize } from "sequelize";
import { UserFactory } from "./user";
import { MessageFactory } from "./message";


const dbName = 'twitterdb';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});


UserFactory(sequelize);
MessageFactory(sequelize);

export const db = sequelize;