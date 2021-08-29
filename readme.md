# Node JS API
## Table of Contents
1. [Introducción](#introducción)
2. [Requisitos](#requisitos)
3. 
### Introducción
***
En el presente trabajo se describe los pasos realizados para el despliegue de una API REST FULL para su posterior consumo en una App Móvil. Heroku fue la plataforma escogida para el despliegue de la API REST FULL, debido a sus beneficios en cuanto al manejo de entornos virtuales, mantenimiento de servidores y facilidad de despliegue, obviando las configuraciones e instalaciones de complementos.
Heroku permite desplegar Apps escritos en lenguajes como PHP, Python, Ruby, Java y Node JS, como es este ejemplo, se utilizó Node JS para el lado del Back-End, por ser un lenguaje para lado del servidor, aparte no requiere de instalaciones de módulos extras, como el caso de Python y de estar creando clases extras o instalar framework como el caso de Java o de estar montando un servidor y configurarlo como PHP. El único requerimiento para una API desarrollada en Node JS, es el modulo de Express, para levantar el servidor y crear las rutas, aparte de PG, para la conexión a la base de datos PostgreSQL.
PostgreSQL fue escogida en primera instancia por ser la base de datos por defecto de Heroku, otra por ser una de las bases de datos en con las que se viene trabajando en posteriores entregas, en resumen, nos familiarizamos con el entorno de PostgreSQL. Para mantener un control de versiones, GitHub fue escogida por ser la más conocida por los autores y desarrolladores de la presente entrega

### Requisitos
***
La aplicación se realizó utilizando Node JS v14.15.1
<br/> 
<br/> Los módulos necesarios para ejecutar el repositorio son:
* pg: Version 8.7.1
* express: Version 4.17.1
* nodemon: Version 2.0.12
