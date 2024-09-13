import { Router } from 'express';
import userRoutes from './user.routes.js';

const router = Router();

router.use('/user', userRoutes); // Middleware
//! http://localhost:3000/api/user

export default router;