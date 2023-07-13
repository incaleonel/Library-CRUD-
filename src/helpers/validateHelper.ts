import { NextFunction, Request, Response } from "express";
import { validationResult} from "express-validator";
/* import { Book } from "../models/book.model"; */
import { Log } from "../models/log.model";
import { Book } from "../models/book.model";

export const validatePostResult = (req:Request, res:Response, next:NextFunction) =>{

    try{
        validationResult(req).throw();
        return next();
    } catch (err:any) {
        res.status(403).send( { successful: false, msg: `Invalid value in the "${err.array()[0].path}" field` } )
    }
}

export const checkBook = async ({params}:Request, res:Response, next:NextFunction) => {

    try{
            await Book.findOneByOrFail({ isbn: params.id});

        return next();
    } catch(e) {

        res.status(403).send( { successful: false, msg: "That book does not exist in the collection." } )
    }
}
export const checkLog = async ({body,params}:Request, res:Response, next:NextFunction) => {

    try{
        const log = await Log.findOne({where:{ isbn:params.id, ...body}});
        
        if(log) throw new Error();

        return next();
    } catch(e) {

        res.status(403).send( { successful: false, msg: "No changes to update." } )
    }
}