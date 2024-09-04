const express = require("express");

const {
  getTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksControllers");
const { validateBody } = require("../helpers/validation/validateBody");
const {
  createTaskValidationSchema,
  updateTaskValidationSchema,
} = require("../helpers/validation/taskValidationSchemas");

const router = express.Router();

router.route("/").get(getTasks).post(validateBody(createTaskValidationSchema),createTask);
router.route("/:id").get(getOneTask).patch(validateBody(updateTaskValidationSchema),updateTask).delete(deleteTask);

module.exports = {
  tasksRouter: router,
};
