const mongoose = require('mongoose')
const Schema = mongoose.Schema

const users = new Schema(
    {
        Uid:{
            require:true,
            type:String
        },
        password:{
            require:true,
            type:String
        },
        role:{
            require:true,
            type:String
        },
        detail:{
            require:true,
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    }
)

module.exports = mongoose.model('Users',users)