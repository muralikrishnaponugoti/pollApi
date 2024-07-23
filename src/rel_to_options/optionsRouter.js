import optionsController from './optionsController.js';
import express from 'express';
export const optionsRouter=express();
optionsRouter.delete('/:opId/delete',optionsController.deleteOption);
optionsRouter.put('/:opId/add_vote',optionsController.addVote);