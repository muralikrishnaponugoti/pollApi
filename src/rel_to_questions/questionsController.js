import questionRepo from './questionsRepo.js';
import optionsRepo from '../rel_to_options/optionsRepo.js';
export default class questionController{
    //handling question creation
    static async createQuestion(req,res,next){
        const{title}=req.body;
        const createdQ=await questionRepo.createQuestion(title);
        if(createdQ)
            res.status(201).send({message:'question created sucessfully',res:createdQ});
        else
            res.status(422).send('something went wrong check your details and try again');
    }

    //handling option creation and add options id to question
    static async createOption(req,res,next){
        const qid=req.params.qid;
        const{text}=req.body;
        let votes=0;
        if(req.body.votes)
            votes=req.body.votes;
        //finding questions with this qid is existed or not
        let question=await questionRepo.findQuestion(qid);
        if(question){
            const option=await optionsRepo.createOption({text,votes,qid});
            if(option){
                question.options.push(option._id);
                await question.save();
                return res.status(202).send({message:'option created sucessfully',res:option});
            }
            else
                return res.status(422).send('something went wrong check your details and try again');
        }
        else
            return res.status(404).sed(`question with id:  ${qid} not found`);

    }

    //handling deleting of a question operations
    static async deleteQuestion(req,res,next){
        const qid=req.params.qid;
        const question=await questionRepo.findQuestion(qid);
        if(question){
            const delQ=await questionRepo.deleteQuestion(qid);
            if(delQ){
                const delOp=await optionsRepo.delMulOptions(delQ.options);
                if(delOp)
                    return res.status(200).send({message:'the question and its all options are deleted',res:delQ});
                else
                    return res.status(404).send('something went wrong check your details and try again');  
            }
            else
                return res.status(422).send('something went wrong check your details and try again');
        }
        else
            return res.staus(404).sed(`question with id:  ${qid} not found`);

    }
    
    static async getQuesDetails(req,res,next){
        const qid=req.params.qid;
        const question=await questionRepo.findQuestion(qid);
        if(question){
            const result=await questionRepo.getQuesDetails(qid);
            if(result)
                return res.status(200).send(result);
            else
                return res.status(400).send('something went wrong check your details and try again');
        }
        else
            return res.status(404).send('question with specified id is not found');
    }

}