const path = require('path');
const { mainGroq } = require("../services/groq");
const { JsonStore } = require('../models');



const uploadFileController = async function (req, res) {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    try {
        // const key = req.file.filename;
        // const imagePath = path.join(__dirname, '..', 'storage', 'uploads', key);
        // const gres = await mainGroq(imagePath); // issue
        // console.log(gres)
        // const jsonObject = await JSON.parse(gres);
        // const fixedTreeData = ensureChildren(jsonObject);
        // const existing = await JsonStore.findOne({ where: { key } });

        // if (existing) {
        //     // Update
        //     existing.data = fixedTreeData;
        //     await existing.save();
        // } else {
        //     // Create new
        //     const created = await JsonStore.create({ key, data: fixedTreeData });
        // }
        // res.json(fixedTreeData);
        const company = {
            "name": "Bluefield Solar Income Fund Ltd (Guernsey)",
            "attributes": {
                "Shares": "100% listed on the London Stock Exchange Main Market",
                "Ownership": "100%"
            },
            "children": [
                {
                    "name": "Bluefield Partners LLP",
                    "attributes": {
                        "Role": "Investment Advisor"
                    },
                    "children": []
                },
                {
                    "name": "New Road 2 Solar Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Willows Farm Solar Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Gypsum Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Barvills Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Court Farm Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Kislingbury M1 Solar Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Place Barton Farm Solar Park Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Old Stone Farm Solar Park Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Kellingley Solar Farm",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Clapton Farm Solar Park Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Holly Farm Solar Park",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "East Farm Solar Park",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Galton Manor Solar Park Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Little Bear Solar Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Gretton Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Thornton Lane Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Wormit Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "New Road Solar Ltd",
                    "attributes": {
                        "Ownership": "60% New Road Solar Ltd, 40% LightRock Power Ltd"
                    },
                    "children": [
                        {
                            "name": "AR108 Bolt Bolt Solar Farm Ltd",
                            "attributes": {
                                "Ownership": "60% New Road Solar Ltd, 40% Bluefield Renewable Developments Ltd"
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "name": "Yelvertoft Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Paytherden Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Wallace Wood Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "AR006 GF Solar Ltd (Grange Farm)",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Lower Mays Solar Farm Limited",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Blossom 2 Solar Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Blossom 1 Solar Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "GPP Big Field LLP",
                    "attributes": {
                        "Shares": "50%"
                    },
                    "children": []
                },
                {
                    "name": "GPP Black Bush LLP",
                    "attributes": {
                        "Shares": "50%"
                    },
                    "children": []
                },
                {
                    "name": "GPP Eastcott LLP",
                    "attributes": {
                        "Shares": "50%"
                    },
                    "children": []
                },
                {
                    "name": "GPP Langstone LLP",
                    "attributes": {
                        "Shares": "50%"
                    },
                    "children": []
                },
                {
                    "name": "Lower Tean Leys Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "New Road Wind Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Mauxhall Farm Energy Park Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "BF33C LHF Solar Ltd (Lower Horton)",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Leeming Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Twineham Energy Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "BF33E BHF Solar Ltd (Burnt House Farm)",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "BF31 WHF Solar Ltd (Water Hall Farm)",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "BF27 BF Solar Ltd (Bluestone Farm)",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "BF16D BHF Solar Ltd (Brick House Farm)",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "BF13A TF Solar Ltd (Tar Farm Cottage)",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "HW Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Lightning 1 Energy Park Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Sweet Briars Solar Farm Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Bluefield Renewables 1 Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Whitehouse Farm Energy Barn Limited",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Sheepwash Lane Energy Barn Limited",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "BF58 Hunts Airfield Solar Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "WSE Hartford Wood Limited",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "Longpasture Solar Farm Limited",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "LEO1B Energy Park Ltd",
                    "attributes": {},
                    "children": []
                },
                {
                    "name": "LH DNO Grid Services Ltd",
                    "attributes": {},
                    "children": []
                }
            ]
        }

        res.status(200).json(company)
    } catch (error) {
        res.json({ message: "Server Error" })
    }
}

function ensureChildren(node) {
    if (!node.children) {
        node.children = [];
    } else {
        node.children = node.children.map(ensureChildren);
    }
    return node;
}

const saveJsonController = async (req, res) => {
    const { key, data } = req.body;

    if (!key || !data) {
        return res.status(400).json({ error: 'Key and data required' });
    }

    try {
        const existing = await JsonStore.findOne({ where: { key } });

        if (existing) {
            // Update
            existing.data = data;
            await existing.save();
            return res.json({ message: 'Updated successfully', data: existing });
        } else {
            // Create new
            const created = await JsonStore.create({ key, data });
            return res.json({ message: 'Saved successfully', data: created });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};


const getJsonController = async (req, res) => {
    const { key } = req.params;

    try {
        const record = await JsonStore.findOne({ where: { key } });
        if (!record) return res.status(404).json({ error: 'Key not found' });

        res.json(record.data);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};



const chatController = async function (req, res) {
    const imagePath = path.join(__dirname, '..', 'storage', 'uploads', '1750847486884-img2.png');

    const gres = await mainGroq(imagePath);
    const jsonObject = JSON.parse(gres);
    const fixedTreeData = ensureChildren(jsonObject);
    res.json(fixedTreeData);
}


module.exports = { uploadFileController, chatController, saveJsonController };