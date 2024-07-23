import optionsRepo from './optionsRepo.js';
import questionRepo from '../rel_to_questions/questionsRepo.js';
export default class optionsController{
    //handling deletion of options 
    static async deleteOption(req,res,next){
        const opId=req.params.opId;
        const delOp=await optionsRepo.deleteOption(opId);
        if(delOp){
            const result=await questionRepo.deleteOption({opid:delOp._id,qid:delOp.qid});
            if(result){
                return res.status(200).send({message:'option is deleted and removed from the question',res:delOp});
            }
            else
                return res.status(404).send('something went wrong while deleting options from question try again');
        }
        else
            return res.status(404).send('something went wrong check you content and try again');
    }

    //handling adding vote to a option
    static async addVote(req,res,next){
        const opid=req.params.opId;
        const option=await optionsRepo.findOption(opid);
        if(option){
            const result=await optionsRepo.addVote(opid);
            if(result)
                return res.status(200).send('vote added sucessfully');
            else
                return res.status(400).send('something went wrong check your details and try again');
        }
        else
            return res.status(404).send('option whith given id is not found check ones and try again ');
    }
}