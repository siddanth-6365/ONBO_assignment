const express = require("express");

const router = express.Router();
const { createWeek,getAllweeks,deleteById,AddModule,AddTask, DeleteTask, DeleteModule, DeleteWeek } = require("../controllers/weekController");

router.post("/", createWeek);

router.post("/:weekno/deleteWeek", DeleteWeek);

router.get("/", getAllweeks);

router.delete("/:id", deleteById);

router.patch("/addmodule", AddModule);

router.post("/addTask", AddTask);

router.post("/deleteTask", DeleteTask);

router.post("/:weekno/deleteModule", DeleteModule);











module.exports = router;
