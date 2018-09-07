// http://www.openalpr.com/


var express=require('express');
var app=express()

var bodyParser=require('body-parser');

var mongoose = require('mongoose');

mongoose.Promise=global.Promise;


mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost:27017/CarNumberDetails');


var Todo=mongoose.model('Details',{
    details:{
        type:String
    }
})

var NewTodo=new Todo({
    details:'abc'
})



app.use(bodyParser.json())

app.post('/post',(req,res)=>{
        
        var NewTodo=new Todo({
            details:JSON.stringify(req.body) 
        })
        NewTodo.save().then((doc)=>{
            res.send(doc)
        },(e)=>{
            res.status(400).send(e);
        })
});

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server started on'+process.env.PORT)
})