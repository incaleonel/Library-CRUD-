import { NextFunction, Request, Response } from "express";
import { validationResult} from "express-validator";
/* import { Book } from "../models/book.model"; */
import { Log } from "../models/log.model";
import { Book } from "../models/book.model";

//middleware para capturar y manejar los errores de validación en una solicitud HTTP POST.
export const validatePostResult = (req:Request, res:Response, next:NextFunction) =>{

    try{
        validationResult(req).throw();
        return next();
    } catch (err:any) {
        res.status(403).send( { successful: false, msg: `Invalid value in the "${err.array()[0].path}" field` } )
    }
}
//middleware para chequear si existe el libro en la coleccion
export const checkBook = async ({params}:Request, res:Response, next:NextFunction) => {

    try{
            await Book.findOneByOrFail({ id_book: Number(params.id)});

        return next();
    } catch(e) {

        res.status(403).send( { successful: false, msg: "That book does not exist in the collection." } )
    }
}
//middleware para chequear si los datos a modificar son diferentes a la ultima actualizacion.
export const checkLog = async ({body,params}:Request, res:Response, next:NextFunction) => {

    try{
        const log = await Log.findOne({where:{ id_book: Number(params.id), ...body}});
        
        if(log) throw new Error();

        return next();
    } catch(e) {

        res.status(403).send( { successful: false, msg: "No changes to update." } )
    }
}