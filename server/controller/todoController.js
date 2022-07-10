const todoModel = require('../model/todo');

const post = async (req,res)=>{
    let newPost =await todoModel.post(req.body);

    todo.save()
        if(todo){
            return res.status(200).send(todo);
        }
        else
            return res.status(500).send({message:"not added"})
        
        

}

const getAll = async (req,res)=>{
    const get = await todoModel.find(req.body);
    
    req.send(get);

}

module.exports = {post,getAll}