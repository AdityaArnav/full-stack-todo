const mongoose = require('mongoose');

const link = `mongodb://localhost:27017`

const connection = async ()=>{
    try{
        await mongoose.connect(link);
        console.log("database connected")

    }
    catch(err){
    console.log("database can't connected",err)
    }
    
}

module.exports = connection;