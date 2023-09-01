import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface ILivro {
    id: number;
    title: string;
    description: string;
    autorId: number;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export type LivroCreationAttributes = Optional<ILivro, 'id'>;

export class Livro extends Model<ILivro,LivroCreationAttributes>{
    declare id: number | null;
    declare title: string | null;
    declare description: string | null;
    declare autorId: number | null;
    declare price: number | null;
    declare createdAt: Date | null;
    declare updatedAt: Date | null;
}

Livro.init({
    id: {
        type: new DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    autorId: {
        type: new DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'autores',
            key: 'id'
        }
    },
    price: {
        type: new DataTypes.FLOAT,
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
    }
},{
    sequelize,
    modelName: 'livro',
    tableName: 'livros'
}
)