import { check } from "express-validator";
import { validatePostResult } from '../helpers/validateHelper';
import { NextFunction, Request, Response } from "express";


/* validaciones que se utilizarán para asegurarse de que los 
datos enviados en una solicitud relacionada con libros cumplan
 con ciertos criterios antes de continuar con el procesamiento
  de la solicitud. */
export const validateBooks = [
    check('isbn')
        .exists()
        .not()
        .isEmpty()
        .isISBN(),
    check('title')
        .exists()
        .not()
        .isEmpty(),
    check('author')
        .exists()
        .not()
        .isEmpty(),
    check('year_of_publication')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
        (req:Request,res:Response,next:NextFunction) =>{
            validatePostResult(req,res,next);
        } 
]