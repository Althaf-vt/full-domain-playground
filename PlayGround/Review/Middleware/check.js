const check = (req,res,next) => {
    
    if((req.method === 'put' || req.method === 'patch') && req.header[0] === 'x' && req.header[1] === 'admin'){
        next()
    }else{
        return res.send('error')
    }
}

module.exports = {check}