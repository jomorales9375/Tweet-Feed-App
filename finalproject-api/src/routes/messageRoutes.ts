import { Router } from 'express';
import { getAllMessages, createMessage, getMessage, deleteMessage, updateMessage
      } from '../controllers/messageController';

const router = Router();

router.get('/', getAllMessages);

router.post('/', createMessage);

router.get('/:id', getMessage);

router.put('/:id', updateMessage);

router.delete('/:id', deleteMessage);

export default router;