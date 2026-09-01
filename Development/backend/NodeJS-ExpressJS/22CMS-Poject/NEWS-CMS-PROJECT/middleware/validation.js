import { body } from 'express-validator'

const loginValidation = [
    body('username')
        .trim()
        .notEmpty()
        .withMessage('username is required')
        .matches(/^\S+$/)
        .withMessage('Username')
        .isLength({ min: 5, max: 10 })
        .withMessage('username must be 5 to 10 characters long'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 5, max: 10 })
        .withMessage('password must be 5 to 10 characters long'),
]

const UserValidation = [
    body('fullname')
        .trim()
        .notEmpty()
        .withMessage('fullname is required')
        .isLength({ min: 5, max: 20 })
        .withMessage('fullname must be 5 to 10 characters long'),

    body('username')
        .trim()
        .notEmpty()
        .withMessage('username is required')
        .matches(/^\S+$/)
        .withMessage('username must not contain space'),

    body('password')
        .trim()
        .notEmpty()
        .isLength({ min: 5, max: 12 })
        .withMessage('len must be bw 5 to 10'),

    body('role')
        .trim()
        .notEmpty()
        .withMessage('Role is required')
        .isIn(['author', 'admin'])
        .withMessage('Role must be author or admin'),
]

const UserUpdateValidation = [
    body('fullname')
        .trim()
        .notEmpty()
        .withMessage('fullname is required')
        .isLength({ min: 5, max: 10 })
        .withMessage('fullname must be 5 to 10 characters long'),

    body('password')
        .optional({ checkFalsy: true })
        .trim()
        .isLength({ min: 5, max: 12 }),

    body('role')
        .trim()
        .notEmpty()
        .withMessage('Role is required')
        .isIn(['author', 'admin'])
        .withMessage('Role must be author or admin'),
]

const categoryValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Category name is required')
        .isLength({ min: 3, max: 50 })
        .withMessage('Category name must be 3 to 50 characters long'),

    body('description')
        .trim()
        .isLength({ min: 5, max: 200 })
        .withMessage('Description must be 5 to 200 characters long'),
]

const articleValidation = [
    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required')
        .isLength({ min: 5, max: 50 })
        .withMessage('Title must be 5 to 50 characters long'),

    body('content')
        .trim()
        .notEmpty()
        .withMessage('Content is required')
        .isLength({ min: 20, max: 500 })
        .withMessage('Content must be 20 to 5000 characters long'),

    body('category')
        .trim()
        .notEmpty()
        .withMessage('Category is required')
        // if categories are stored as Mongo ObjectId, uncomment next line
        //.isMongoId()
        //.withMessage('Category must be a valid id'),
        .isLength({ min: 1 })
        .withMessage('Category must be provided'),
]

export default { loginValidation, UserValidation, UserUpdateValidation, categoryValidation, articleValidation }