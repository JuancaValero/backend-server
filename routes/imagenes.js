var express = require('express');

var app = express();

const path = require('path');
const fs = require('fs');

//rutas
app.get('/:tipo/:img', (req, res, next) => {

  var tipo = req.params.tipo;
  var img = req.params.img;

  var pathImagen = path.resolve( __dirname, `../uploads/${ tipo }/${ img }` );

  if ( fs.existsSync( pathImagen) ) {
    res.sendFile( pathImagen );
  }else{
    var pathNoImagen = path.resolve( __dirname, '../assets/no-img.jpg');
    res.sendFile(pathNoImagen);
  }


});

module.exports = app;

// id 627075770790-c5jf2tln3n6sl30pmjuavr36tk6tgt49.apps.googleusercontent.com
// secret AZFKZhZ7F4rj94K_-pTVRLm7
