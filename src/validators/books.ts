import { check } from "express-validator";
import { validateResult } from '../helpers/validateHelper';
import { NextFunction, Request, Response } from "express";

export const validateBooks = [
    check('isbn')
        .exists()
        .not()
        .isEmpty()
        .isISBN()
        .isString(),
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
            validateResult(req,res,next);
        } 
]