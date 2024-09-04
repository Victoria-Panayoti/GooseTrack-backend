const HttpError = require("../HttpError");

const validateBody = (schema) => {
  return function (req, _, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      next(new HttpError(422, error));
      return;
    }
    next();
  };
};

module.exports = {
    validateBody,
}