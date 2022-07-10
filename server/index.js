const express = require('express');

const connect = require('./database/connect');
const authRoute = require('./routes/auth.routes');
const taskRoute = require('./routes/task.route')

const app = express();
app.use(express.json());

app.use('/auth',authRoute);
app.use('/user',taskRoute);

app.get('/',(req,res)=>{
    res.send('HomePage')
})

const PORT = 8080;

app.listen(PORT,async ()=>{
    await connect();
    console.log(`server connected to ${PORT}`);
})
