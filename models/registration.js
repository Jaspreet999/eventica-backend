const mongoose = require('mongoose')
const Schema = mongoose.Schema


const registration = new Schema(
    {
        event:{
            require:true,
            type:Schema.Types.ObjectId,
            type:"Events"
        },
        srudent:{
            require:true,
            type:Schema.Types.ObjectId,
            type:"Users"
        }
    }
)

module.exports = mongoose.model("Registration",registration)