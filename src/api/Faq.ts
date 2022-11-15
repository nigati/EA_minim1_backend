import faqController from '../controller/faqController';
import { Router } from 'express';

const router = Router();

router.get('/:id', faqController.getFaq);
router.delete('/delete/:id', faqController.deleteFaq);
router.get('/', faqController.getAll);
router.put('/:id',faqController.updateFAQ);
router.post('/create',faqController.createFaq);



export default router;