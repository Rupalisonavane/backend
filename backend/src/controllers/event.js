
const Event = require("../model/event");
const eventService=require("../services/event")

// Create an event
async  function createEvent (req, res) 
{
    try {
        const eventData= req.body;

       const event=await eventService.createEventservice(eventData);

//const newEvent = new Event({ title, description, date, location, createdBy: req.user.id });
        res.status(201).json({event:event,message:"event Created Successfully"});

        // await newEvent.save();
        // res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().populate("createdBy", "name email");
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single event
const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an event
const updateEvent = async (req, res) => {
    try {
        const { title, description, date, location } = req.body;
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        if (event.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        event.title = title;
        event.description = description;
        event.date = date;
        event.location = location;
        await event.save();

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an event
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        if (event.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        await event.deleteOne();
        res.status(200).json({ message: "Event deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
