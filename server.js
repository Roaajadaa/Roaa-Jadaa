// include packag
const express = require('express');
const axios = require("axios");
const path = require ('path');
const ejs = require('ejs');

//init packag
const app = express(); // as a pointer to express class
app.set("view engine","ejs"); 
app.set('views', path.join(__dirname,'views'))
//server
app.listen(3000,()=>{console.log('server start') 
console.log('http://localhost:3000')})


app.get( '/', async (req , res )=> {
    
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const pikachu = response.data;
    const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
    const bulbasaur = response2.data;
    const response3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/charmander`);
    const charmander = response3.data;

    
    res.render('home', { pikachu , bulbasaur , charmander })

    }
    );



