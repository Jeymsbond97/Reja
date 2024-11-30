const http = require('http');
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://jeyms_bond97:Tokhirbek007.@cluster0.531ad.mongodb.net/Reja";

mongodb.connect(connectionString,
     {
    useNewUrlParser: true,
    useUnifieldTopology: true
     }, 
     (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succed");
        // console.log(client);
        
        module.exports =client;  

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 6006;
        server.listen(PORT, function(){
            console.log(`The server is running seccesfully on port: ${PORT}, http://localhost:${PORT}`)
        }); 
    }
});
