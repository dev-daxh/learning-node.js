const express = require('express');
const app = express();
const PORT = 8000;
const area = require('./area');
app.get('/',function(req,resp){
    resp.send("I am express server !!");
    resp.send(area);
});

app.get('/greet',function(req,resp){
    resp.send("Good afternoon !!");
});

app.listen(PORT,function(){
    console.log(`Express is running on :${PORT}`);
});