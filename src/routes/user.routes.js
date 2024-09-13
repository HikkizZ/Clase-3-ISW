import { Router } from 'express';
import {
    createUser,
    getUser,
    getUsers,
} from '../controllers/user.controller.js';

const router = Router();

//! http://localhost:3000/api/user/
router.post('/', createUser);

//! http://localhost:3000/api/user/all
router.get('/all', getUsers);

//! http://localhost:3000/api/user/:id
router.get('/:id', getUser);

export default router;
