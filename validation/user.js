const Joi = require("@hapi/joi");

const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(14)
            .required(),
        email: Joi.string()
            .min(3)
            .max(256)
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .max(512)
            .required()
    });

    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(3)
            .max(256)
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .max(512)
            .required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;