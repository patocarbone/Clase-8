//DECLARACIONES
//express
const express = require('express');
const app = express();
const rutas = require('./routes/index.js')
const puerto = 8080;
//conf para acceder al body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//rutas estáticas
app.use('/public', express.static( __dirname + '/public' ));
//--------------------------------------------//
//APLICACION
app.use('/api', rutas);

/*app.get('/', (req, res) => {
    res.send('<h1 style="color: blue">Bienvenidos al server de Express</h1>');
})*/



app.listen(puerto, (error) => {
    if(!error){
        console.log(`El servidor está escuchando el puerto: ${puerto}`)
    } else {
        console.log("Ocurrió el siguiente error al iniciar: ", error);
    }
})