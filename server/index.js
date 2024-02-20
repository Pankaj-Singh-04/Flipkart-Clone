import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import DefaultData from './default.js';
import Router from './routes/route.js';

const app=express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

const UserName=process.env.USER;
const Password=process.env.Password;
connection(UserName,Password);
const PORT=8000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
DefaultData();