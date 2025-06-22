require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors());                     // Enable CORS
app.use(express.json());            // Parse JSON request bodies
app.use(morgan('dev'));             // Log HTTP requests in the console
// Routes
const indexRouter = require('./routes/index')



app.use('/', indexRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});