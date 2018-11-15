'use strict';

const superagent = require('superagent');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const API = process.env.API_URL || 'http://localhost:3000';

// set up EJS as our template engine
app.set('view engine', 'ejs');

// Set the public folder up for /...
app.use(express.static('./public') );

app.get('/', homePage);
app.get('/categories', catPage);
app.get('/categories/:name', proPage);

function homePage(request,response) {
  response.render('site', {page:'./pages/index', title:'Our Site: Home'});
}

function catPage(request,response) {
  superagent.get(`${API}/categories`)
    .then( data => {
      response.render('site', {categories:data.body, page:'./pages/categories', title:'Site: Categories'});

    })
    .catch( error => console.error(error) );
}

function proPage(request, response) {
  superagent.get(`${API}/products?category=${request.params.name}`)
    .then( data => {
      response.render('site', {products:data.body, page:'./pages/products', title:'Site: Products'});

    })
    .catch( error => console.error(error) );
}

app.listen(PORT, () => console.log(`Server up on ${PORT}`) );

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};