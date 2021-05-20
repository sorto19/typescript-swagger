"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTask = void 0;
const nanoid_1 = require("nanoid");
const db_1 = require("../db");
const getTask = (req, res) => {
    const data = db_1.getConnection().get('tasks').value();
    return res.json(data);
};
exports.getTask = getTask;
const createTask = (req, res) => {
    const { name, description } = req.body;
    const newTask = {
        name,
        description,
        id: nanoid_1.nanoid()
    };
    try {
        db_1.getConnection().get('tasks').push(newTask).write();
        res.json(newTask);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.createTask = createTask;
