# Library CRUD 📚

## 📜 Resumen 📜

Aplicación backend es un REST API desarrollado en Node.js utilizando el framework Express.js y una base de datos PostgreSQL. Está diseñada para gestionar una colección de libros en una biblioteca virtual, con la capacidad de realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en dicha colección.

Cada libro en la colección cuenta con los siguientes campos de información: número ISBN, título, autor, año de publicación y un breve resumen.

- Los endpoints disponibles en nuestra API son los siguientes:

  - Crear(/api/books): Permite agregar un nuevo libro a la colección. Los usuarios deben proporcionar los detalles del libro, como número ISBN, título, autor, año de publicación y resumen, a través de una solicitud POST.

  - Leer lista (/api/books): Devuelve una lista de todos los libros de la colección. 

  - Leer detalles (/api/books/:id): Permite ver información detallada sobre un libro específico utilizando su ID. Además de los detalles del libro, la respuesta también incluye el historial de edición, que muestra la información original y la hora de cada actualización realizada en una tabla separada de la base de datos.

  - Actualizar (/api/books/:id): Permite actualizar la información de un libro específico utilizando su ID. Los usuarios pueden enviar una solicitud PUT con los campos que deseen modificar, como número ISBN, título, autor, año de publicación o resumen. La aplicación guarda la información original y la hora de la actualización en la tabla de historial de edición.

  - Eliminar(/api/books/:id): Permite eliminar un libro de la colección utilizando su ID.

Se busca proporcionar una forma eficiente y efectiva de gestionar una biblioteca de libros. Los usuarios pueden agregar, ver, actualizar y eliminar libros, así como acceder al historial de ediciones para cada libro. Esto brinda un mayor control y seguimiento de los cambios realizados en la colección.

## 💻 Instalación 💻
Necesitas instalar NodeJs y postgresql

```bash
git clone https://github.com/incaleonel/Library-CRUD-.git
cd Library-CRUD-
npm install
npm run build
npm start
```




## 👨‍💻 Tecnologías usadas 👨‍💻
| express | postgresql | TypeScript |
| --- | --- | --- |
| <img src="https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg" width="1000"/> | <img src="https://kinsta.com/wp-content/uploads/2022/02/postgres-logo.png" width="1000"/> | <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="1000"/> |



## 🔗 Endpoints 🔗 

Puedes usar thunderClient o Postman 

URL: <a target="_blank" href="http://localhost:3000/api/books">http://localhost:3000/api/books</a>

### Post: 
![POST](https://i.ibb.co/jWYgdqV/post.png)
### Get All: 
![GET All](https://i.ibb.co/WyVy38N/GET-ALL.png)
### PUT: 
![PUT](https://i.ibb.co/3c2Q4WP/put.png)
### GET: 
![GET ](https://i.ibb.co/Bf5zhz6/get.png)
### DELETE: 
![DELETE ](https://i.ibb.co/HNJqLNY/delete.png)

body de ejemplos
```
{
  "isbn": 9789505567393,
  "author": "Horacio Quiroga",
  "title":"A La Deriva Y Otros Cuentos",
  "year_of_publication":1988,
  "summary":"A la deriva es un brevísimo cuento dramático del autor Horacio Quiroga."
}
```

```
{
  "isbn": 9788415089605,
  "author": "Horacio Quiroga",
  "title":"Cuentos de la selva",
  "year_of_publication":2014,
  "summary":"PLUTON EDICIONES"
}
```
