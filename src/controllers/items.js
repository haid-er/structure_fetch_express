const { getDB } = require('../db/mongo');


const itemsController = async (req, res, next) => {
    try {
        // const msg = req.body.message.toLowerCase();
        const db = getDB();
        const items = await db.collection('items').find().toArray();
        res.json(items);

        res.status(200).json({
            status: "success",
            message: helo
        })
    } catch (error) {
        // next(error);
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

const postItemsController = async (req, res, next) => {
    try {
        const db = getDB();
        const result = await db.collection('items').insertOne(req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Insert Failed');
    }
}

module.exports = { itemsController, postItemsController };