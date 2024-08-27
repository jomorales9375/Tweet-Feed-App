import { Router } from 'express';
import { createUser, loginUser, getAllUsers, getUser,  } from '../controllers/userController';
import { getAllMessages } from '../controllers/messageController';

const router = Router();


router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/:id', getUser);
router.get('/', getAllUsers);


export default router;