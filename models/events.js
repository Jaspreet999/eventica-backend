const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Name
// Venue
// Date
// Description
// Image
// Conducting Department (CSE, ECE, ME, BT, APPL, whole college)
// Co-ordinators (teachers from the conducting department)
// For (will be departments that are allowed to participate or attend)
// Registeration - if applicable (students from above departments)
// Registeration deadline - if applicable

const events = new Schema(
    {
        name:{
            type:String,
            require:true
        },
        venue:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        },
        image:{
            type:String,
        },
        date:{
            type:Date,
            require:true
        },
        lead:{
            type:Schema.Types.ObjectId,
            ref:"Users",
            require:true,

        },
        deadline:{
            require:true,
            type:Date
        }

    }
)

module.exports = mongoose.model('Events',events)