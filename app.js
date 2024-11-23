console.log(' web Serverni boshlashlash')

const express = require("express");
const res = require('express/lib/response')
const app = express();

// MongoDB ni chaqirish: 

const db = require("./server").db();

// const fs = require('fs');


// let user;
// fs.readFile("database/user.json", "utf-8", (err, data)=>{
//     if(err){
//         console.log("Error:", err);
//     }
//     else{
//         user = JSON.parse(data);
//     }
// })

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
app.set("view engine", 'ejs'); 

// 4 Bu qadam asosan routerlarga mo'ljallangan, ya'ni Routing codelar yoziladi:
app.post('/create-item', (req, res)=>{
    console.log("user entered /create-item");  
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        }else{
            // console.log(data);
            res.end("Successfully added")
        }
    });
    
    /// Post -> bu o'zi bilan malumot olib keladi va uni database ga yozish uchun xizmat qiladi:
    // res.json({test: "succes"});
})

app.get('/author', (req, res)=> {
    res.render('author', {user: user} )
})

app.get('/', function (req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) =>
    {
        if(err){
            console.log(err);
            res.end('something went wrong')
        } else{
            res.render('reja', {items: data });
        }
    })
    // res.render('reja');   /// get -> Bu esa database dan malumot olish vao'qish uchun ishlatiladi:
});

// app.get('/hello', function(req, res) {
//     res.end(`<h1 style = "background: red"> You are in hello section</h1>`);
// });

app.get('/gift', function(req, res) {
    res.end(`<h1 style = "background: blue; color: white"> You are in gift section</h1>`);
});


module.exports = app;