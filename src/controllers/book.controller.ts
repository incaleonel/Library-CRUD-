import { Request, Response } from "express";
import { Book } from "../models/book.model";
import { connectionDB } from '../config/data-source';

const postBook = async( {body}:Request, res:Response) =>{
    try{
        
        const book = new Book();
        const {isbn , title, author, year_of_publication, summary } = body
        
        book.isbn=isbn
        book.title=title
        book.author=author
        book.year_of_publication = year_of_publication
        book.summary = summary

        await connectionDB.manager.save(book)
        res.send({mensaje:"guardado exitoso"})
        console.log("book has been saved",book)
    }catch(e){
        console.log(e)
        res.status(500).send({error: "ERROR_POST_BOOK"});
    }
}

const getBooks = ( _req:Request, res:Response) =>{
    try{

    }catch{
        res.status(500).send({error: "ERROR_GET_BOOKS"});
    }
}

const updateBook = ( _req:Request, res:Response)=>{
    try{

    }catch{
        res.status(500).send({error: "ERROR_UPDATE_BOOK"});
    }
}

const deleteBook = ( _req:Request, res:Response)=>{
    try{

    }catch{
        res.status(500).send({error: "ERROR_DELETE_BOOK"});
    }
}

const getBook = ( _req:Request, res:Response)=>{
    try{

    }catch{
        res.status(500).send({error: "ERROR_GET_BOOK"});
    }
}

export { postBook, getBooks, updateBook, deleteBook, getBook };

