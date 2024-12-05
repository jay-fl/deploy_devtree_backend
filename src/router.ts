import { Router } from 'express'
import { body } from 'express-validator'
import { createAccount, getUser, getUserByHandle, Login, searchByHandle, updateProfile, uploadImage } from './handlers'
import { handleInputErrors } from './middelware/validation'
import { authenticate } from './middelware/auth';

const router = Router()

/** Autenticacion y Registro */
router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('E-mail no valido'),
    body('password')
        .isLength({min: 8})
        .withMessage('El Password debe contener al menos 8 caracteres'),
    handleInputErrors,
    createAccount)

router.post('/auth/login', 
    body('email')
        .isEmail()
        .withMessage('E-mail no valido'),
    body('password')
        .notEmpty()
        .withMessage('El Password es obligatorio'),
    handleInputErrors,
    Login)

    router.get('/user', authenticate, getUser)

    router.patch('/user', 
        body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
        handleInputErrors,
        authenticate, 
        updateProfile)

    router.post('/user/image', authenticate, uploadImage)

    router.get('/:handle', getUserByHandle)

    router.post('/search',
        body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
        handleInputErrors,
        searchByHandle)

export default router

// root
// Ls4Hb1PDMJK80kkw