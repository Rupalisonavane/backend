const express=require("express");
const cors=require("cors");
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require("../controllers/event");

const router =express.Router();

router.use(cors());

router.post("/",  createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.put("/:id",  updateEvent);
router.delete("/:id", deleteEvent);

module.exports=router;