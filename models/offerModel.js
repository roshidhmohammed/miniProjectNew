const mongoose = require("mongoose")

const offerSchema  = new mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    discount:{
        type:String,
        required:true
    },
    minimumAmount:{
        type:Number
    },
    maximumAmount:{
        type:Number
    },
    isActive: {
        type:Number,
        default:1
    },
    usedBy:[{
        type:mongoose.Types.ObjectId,
        ref:'User',
    }],
})

module.exports = mongoose.model('Offer',offerSchema)