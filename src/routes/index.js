// routes/index.js
const express = require('express');
const router = express.Router();
const { itemsController, postItemsController } = require("../controllers/items")
router.get('/', (req, res) => {
    res.send('Hello from Express!');
});

router.get('/ping', (req, res) => {
    res.send('Ping Response from server');
})

router.get('/items', itemsController);
router.post('/items', postItemsController)
module.exports = router;
