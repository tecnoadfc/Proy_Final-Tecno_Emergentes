const express = require("express");
const app = express();

//const db = require("./database");

const engine = require("consolidate");
app.engine("hbs", engine.handlebars);
app.set("views","./views");
app.set("view engine","hbs");

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
   res.render('login');
});


//const prodRouter = require("./routes/prodRoutes");
//app.use("/productos",prodRouter);


app.listen(5000,()=>{
   console.log('servidor iniciado en http://localhost:5000');
});
