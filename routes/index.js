// routes/index.js
const express = require('express');
const multer = require('multer');
const { uploadFileController } = require('../controllers/upload');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from Express!');
});

router.get('/ping', (req, res) => {
    res.send('Ping Response from server');
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'storage/uploads/'),
    filename: (req, file, cb) =>
        cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), uploadFileController)

module.exports = router;
