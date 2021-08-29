const express = require('express'); //llamamos a Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/rutas'));

app.set('port', process.env.PORT || 3000);

// iniciamos nuestro servidor
app.listen();
console.log('API escuchando en el puerto');