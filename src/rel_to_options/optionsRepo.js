import{optionsModel} from './optionsSchema.js';
import { ObjectId } from 'mongodb';
export default class optionsRepo{
    //handling option creation operation
    static async createOption(content){
        try{
            const option=await new optionsModel(content);
            const savedOption=await option.save();
            return savedOption;
        }
        catch(err){
            console.log('error occured at createOption method in optionsRepo');
            console.log(err);
        }
    }

    //
    static async deleteOption(opid){
        try{
            const result=await optionsModel.findByIdAndDelete(opid);
            if(result)
                return result;
        }
        catch(err){
            console.log('error occured at deleteOption method in optionsRepo');
            console.log(err);
        }

    }

    //handling deleting multiple options by getting array of opritons ids
    static async delMulOptions(options){
        try{
            options.forEach(async (option)=>{
                await optionsModel.deleteOne({_id:new ObjectId(option)})
            })
            return 1;
        }
        catch(err){
            console.log('error occured at delMulOptions method in optionsRepo');
            console.log(err);
        }
    }

    //finding the option with given opid
    static async findOption(opid){
        try{
            const result=await optionsModel.findById(opid);
            return result;
        }
        catch(err){
            console.log('error occured at findOption method in optionsRepo');
            console.log(err);
        }
    }

    // adding vote to the option
    static async addVote(opid){
        try{
            let option=await optionsModel.findById(opid);
            if(option){
                 option.votes+=1;
                  option=await option.save();
                 return option;
            }
        }
        catch(err){
            console.log('error occured at addVote method in optionsRepo');
            console.log(err);
        }
    }
}