const Joi = require("joi");

exports.registrationSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    dob: Joi.date().greater("1-1-1935").less("now").required(),
    email: Joi.string()
        .email().required().required(),
    password: Joi.string().min(6).max(8).required(),
    confirmPassword: Joi.ref("password")
})

exports.loginSchema = Joi.object({
    email: Joi.string()
        .email().required(),
    password: Joi.string().min(6).max(8).required()
})