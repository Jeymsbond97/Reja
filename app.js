// console.log(' web Serverni boshlashlash')

// const express = require("express");
// const res = require('express/lib/response')
// const app = express();

// // MongoDB ni chaqirish: 

// const db = require("./server").db();

// // const fs = require('fs');


// // let user;
// // fs.readFile("database/user.json", "utf-8", (err, data)=>{
// //     if(err){
// //         console.log("Error:", err);
// //     }
// //     else{
// //         user = JSON.parse(data);
// //     }
// // })

// /*  Server yaratishni ikki hil usuli bor : 
//   1. Traditional method yani bu biz buni express package yordami ejs orqali yaratdik.
//   2. Single page orqali yani bunda biz reac orqali yaratishimiz mumkun!

// */



// // 1  Kirish codelari yoziladi:

// app.use(express.static('public'));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


// // 2 Section qismi ikkinchi bo'limda yoziladi:


// // 3  Bu qismda tradional usulda backendni ichida frontend qismi yasaladi => Views ga bog'liq ko'dlar yoziladi:
// app.set('views', "views");
// app.set("view engine", 'ejs'); 

// // 4 Bu qadam asosan routerlarga mo'ljallangan, ya'ni Routing codelar yoziladi:
// app.post('/create-item', (req, res)=>{
//     console.log("user entered /create-item");  
//     const new_reja = req.body.reja;
//     db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
//         if(err) {
//             console.log(err);
//             res.end("something went wrong");
//         }else{
//             // console.log(data);
//             res.end("Successfully added")
//         }
//     });
    
//     /// Post -> bu o'zi bilan malumot olib keladi va uni database ga yozish uchun xizmat qiladi:
//     // res.json({test: "succes"});
// })

// app.get('/author', (req, res)=> {
//     res.render('author', {user: user} )
// })

// app.get('/', function (req, res) {
//     console.log("user entered /");
//     db.collection("plans").find().toArray((err, data) =>
//     {
//         if(err){
//             console.log(err);
//             res.end('something went wrong')
//         } else{
//             res.render('reja', {items: data });
//         }
//     })
//     // res.render('reja');   /// get -> Bu esa database dan malumot olish vao'qish uchun ishlatiladi:
// });

// // app.get('/hello', function(req, res) {
// //     res.end(`<h1 style = "background: red"> You are in hello section</h1>`);
// // });

// app.get('/gift', function(req, res) {
//     res.end(`<h1 style = "background: blue; color: white"> You are in gift section</h1>`);
// });


// module.exports = app;


console.log('Web Serverni boshlash');
const express = require("express"); 
const app = express(); 
const mongodb = require('mongodb')


//MongoDB chaqirish
const db = require("./server").db();

// *****1 - Kirish codelari*******
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ********2 - Sessionga bogliq bolgan codelar*******
// ********3 - Views ga bogliq codelar*********

app.set("views", "views");
app.set("view engine", "ejs"); 

// *****4 - Rooting ga bogliq codelar********

app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    console.log(req.body);
    // res.end("success");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops)
        res.json(data.ops[0]);
    })
})

//  Delete operation section:
app.post("/delete-item", (req, res) =>{
    const id = req.body.id;
    db.collection("plans").deleteOne({
        _id: new mongodb.ObjectId(id)
    }, function(err, data) {
        res.json({state: "success"});
    })
})


// Edit Operation:
app.post('/edit-item', (req, res) => {
    const data = req.body;
    // console.log(data);
    db.collection("plans").findOneAndUpdate({ _id: new mongodb.ObjectId(data.id)}, {$set: {reja: data.new_input}}, function (err, date) {
        res.json({state: "done"})
    });

})


// Delete-All Operation:

app.post("/delete-all", (req, res) =>{ 
    // console.log("Kelgan malumot:", req)
    if(req.body.delete_all){
        db.collection("plans").deleteMany(function(){
            res.json( {state: "Hamma rejalar o'chirildi!"})
        })
    }
})

app.get("/", function(req, res) {
    console.log('user entered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            // console.log(data);
            res.render("reja", { items: data });
        }
    });
})


module.exports = app;

