const express = require('express'); //llamamos a Express
const app = express();
const port = (process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/rutas'));

// iniciamos nuestro servidor
app.listen(port);
console.log('API escuchando en el puerto ' + port);