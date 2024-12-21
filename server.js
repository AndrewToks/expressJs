const express = require('express')
// console.log(typeof express);

const app = express();

app.get('/',(req,res) =>{
    res.send('<h1 style="color:red;">Hello World</h1>')
})
app.get('/greet',(req,res) =>{
    console.log(req.query);
    
    res.send('Good Morning!')
})
app.listen(3000)
