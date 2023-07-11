import { Request, Response } from "express";
import { Book } from "../models/book.model";
import { Log } from "../models/log.model";

const postBook = async ({ body }: Request, res: Response) => {
    try {

        const book = await Book.save(body);

        await Log.save(book);

        res.send({ mensaje: "registro guardado" });
        
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "ERROR_POST_BOOK" });

    }
}

const getBooks = async (_req: Request, res: Response) => {
    try {
        const allBooks = await Book.find();

        res.send(allBooks);

    } catch {

        res.status(500).send({ error: "ERROR_GET_BOOKS" });

    }
}

const updateBook = async ({params,body}: Request, res: Response) => {
    const { id } = params;
    try {
        const book = await Book.findOneBy({ id_book: Number(id) });
        
        if (book) {
            Object.assign(book ,body);
            await Book.update({ id_book: Number(id) },book)
            await Log.save(book);   
            res.send({mensaje:"Registro actualizado"});
        } else {
            res.send({mensaje:"Registro no existe"});
        }
    } catch(e) {
        console.log(e)
        res.status(500).send({ error: "ERROR_UPDATE_BOOK" });
    }
}

const deleteBook = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const book = await Book.findOneBy({ id_book: Number(id) });
        const log = await Log.findBy({ id_book: Number(id) });
      
        if (book) {

            await Book.remove(book);
            await Log.remove(log);

            res.send({mensaje:"registro eliminado correctamente"});
        } else {
            res.send({mensaje:"No existe ningun registro con ese id"});
        }
    } catch {
        res.status(500).send({ error: "ERROR_DELETE_BOOK" });
    }
}

const getBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        const log = await Log.findBy({id_book:Number(id)});

        res.send(log);

    } catch {

        res.status(500).send({ error: "ERROR_GET_BOOK" });

    }
}

export { postBook, getBooks, updateBook, deleteBook, getBook };

