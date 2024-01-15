// const {frutas, dinero} = require('./frutas')
// frutas.forEach(fruta =>{
//     console.count(fruta)
// })
// console.log(dinero)


//HTTP:

// const htpp = require('http');
// const server = htpp.createServer((req, res) =>{
//     res.end('ya estoy respondiendoooooo v.3')
// })
// const puerto = 3000;

// server.listen(puerto, ()=> {
//     console.log('escuchando solicitudeeeesss')
// })




// const pg = require('pg');
// const pool= new pg.Pool({
// connectionString:process.env.PORT,
    
// })



//Conexión a base de datos mongoose
require('dotenv').config();
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.igryqc9.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
   { useNewUrlParser:true, useUnifiedTopology:true}
)

    .then(()=>console.log('base de datos conectada'))
    .catch(e => console.log(e))



const express = require('express');
const app = express();

require('dotenv').config();



const port = process.env.PORT || 3000;

//motor de plantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//Rutas Web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));


app.use((req, res , next) => {
    res.status(404).render("404", {
        titulo:"404",
        descripcion:"titulo del sitio web"
    })
});

app.listen(port, ()=>{
    console.log('servidor sirviendooooo' ,port)
})