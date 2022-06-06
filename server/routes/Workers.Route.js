const express = require('express');
const router = express.Router();
const {Workers} = require('../models');
const {validateToken} = require('../middlewares/AuthMiddleware')


router.get('/:taskId', async (req, res) => {
    const taskId = req.params.taskId;
    const workers = await Workers.findAll({ where: {TaskId: taskId}});
    res.json(workers);
})

router.post('/',validateToken , async (req, res) => {
    const worker = req.body
    await Workers.create(worker);
    res.json(worker);
})

module.exports = router;