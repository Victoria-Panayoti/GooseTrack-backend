const fs = require("node:fs/promises");
const path = require("path");
const crypto = require("crypto");
const { Task } = require("../models/Task");

const HttpError = require("../helpers/HttpError");

const tasksPath = path.join(__dirname, "..", "db", "tasks.json");

const getTasksService = async () => {
  return await Task.find();
};

const getOneTaskService = async (id) => {
  const task = await Task.findById(id);
  if (!task) {
    throw new HttpError(404, "Task not found");
  }
  return task;
};

const createTaskService = async (body) => {
  return await Task.create(body);
};

const updateTaskService = async (id, body) => {
  const updatedTask = await Task.findByIdAndUpdate(id, body, { new: true });
  
  if (!updatedTask) {
    throw new HttpError(404, "Task not found");
  };
  return updatedTask;
};

const deleteTaskService = async id => {
  const deletedTask = await Task.findByIdAndDelete(id)
  if (!deletedTask) {
    throw new HttpError(404, 'Task not found');
  };
    return deletedTask;
}

module.exports = {
  getTasksService,
  getOneTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
