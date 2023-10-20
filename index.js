import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Newly added for CORS support
import routes from './routes/index.js';
import errorHandler from './errors/handler.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS setup
app.use(cors({
  origin: 'https://littlestbrainrot.com', // Your frontend domain
  methods: ['GET', 'POST'],  // Allowed HTTP methods
  credentials: true,  // Allow cookies to be sent with the request
  optionsSuccessStatus: 204  // Status to return for successful CORS preflight
}));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Routes setup
app.use('/', routes);

// Error handling
app.use(errorHandler);

// Start the server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
