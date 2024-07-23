import mongoose from "mongoose";
const questionSchema=new mongoose.Schema({
    title:{type:String,required:true},
    options:[{type:mongoose.Schema.Types.ObjectId,ref:'options'}]
})
export const questionModel=new mongoose.model('questions',questionSchema);