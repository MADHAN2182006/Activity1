const express = require("express");

const router = express.Router();

const { readTasks, writeTasks } = require("../utils/fileHelper");

const validateTask = require("../middleware/validateTask");


// GET TASKS
router.get("/", (req, res) => {

  let tasks = readTasks();

  const { page = 1, limit = 5, status } = req.query;

  if (status) {
    tasks = tasks.filter(t => t.status === status);
  }

  const start = (page - 1) * limit;
  const end = start + Number(limit);

  const paginated = tasks.slice(start, end);

  res.json({
    total: tasks.length,
    page,
    data: paginated
  });

});


// CREATE TASK
router.post("/", validateTask, (req, res) => {

  const tasks = readTasks();

  const newTask = {
    id: Date.now(),
    title: req.body.title,
    status: "pending"
  };

  tasks.push(newTask);

  writeTasks(tasks);

  res.json(newTask);
});


// UPDATE TASK
router.put("/:id", (req, res) => {

  const tasks = readTasks();

  const id = Number(req.params.id);

  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks[index].status = req.body.status;

  writeTasks(tasks);

  res.json(tasks[index]);

});


// DELETE TASK
router.delete("/:id", (req, res) => {

  let tasks = readTasks();

  const id = Number(req.params.id);

  tasks = tasks.filter(t => t.id !== id);

  writeTasks(tasks);

  res.json({ message: "Task deleted" });

});

module.exports = router;