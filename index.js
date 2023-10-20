import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from './routes/index.js';
import errorHandler from './errors/handler.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'https://littlestbrainrot.com',
  methods: ['GET', 'POST'],
}));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Routes setup
app.use('/', routes);

// Error handling
app.use(errorHandler);

// Start the server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
