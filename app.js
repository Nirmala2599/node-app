const express = require('express');
const app =express();
const cors =require('cors');
const bodyParser =require('body-parser');
const booksRouter =require('./routes/books');
const mongoose =require('mongoose')


app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/books', booksRouter);
// app.use((req, res, next) => {
//      console.log("I'm a middleware!!");
//      next();

//})

mongoose.connect('mongodb+srv://nirmala:Nirmala2599@guvib46.o2n8f9k.mongodb.net/?retryWrites=true&w=majority');

const con =mongoose.connection;
try{
    con.on('open', () => {
        console.log("Mongodb connected!!!");
    });
} catch (error) {
    console.log("Error: " +error);
 }

app.get('/', (req, res) =>{
res.send("Hello GUVIB46!!! - from get method!!");
})

   app.listen(4001);