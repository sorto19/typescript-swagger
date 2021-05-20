import { Handler } from "express";
import { nanoid } from "nanoid";

import { getConnection } from "../db";

export const getTasks: Handler = (req, res) => {
  const data = getConnection().get("tasks").value();
  return res.json(data);
};
export const createTask: Handler = (req, res) => {
  const { name, description } = req.body;
  const newTask = {
    name,
    description,
    id: nanoid(),
  };

  try {
    getConnection().get("tasks").push(newTask).write();

    res.json(newTask);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getTask: Handler = (req, res) => {
  const taskFound = getConnection()
    .get("tasks")
    .find({ id: req.params.id })
    .value();
  if (!taskFound) return res.status(404).json({ msg: "task was not Found" });

  res.json(taskFound);
};
export const count: Handler = (req, res) => {
  const taskLength = getConnection().get("tasks").value().length;
  res.json(taskLength);
};

export const deleteTask: Handler = (req, res) => {
  const taskFound = getConnection()
    .get("tasks")
    .find({ id: req.params.id })
    .value();
  if (!taskFound) return res.status(404).json({ msg: "task was not Found" });
  const deletedTask = getConnection()
    .get("tasks")
    .remove({ id: req.params.id })
    .write();
  res.json(deleteTask);
};

export const updateTask: Handler = (req, res) => {
  const taskFound = getConnection()
    .get("tasks")
    .find({ id: req.params.id })
    .value();
  if (!taskFound) return res.status(404).json({ msg: "task was not Found" });
  const updateTask = getConnection()
    .get("tasks")
    .find({ id: req.params.id })
    .assign(req.body)
    .write();
  res.json(updateTask);
};
