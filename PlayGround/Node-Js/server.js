const express = require('express');
const app = express();

const fs = require('fs').promises;
const path = require('path');
app.use(express.urlencoded({extended:true}))

app.get('/read',async (req,res) => {
    try {
        const data = await fs.readFile('../source.txt','utf-8');

        res.send(data);
    } catch (error) {
        console.log(error);
    }
})

app.get('/write-File',(req,res) => {
    res.sendFile(path.join(__dirname,'index1.html'));
})

app.post('/write-File',async(req,res) => {
    try {
        const {content}  = req.body;

        await fs.writeFile('hello2.txt',content);
        res.send('file updated');
    } catch (error) {
        console.log(error);
    }
})

function checkHeader(req,res,next){
    const apiKey = req.headers['x-api-key'];

    if(apiKey !== '1234'){
        return res.redirect('/access-denied');
    }

    next();
}

app.get('/secure',checkHeader,(req,res)=>{
    res.send('welcome');
})

app.get('/access-denied',(req,res)=>{
    res.send('access denied')
})

app.listen(3000,()=> console.log('running'))