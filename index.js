import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';  // Import the CORS package

import routes from './routes/index.js';
import errorHandler from './errors/handler.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors({  // Use CORS middleware
    origin: 'https://littlestbrainrot.com',  // Your domain
    methods: ['GET', 'POST'],
  }))
  .use('/', routes)
  .use(errorHandler)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
