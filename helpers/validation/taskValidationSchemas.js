const Joi = require("joi");
const { dateRegexp, timeRegexp } = require("../../const/const");

const createTaskValidationSchema = Joi.object({
  title: Joi.string().max(250).trim().required(),
  date: Joi.string().pattern(dateRegexp).required(),
  start: Joi.string().pattern(timeRegexp).required(),
  end: Joi.string().pattern(timeRegexp).required(),
  priority: Joi.string().valid("low", "medium", "high").required(),
  category: Joi.string().valid("to-do", "in-progress", "done").required(),
});

const updateTaskValidationSchema = Joi.object()
  .keys({
    title: createTaskValidationSchema.extract("title").optional(),
    date: createTaskValidationSchema.extract("date").optional(),
    start: createTaskValidationSchema.extract("start").optional(),
    end: createTaskValidationSchema.extract("end").optional(),
    priority: createTaskValidationSchema.extract("priority").optional(),
    category: createTaskValidationSchema.extract("category").optional(),
  })
  .or("title", "date", "start", "end", "priority", "category");

module.exports = {
    createTaskValidationSchema,
    updateTaskValidationSchema
};
