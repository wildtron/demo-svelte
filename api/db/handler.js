import { Sequelize, DataTypes } from 'sequelize';
import mysql2 from 'mysql2';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        dialectModule: mysql2,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,
            },
        },
    }
);

const Todos = sequelize.define('todos', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
    },
    todo: {
        type: DataTypes.STRING,
        unique: true,
    },
    checked: {
        type: DataTypes.BOOLEAN,
    },
});

const handlers = {
    async get(params) {
        return await Todos.findAll({ where: { email: params.email } });
    },
    async upsert(params) {
        return await Todos.upsert({
            email: params.email,
            todo: params.todo,
            checked: params.checked,
        });
    },
};

export default async function handler(request, response) {
    if (!request.url) {
        return response.status(400);
    }

    const url = new URL(request.url, `http://${request.headers.host}`);

    const params = Object.fromEntries(url.searchParams);

    const fn = handlers[params.action];

    if (!fn) {
        return response.status(400);
    }

    return response.status(200).json(await fn(params));
}
