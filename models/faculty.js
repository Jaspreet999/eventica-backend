const mongoose = require('mongoose')
const Schema = mongoose.Schema


const faculty = new Schema(
    {
        name:{
            type:String,
            require:true
        },
        department:{
            type:String,
            require:true
        },
        image:{
            type:String,
        },
        joiningDate:{
            type:Date,
            default:new Date(),
            require:true
        },
        email:{
            require:true,
            type:email
        },
        phoneNumber:{
            type:Number
        }

    }
)

module.exports = mongoose.model('Faculty',faculty)