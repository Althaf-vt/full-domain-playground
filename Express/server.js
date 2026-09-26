const express = require('express');
const { router } = require('./router/sampleRoute');

const app = express();

const authMiddleware = (req,res,next) => {
    const token = req.headers['authorization'];

    if(!token){
        return res.status(401).json({message:'no token provided'});
    }

    if(token !== 'mysecrettoken'){
        return res.status(403).json({message:'invalid token'});
    }

    next();
}


app.use('/',router);

app.listen(3001,()=> console.log('running express'))