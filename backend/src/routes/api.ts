import { Router } from 'express';
import { submitContact } from '../controllers/contactController';
import { contactValidation } from '../middleware/validation';

const router = Router();

router.post('/contact', contactValidation, submitContact);

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router;
