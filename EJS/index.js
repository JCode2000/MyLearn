import express from "express";

const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.render("index.ejs");
});

app.listen(port, () =>{
    console.log(`Server Start In Port ${port}`);
});