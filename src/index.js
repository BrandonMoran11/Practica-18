const express = require('express');//inyeccion de la dependencia express
const mongoose = require('mongoose');//inyeccion de la dependencia mongoose
require("dotenv").config();//require de la dependencia dotenv para hacer variables de ambiente
const app = express();
const port = process.env.PORT || 9000; //se guarda el puerto del servidor que es el 9000 o en caso de que no se encuentre se usa uno por defecto


//routes
app.get("/", (req,res)=>{//ruta raiz
    res.send("Welcome to my API");
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB ATLAS"))
.catch((error)=> console.error(error));

app.listen(port, () => console.log('server listening on port', port));
