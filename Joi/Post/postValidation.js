const Joi = require('joi')

const schema = Joi.object({
    postText: Joi.string().required().max(255),
});


const validatePost = (body) => {
    return schema.validate(body)
}


module.exports = { validatePost, schema }

