const express = require('express');

const connect = require('./database/connect')

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('HomePage')
})

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`server connected to ${PORT}`);
})
connect();
