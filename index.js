import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { mongooseConnect } from './config/mongooseConnect.js';
import{questionsRouter} from './src/rel_to_questions/questionRouter.js';
import {optionsRouter} from './src/rel_to_options/optionsRouter.js';
//server creation
const server=express();

//converting incoming json conent to js content
server.use(express.json());

//handling all requests related to questions
server.use('/questions',questionsRouter);

//handling all requests related to options
server.use('/options',optionsRouter);

//handling requst with mismatch url
server.use((req,res)=>{
    res.status(404).send('url is not found check your url and try again');
})

//server listening operation
server.listen(3000,()=>{
    console.log('server is started listineing from port 3000');
    mongooseConnect();
})


