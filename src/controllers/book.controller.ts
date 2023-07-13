import { Request, Response } from "express";
import { Book } from "../models/book.model";
import { Log } from "../models/log.model";

const postBook = async ({ body }: Request, res: Response) => {
    try {
        
        const book = await Book.save(body);

        await Log.save(book);

        res.send({ successful: true, msg: "saved record" });
        
    } catch {

        res.status(500).send({ successful: false, msg: "ERROR POST BOOK" });

    }
}

const getBooks = async (_req: Request, res: Response) => {
    try {
        const allBooks = await Book.find();

        res.send(allBooks);

    } catch {

        res.status(500).send({ successful: false, msg: "ERROR GET BOOK" });

    }
}

const updateBook = async ({params,body}: Request, res: Response) => {
    
    try {
        const book = await Book.findOneByOrFail({ isbn: params.id });
        
            Object.assign(book ,body);

            await Book.update({ isbn: params.id },book);
            await Log.save(book);
            
            res.send({ successful: true, msg: "updated record" });

    } catch {
        
        res.status(500).send({ successful: false, msg: "ERROR UPDATE BOOK" });
    }
}

const deleteBook = async ({params}: Request, res: Response) => {

    try {
        const book = await Book.findOneByOrFail({ isbn: params.id });
        const log = await Log.findBy({ isbn: params.id });

        await Book.remove(book);
        await Log.remove(log);
        
        res.send({ successful: true, msg: "deleted record" });

    } catch {
        res.status(500).send({ successful: false, msg: "ERROR DELETE BOOK" });
    }
}

const getBook = async ({params}: Request, res: Response) => {
    try {
        
        const log = await Log.findBy({isbn: params.id});

        res.send(log);

    } catch {

        res.status(500).send({ successful: false, msg: "ERROR GET BOOK" });

    }
}

export { postBook, getBooks, updateBook, deleteBook, getBook };

