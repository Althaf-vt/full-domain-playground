const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/home/:data',(req,res) => {
    const data = req.params.data;
    const data2 = req.query.data;

    res.send(data + " and " + data);
})

app.listen(3131,()=> console.log('here is it....'))
