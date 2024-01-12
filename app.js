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


//EXPRESS

const express = require('express');

require('dotenv').config();




const pg = require('pg');


const app = express();

const pool= new pg.Pool({
    connectionString:process.env.DATABASE_URL,
    
})

const port = process.env.PORT || 3000;

//motor de plantillas

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))

app.get('/',(req, res)  => {
    res.render("index", {titulo : "mi titulo dinámicoooo"})
})
app.get('/ping', async(req, res)  => {
   const result= await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.get('/servicios', (req, res) =>{
    res.render("servicios", {tituloServivios : "servicioss dinamicooooooo"})

})

app.use((req, res , next) => {
    res.status(404).render("404", {
        titulo:"404",
        descripcion:"titulo del sitio web"
    })
})

app.listen(port, ()=>{
    console.log('servidor sirviendooooo' ,port)
})