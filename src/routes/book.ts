import {Router } from "express";
import { deleteBook, getBook, getBooks, postBook, updateBook } from "../controllers/book.controller";

const routerBook = Router();

routerBook.get('/',getBooks);
routerBook.get('/:id',getBook);
routerBook.post('/',postBook);
routerBook.put('/:id',updateBook);
routerBook.delete('/:id',deleteBook);

export { routerBook };