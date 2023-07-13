import {Router } from "express";
import { deleteBook, getBook, getBooks, postBook, updateBook } from "../controllers/book.controller";
import { validateBooks } from "../validators/books";
import { checkBook, checkLog } from "../helpers/validateHelper";


const routerBook = Router();

routerBook.get('/',getBooks);
routerBook.get('/:id',checkBook,getBook);
routerBook.post('/',validateBooks,postBook);
routerBook.put('/:id',checkBook,checkLog,updateBook);
routerBook.delete('/:id',checkBook,deleteBook);

export { routerBook };