"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageFactory = exports.Message = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
class Message extends sequelize_1.Model {
}
exports.Message = Message;
function MessageFactory(sequelize) {
    Message.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        tableName: 'messages',
        sequelize
    });
    user_1.User.hasMany(Message);
    Message.belongsTo(user_1.User);
}
exports.MessageFactory = MessageFactory;
