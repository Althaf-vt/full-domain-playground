const fs = require('fs')
const path = require('path');


const arr = [1,2,3,4,5];

function yo(arr){
    return new Promise((res,rej) => {
        const result = arr.some((n) => n > 50);

        if(result) res('success');
        else rej('failed');
    })
}

yo(arr)
    .then((res) => {
        const date = new Date().toDateString();

        const content = `${res}. date : ${date}`;

        fs.writeFile('yo.txt', content, (err) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done');
        })
    })
    .catch((err) => {
        const date = new Date().toISOString();

        const content = `${err}. date: ${date}`;

        fs.writeFile('yo.txt',content,(err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('error done');
        })
    })