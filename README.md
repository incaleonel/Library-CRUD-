# Library CRUD

## 📜 Resumen 📜

Aplicación backend es un REST API desarrollado en Node.js utilizando el framework Express.js y una base de datos PostgreSQL. Está diseñada para gestionar una colección de libros en una biblioteca virtual, con la capacidad de realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en dicha colección.

Cada libro en la colección cuenta con los siguientes campos de información: número ISBN, título, autor, año de publicación y un breve resumen.

- Los endpoints disponibles en nuestra API son los siguientes:

  - Crear: Permite agregar un nuevo libro a la colección. Los usuarios deben proporcionar los detalles del libro, como número ISBN, título, autor, año de publicación y resumen, a través de una solicitud POST.

  - Leer lista: Devuelve una lista de todos los libros de la colección. 

  - Leer detalles: Permite ver información detallada sobre un libro específico utilizando su ID. Además de los detalles del libro, la respuesta también incluye el historial de edición, que muestra la información original y la hora de cada actualización realizada en una tabla separada de la base de datos.

  - Actualizar: Permite actualizar la información de un libro específico utilizando su ID. Los usuarios pueden enviar una solicitud PUT con los campos que deseen modificar, como número ISBN, título, autor, año de publicación o resumen. La aplicación guarda la información original y la hora de la actualización en la tabla de historial de edición.

  - Eliminar: Permite eliminar un libro de la colección utilizando su ID.

Se busca proporcionar una forma eficiente y efectiva de gestionar una biblioteca de libros. Los usuarios pueden agregar, ver, actualizar y eliminar libros, así como acceder al historial de ediciones para cada libro. Esto brinda un mayor control y seguimiento de los cambios realizados en la colección.

## 💻 Instalación 💻
- Archivos
  - Ubicarse en la carpeta dentro del servidor que contendrá la aplicación 
  - Abrir terminal de comandos
  - git clone https://github.com/incaleonel/Library-CRUD-.git || descargar zip
  - cd Library-CRUD- || Ir desde el explorador de archivos
  - Abrir la aplicación en el editor de su preferencia y disfrutar

- Aplicación
  - Abrir un cliente web
  - Poner la url de su index principal (vista)
  - Usuarios por defecto de la base de datos
    - administrador
      - usuario: Elliot
      - clave: elliot
    - entrenador
      - usuario: Doky
      - clave: doky
    - entrenador
      - usuario: Chocolate
      - clave: chocolate
  

## 👨‍💻 Tecnologías usadas 👨‍💻
| express | postgresql | JavaScript |
| --- | --- | --- |
| <img src="https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg" width="1000"/> | <img src="https://kinsta.com/wp-content/uploads/2022/02/postgres-logo.png" width="1000"/> | <img src="https://i.postimg.cc/rF6WrLjr/html.png" width="1000"/> | <img src="https://i.postimg.cc/mgSDG9F2/css.png" width="1000"/> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="1000"/> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" width="1000px"/> | <img src="https://sweetalert2.github.io/images/SweetAlert2.png" width="1000px"/> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/1280px-Axios_%28computer_library%29_logo.svg.png" width="1000px"/> |

## 🔗 Endpoints 🔗

URL: 
URL: 


