"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.count = exports.getTask = exports.createTask = exports.getTasks = void 0;
const nanoid_1 = require("nanoid");
const db_1 = require("../db");
const getTasks = (req, res) => {
    const data = db_1.getConnection().get("tasks").value();
    return res.json(data);
};
exports.getTasks = getTasks;
const createTask = (req, res) => {
    const { name, description } = req.body;
    const newTask = {
        name,
        description,
        id: nanoid_1.nanoid(),
    };
    try {
        db_1.getConnection().get("tasks").push(newTask).write();
        res.json(newTask);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.createTask = createTask;
const getTask = (req, res) => {
    const taskFound = db_1.getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!taskFound)
        return res.status(404).json({ msg: "task was not Found" });
    res.json(taskFound);
};
exports.getTask = getTask;
const count = (req, res) => {
    const taskLength = db_1.getConnection().get("tasks").value().length;
    res.json(taskLength);
};
exports.count = count;
const deleteTask = (req, res) => {
    const taskFound = db_1.getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!taskFound)
        return res.status(404).json({ msg: "task was not Found" });
    const deletedTask = db_1.getConnection()
        .get("tasks")
        .remove({ id: req.params.id })
        .write();
    res.json(exports.deleteTask);
};
exports.deleteTask = deleteTask;
const updateTask = (req, res) => {
    const taskFound = db_1.getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .value();
    if (!taskFound)
        return res.status(404).json({ msg: "task was not Found" });
    const updateTask = db_1.getConnection()
        .get("tasks")
        .find({ id: req.params.id })
        .assign(req.body)
        .write();
    res.json(updateTask);
};
exports.updateTask = updateTask;
