let express = require('express');
let router = express.Router();
let controllerMain = require("../controller/controllerMain")
/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressCarlos' });
}); */

//LECTURA
router.get("/", controllerMain.index)

<<<<<<< HEAD
router.get("/indexCarrito", controllerMain.indexCarrito)
router.get("/compra", controllerMain.compra)

=======
>>>>>>> ce7e3e3b8b7569e27dbd2b50bc6158a4754626e9
// Se trae de Autos y debe eliminarse allá -(Catalogo 2) ***
router.get("/catalogo", controllerMain.catalogo)    
router.get("/catalogo/:id", controllerMain.catalogoDetalle)

// Se trae de user y debe eliminarse allá -(login y Register 1) *?????*


router.get("/register", controllerMain.register)




router.get('/search', controllerMain.search); 



module.exports = router;
