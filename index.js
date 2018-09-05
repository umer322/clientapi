const MongoClient=require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
    if (err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('connected')
    const db=client.db('CarNumberDetails')
    db.collection('entry').insertOne({
        name:'Umer'
    },(err,result)=>{
        if (err){
           return console.log('Unable to insert data') 
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    })
    client.close();

})