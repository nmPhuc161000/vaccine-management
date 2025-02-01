const Child = require('../models/Child');

// Tạo hồ sơ trẻ em
exports.createChild = async (req, res) => {
    try {
        const child = new Child(req.body);
        await child.save();
        res.status(201).json(child);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Lấy danh sách trẻ em
exports.getChildren = async (req, res) => {
    try {
        const children = await Child.find();
        res.status(200).json(children);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};