const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Name
// Department
// Batch
// image
// email
// phone number
// ref - User schema _id

const student = new Schema(
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
        batch:{
            type:String,
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

module.exports = mongoose.model('Student',student)