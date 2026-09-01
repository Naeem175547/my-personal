import joi from 'joi'
export const JoiScheam = joi.object({
    name: joi.string().required(),
    email: joi.string().email(),
    password: joi.string().min(5).max(10)
})