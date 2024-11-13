console.log(' web Serverni boshlashlash')

const express = require("express");
const app = express();
const http = require('http');


/*  Server yaratishni ikki hil usuli bor : 
  1. Traditional method yani bu biz buni express package yordami ejs orqali yaratdik.
  2. Single page orqali yani bunda biz reac orqali yaratishimiz mumkun!

*/
// 1  Kirish codelari yoziladi:

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2 Section qismi ikkinchi bo'limda yoziladi:


// 3  Bu qismda tradional usulda backendni ichida frontend qismi yasaladi => Views ga bog'liq ko'dlar yoziladi:
app.set('views', "views");
app.set("view engine", 'esj')

// 4 Bu qadam asosan routerlarga mo'ljallangan, ya'ni Routing codelar yoziladi:

app.get('/hello', function(req, res) {
    res.end(`<h1 style = "background: red"> You are in hello section</h1>`);
});

app.get('/gift', function(req, res) {
    res.end(`<h1 style = "background: blue; color: white"> You are in gift section</h1>`);
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running seccesfully on port: ${PORT}`)
});