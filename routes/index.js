import express from 'express';
import wishlist from './wishlist/index.js';
import checklist from './checklist/index.js';  // Import the new checklist route

const { Router } = express;
const router = Router();

router
  .get('/', (req, res) => res.status(403).json({ authorized: false }))
  .use('/wishlist', wishlist)
  .use('/checklist', checklist);  // Add the new checklist route

export default router;
