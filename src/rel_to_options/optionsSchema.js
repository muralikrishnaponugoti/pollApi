import mongoose from "mongoose";
const optionsSchema=new mongoose.Schema({
    text:{type:String,required:true},
    votes:Number,
    qid:{type:mongoose.Schema.Types.ObjectId,ref:'questions',required:true}
})
export const optionsModel=new mongoose.model('options',optionsSchema);