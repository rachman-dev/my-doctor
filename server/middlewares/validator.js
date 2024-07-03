const { body, validationResult } = require("express-validator");

const userValidatorRules = () => {
  return [
    body("name").notEmpty().withMessage("Username required!"),
    body("email").notEmpty().withMessage("Email required!"),
    body("email").isEmail().withMessage("You must enter a valid email format!"),
    body("password").notEmpty().withMessage("Password is required!"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be more than five characters"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) =>
    extractedErrors.push({
      [err.path]: err.msg,
    })
  );
  return res.status(400).json({ errors: extractedErrors });
};

module.exports = {
  userValidatorRules,
  validate,
};
