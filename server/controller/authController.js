const userModel = require('../model/auth')

const signupFn = async (req, res)=>{
    // res.send(req.body);
    const user = await new userModel(req.body);
    // const check = await userModel(req.body)
    user.save((error,success) =>{
        if(error){
            return res.status(500).send({message:"error loading data"})
        }
        else{
            if(req.body.password===req.body.confirmPassword){
                return res.status(200).send({mesage:'data added successfully',token:5342})
            }
            else{
                return res.status(500).send({message:'wrong confirm password'})
            }
        }
    })
}

const loginFn = async (req,res)=>{
    const checkUser = await userModel.find(req.body);

    if(checkUser.length>0){
        let {email,_id}= checkUser[0];
        console.log(checkUser[0]);
        let payload = {
            _id, email, token:5342
        }
        return res.status(200).send({message:"login successfully"})

    }
    else return res.status(500).send({message:'error login'})
}


module.exports = {signupFn, loginFn};