import express from 'express';
import questionController from './questionsController.js';
export const questionsRouter=express();
questionsRouter.post('/create',questionController.createQuestion);
questionsRouter.put('/:qid/options/create',questionController.createOption);
questionsRouter.delete('/:qid/delete',questionController.deleteQuestion);
questionsRouter.get('/:qid',questionController.getQuesDetails);
