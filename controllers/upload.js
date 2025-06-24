const uploadFileController = function (req, res) {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({
        message: 'File uploaded successfully',
        fileName: req.file.filename,
        originalName: req.file.originalname,
    });
}


module.exports = { uploadFileController };