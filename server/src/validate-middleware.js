const Joi = require('joi');

const validate = (data, schema) => {
    const { error } = Joi.object(schema).validate(data);
    if (error) {
        throw error;
    }
};

const validateRequest = ({ params, query, body }) => {
    return (req, res, next) => {
        try {
            if (params) validate(req.params, params);
            if (query) validate(req.query, query);
            if (body) validate(req.body, body);

            next();
        } catch (error) {
            console.error('Joi Validation Error:', error.details);
            res.status(400).json({ message: 'Invalid request data', error: error.details });
        }
    };
};


module.exports = validateRequest;