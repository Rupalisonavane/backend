const event = require("../model/event");
const mongoose = require("mongoose");
const user = require("../model/user");

async function createEventservice(eventData)
{
const {title,description,date,location,createdBy}=eventData;

 const userId=user.findById({createdBy});
 console.log(userId);
 
const newEvent = new Event({
    title,
    description,
    date,
    location,
    createdBy
});
    console.log(newEvent);
    
    const savedEvent= newEvent.save();
    return savedEvent;
}
module.exports={createEventservice};