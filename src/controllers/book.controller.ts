import { Request, Response } from "express";
import { Book } from "../models/book.model";
import { connectionDB } from '../config/data-source';
import { Repository } from "typeorm";
import { Log } from "../models/log.model";

const postBook = async ({ body }: Request, res: Response) => {
    try {

        const book = new Book();
        const log = new Log();

        Object.assign(book, body);
        Object.assign(log, body);
        console.log(book);
        await book.save();
        
        log.id_book = book.id;

        await log.save();

        res.send({ mensaje: "guardado exitoso" });
        
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "ERROR_POST_BOOK" });

    }
}

const getBooks = async (_req: Request, res: Response) => {
    try {
        const allBooks = await connectionDB.manager.find(Book);

        res.send(allBooks);

    } catch {

        res.status(500).send({ error: "ERROR_GET_BOOKS" });

    }
}

const updateBook = async (_req: Request, res: Response) => {
    try {

    } catch {
        res.status(500).send({ error: "ERROR_UPDATE_BOOK" });
    }
}

const deleteBook = async (req: Request, res: Response) => {

    const bookRepository = connectionDB.getRepository(Book);
    const logRepository = connectionDB.getRepository(Log);

    const { id } = req.params;

    try {
        const book = await bookRepository.findOneBy({ id: Number(id) });
        const log = await logRepository.findBy({ id_book: Number(id) });
        if (book) {
            await bookRepository.remove(book);
            await bookRepository.remove(log);
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
        const bookRepository: Repository<Book> = connectionDB.getRepository(Book);

        const oneBook = await bookRepository.findOneOrFail({ where: { id: Number(id) } });
        res.send(oneBook);

    } catch {

        res.status(500).send({ error: "ERROR_GET_BOOK" });

    }
}

export { postBook, getBooks, updateBook, deleteBook, getBook };

