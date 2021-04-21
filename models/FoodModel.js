
const mongoose=require('mongoose')
const FoodSchme=mongoose.Schema({
    name:{type:String, required:true},
    description: {type: String, required: true},
    image: {type: String, required:true},
    halolmi:{ type: String, required:true},
    date:{ type: Date, default: Date.now()}
})

module.exports=mongoose.model('Food', FoodSchme)