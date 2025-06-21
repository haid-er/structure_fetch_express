require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connectDB } = require('./src/db/mongo');

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors());                     // Enable CORS
app.use(express.json());            // Parse JSON request bodies
app.use(morgan('dev'));             // Log HTTP requests in the console
// Routes
const indexRouter = require('./src/routes/index')



connectDB().then(() => {
    app.use('/', indexRouter);

    // Start server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
