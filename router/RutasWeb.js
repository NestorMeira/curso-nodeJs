const express = require('express')
const router = express.Router();

router.get('/',(req, res)  => {
    res.render("index", {titulo : "mi titulo dinámicoooo"})
})
router.get('/ping', async(req, res)  => {
   const result= await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

router.get('/servicios', (req, res) =>{
    res.render("servicios", {tituloServivios : "servicioss dinamicooooooo"})

})

module.exports = router;