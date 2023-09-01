import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface IAutor {
    id: number;
    nome: string;
    email: string;
    username: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type AutorCreationAttributes = Optional<IAutor, 'id'>;

export class Autor extends Model<IAutor, AutorCreationAttributes>{
    declare id: number | null;
    declare nome: string | null;
    declare email: string | null;
    declare username: string | null;
    declare password: string | null;
    declare createdAt: Date | null;
    declare updatedAt: Date | null;
}

Autor.init({
    id: {
        type: new DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: new DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    updatedAt: {
        type: new DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
}

,{
    sequelize,
    tableName: 'autores',
    modelName: 'autor'
}
)
