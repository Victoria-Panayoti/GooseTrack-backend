const { controllerWrapper } = require("../helpers/controllerWrapper");

const {
  getTasksService,
  getOneTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/tasksServices");

const getTasks = controllerWrapper(async (_, res, __) => {
  const tasks = await getTasksService();
  res.json(tasks);
});

const getOneTask = controllerWrapper(async (req, res, __) => {
  const { id } = req.params;
  const task = await getOneTaskService(id);
  res.json(task);
});

const createTask = controllerWrapper(async (req, res, __) => {
  const newTask = await createTaskService(req.body);
  res.status(201).json(newTask);
});

const updateTask = controllerWrapper(async (req, res, __) => {
  const { id } = req.params;
  const task = await updateTaskService(id, req.body);
  res.json(task);
});

const deleteTask = controllerWrapper(async (req, res, __) => {
  const { id } = req.params;
  const task = await deleteTaskService(id);
  res.json(task);
});

module.exports = {
  getTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
};
