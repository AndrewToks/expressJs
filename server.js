const express = require('express')
// console.log(typeof express);

const app = express();



app.use(express.urlencoded({extended: true}))
app.get('/',(req,res) =>{
    res.send('<h1 style="color:red;">Hello World</h1>')
})

app.get("/form",(req,res)=>{
    res.sendFile(__dirname + "/files/form.html")
})

app.get('/greet',(req,res) =>{
    let person = "Guest"
    if(req.query.person) 
        person = req.query.person
    res.send("Greetings from here! " + person)
})
app.listen(3000)
