import { NextFunction, Request, Response } from "express";
import { validationResult} from "express-validator";

export const validateResult = (req:Request, res:Response, next:NextFunction) =>{
    console.log('ingreso al middleware')
    try{
        validationResult(req).throw();
        return next();
    } catch (err:any) {
        
        res.status(403).send( { errors: err.array() } )
    }
}