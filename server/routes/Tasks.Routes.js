const express = require('express');
const router = express.Router();
const {Tasks} = require('../models')


// const { validateToken } = require("../middlewares/AuthMiddleware");

// router.get("/", validateToken, async (req, res) => {
//     const listOfTasks = await Tasks.findAll();
    
//     res.json({ listOfTasks: listOfTasks });
// });

// router.get("/byId/:id", async (req, res) => {
//     const id = req.params.id;
//     const task = await Tasks.findByPk(id);
//     res.json(task);
// });

// router.get("/byuserId/:id", async (req, res) => {
//     const id = req.params.id;
//     const listOfTasks = await Tasks.findAll({
//     where: { UserId: id }
//     });
//     res.json(listOfTasks);
// });

// router.post("/", validateToken, async (req, res) => {
//     const task = req.body;
//     post.username = req.user.username;
//     post.UserId = req.user.id;
//     await Tasks.create(task);
//     res.json(task);
// });

// router.put("/title", validateToken, async (req, res) => {
//     const { newTitle, id } = req.body;
//     await Tasks.update({ title: newTitle }, { where: { id: id } });
//     res.json(newTitle);
// });

// router.put("/taskText", validateToken, async (req, res) => {
//     const { newText, id } = req.body;
//     await Tasks.update({ taskText: newText }, { where: { id: id } });
//     res.json(newText);
// });

// router.delete("/:taskId", validateToken, async (req, res) => {
//     const taskId = req.params.taskId;
//     await Tasks.destroy({
//     where: {
//         id: taskId,
//     },
//     });

//     res.json("DELETED SUCCESSFULLY");
// });

router.get('/', async (req, res)=> {
    const listOfTasks =await Tasks.findAll()
    res.json(listOfTasks)
})
router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const task = await Tasks.findByPk(id)

    res.json(task)
})


router.post('/', async (req, res) => {
    const task = req.body;
    await Tasks.create(task);
    res.json(task);
})


module.exports = router;