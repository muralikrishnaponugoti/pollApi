import {questionModel} from './questionsSchema.js';
export default class questionRepo{
    // creation of question
    static async createQuestion(title){
        try{
            const result=await new questionModel({title});
            console.log(title);
            const savedQ=await result.save();
            return savedQ;
        }
        catch(err){
            console.log('error occured at createQuestion method in questionRepo');
            console.log(err);
        }
    }

    //finding existence of a question using questionid
    static async findQuestion(qid){
        try{
            const question=await questionModel.findById(qid);
            return question;
        }
        catch(err){
            console.log('error occured at findQuestion method in questionRepo');
            console.log(err);
        }
    }

    //
    static async deleteQuestion(qid){
        try{
            const result=await questionModel.findByIdAndDelete(qid);
            return result;
        }
        catch(err){
            console.log('error occured at deleteQuestion method in questionRepo');
            console.log(err);
        }
    }

    //
    static async deleteOption(content){
        try{
            let result=await questionModel.findById(content.qid);
            result.options.pull(content.opid);
            result=await result.save();
            return 1;
        }
        catch(err){
            console.log('error occured at deleteOption method in questionRepo');
            console.log(err);
        }
    }

    //
    static async getQuesDetails(qid){
        try{
            const result=await questionModel.findById(qid).populate('options','-qid');
            if(result)
                return result;

        }
        catch(err){
            console.log('error occured at getQuesDetails method in questionRepo');
            console.log(err);
        }
    }
}