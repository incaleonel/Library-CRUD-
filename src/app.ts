import express from 'express';
import "reflect-metadata";
import cors from 'cors';
import { connectionDB } from './config/data-source';

connectionDB.initialize().then(()=>{ console.log('base de datos conectada')}).catch((e)=>console.log(e))
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('server running in port',PORT);
});