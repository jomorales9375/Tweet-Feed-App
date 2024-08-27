import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./user";


export class Message extends Model<InferAttributes<Message>, InferCreationAttributes<Message>>{
    declare id: number;
    declare userId: number;
    declare message: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}


export function MessageFactory(sequelize: Sequelize) {
    Message.init({
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false        
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false        
    }

},
 {
    freezeTableName: true,
    tableName: 'messages',
    sequelize
});

    User.hasMany(Message);
    Message.belongsTo(User);

}