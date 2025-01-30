const express = require('express');
const app = express();
const PORT = 4000;

app.get('/',function(req,resp){
    resp.send("I am express server !!");
});

app.get('/greet',function(req,resp){
    resp.send("Good afternoon !!");
});

app.listen(PORT,function(){
    console.log(`Express is running on :${PORT}`);
});