const express = require('express'); //llamamos a Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/rutas'));

// iniciamos nuestro servidor
app.listen(4000);
console.log('API escuchando en el puerto');