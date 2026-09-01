import jwt from 'jsonwebtoken'
import User from '../models/user.models.js'
const auth=async (req,res,next)=>{
    try{
        const bearerHeader=req.headers['authorization']
        if(typeof bearerHeader!=undefined){
            const bearer=bearerHeader.split(' ')
            const token=bearer[1];
            const user=jwt.verify(token,process.env.JWT_SECRET)
            console.log(user)
            req.token=user
            next()
        }
        else{
            res.status(401).json({message:'No Token Provided'})

        }


    }
    catch(err){
        res.status(401).json({message:'Invalid or expired token'});


    }
}

export default auth