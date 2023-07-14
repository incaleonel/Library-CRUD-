import { Request, Response } from "express";
import { Book } from "../models/book.model";
import { Log } from "../models/log.model";

//Controlador para guardar un libro en la coleccion.
const postBook = async ({ body }: Request, res: Response) => {
    try {
        
        const book:Book = await Book.save(body);
        
        await Log.save(book);

        res.send({ successful: true, msg: "saved record" });
        
    } catch(e) {
        console.log(e)
        res.status(500).send({ successful: false, msg: "ERROR POST BOOK" });

    }
}
//Controlador para obtener todos los libros de mi coleccion.
const getBooks = async (_req: Request, res: Response) => {
    try {
        const allBooks:Book[] = await Book.find();

        res.send(allBooks);

    } catch {

        res.status(500).send({ successful: false, msg: "ERROR GET BOOK" });

    }
}
//Controlador para actualizar un libro especifico de mi coleccion.
const updateBook = async ({params,body}: Request, res: Response) => {
    
    try {
        const book:Book = await Book.findOneByOrFail({ id_book: Number(params.id) });
        
            Object.assign(book ,body);

            await Book.update({ id_book: Number(params.id) },book);
            await Log.save(book);
            
            res.send({ successful: true, msg: "updated record" });

    } catch {
        
        res.status(500).send({ successful: false, msg: "ERROR UPDATE BOOK" });
    }
}

//Controlador para borrar un libro especifico de mi coleccion.
const deleteBook = async ({params}: Request, res: Response) => {

    try {
        const book:Book = await Book.findOneByOrFail({ id_book: Number(params.id) });
        const log:Log[] = await Log.findBy({ id_book: Number(params.id) });

        await Book.remove(book);
        await Log.remove(log);
        
        res.send({ successful: true, msg: "deleted record" });

    } catch {
        res.status(500).send({ successful: false, msg: "ERROR DELETE BOOK" });
    }
}

const getBook = async ({params}: Request, res: Response) => {
    try {
        
        const log:Log[] = await Log.findBy({ id_book: Number(params.id) });

        res.send(log);

    } catch {

        res.status(500).send({ successful: false, msg: "ERROR GET BOOK" });

    }
}

export { postBook, getBooks, updateBook, deleteBook, getBook };

