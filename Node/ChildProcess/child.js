// const { exec } = require('child_process');

// exec('dir', (error, stdout, stderr) => {
//     if (error) {
//         console.log(`Error: ${error.message}`);
//         return;
//     }

//     if (stderr) {
//         console.log(`Stderr: ${stderr}`);
//         return;
//     }

//     console.log(`Output:\n${stdout}`);
// });

// const { fork } = require('child_process');
// const http = require('http');

// http.createServer((req, res) => {

//     if(req.url === '/'){
//     const child = fork('./worker.js');

//     child.send("start");
//     child.on('message', (msg) => {
//         res.end(msg);
//     });
//     console.log('hi')
//     res.write('hi\n')
// }else{
//     res.end('404')
// }

  

  

// }).listen(3000);



// const { fork } = require('child_process');

// console.log('Main process started');

// const child = fork('./worker.js');

// child.send('start');

// child.on('message', (result) => {
//     console.log('Result from child:', result);
// });

// console.log('Main process continues...');


const {fork} = require('child_process');
console.log("main process started !");
const child = fork('./worker.js');

child.send('start');
let i = 1
const interval = setInterval(()=>{
    console.log(i);
    i ++

    if(i > 6) clearInterval(interval);
},2000)

child.on('message', (result) => {
    console.log('result from child: ', result);

    child.kill()
})

console.log('main process continues...')


