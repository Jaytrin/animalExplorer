
//require the animals.js file from the data folder, store it in a variable
const animalVariable = require('/data/animals.js');
//require express
const express = require('express');
//make the server
const server = function(){
    express();
    animalVariable();
}

//add the static folder and point it at the html folder
server.use(express.static(__dirname + '/html'));

//make an endpoint to get data for all animals
	//return the animals data

server.get('/',(request, response)=>{
    console.log('Got a request');
    response.send('Response from server');
})

//make the server listen for connections on port 3000
server.listen(3000, ()=>{
    console.log('server is listening')
});