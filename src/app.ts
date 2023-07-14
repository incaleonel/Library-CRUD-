import express, { NextFunction, Request, Response } from 'express';
import "reflect-metadata";
import cors from 'cors';
import { connectionDB } from './config/data-source';
import { routerBook } from './routes/book';

connectionDB.initialize().then(()=>{ console.log('connected database.')}).catch((e)=>console.log(e))
const app = express();

app.use((_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-Type', 'application/json');
    next();
  });

app.use(express.json());
app.use(cors());
app.use('/book', routerBook);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('server running in port', PORT);
});