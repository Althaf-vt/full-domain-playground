// const fs = require('fs');

const { fork } = require('child_process');
const { error } = require('console');
const { clearInterval } = require('timers');

// fs.readFile('source.txt','utf-8',(err,data) => {
//     if(err) return err;

//     fs.appendFile('destination.txt',`${data}\n`,err => {
//         if(err) console.log(err)
//     });
// });


const fs = require('fs').promises;


async function readTwo(file1,file2,outputFile){

    try {
        const [result1, result2] =await Promise.all([
            fs.readFile(file1,'utf-8'),
            fs.readFile(file2,'utf-8')
        ])

        await fs.writeFile(outputFile,`${result1}\n${result2}\n`);
        console.log('done');
    } catch (error) {
        console.log(error);
    }
}

// readTwo('source.txt','destination.txt','desti2.txt');

function deleteFile(file){
    fs.unlink(file,(err) => {
        if(err) console.log(err);
    })
}
// deleteFile('desti2.txt')




function rename(file){
    fs.rename(file,'destination.txt',(err) => {
        if(err) console.log(err);
    })
}

// rename('newFile.txt')

// const {fork} = require('child_process');

function childProcess(){

    const child = fork('./child.js');

    child.send('start');

    child.on('message',(result) => {
        console.log(result);
        child.kill()
    })

    // let i = 1
    // let interval = setInterval(()=> {
    //     console.log(i);
    //     i ++;
    //     if(i > 5) clearInterval(interval);
    // },2000)

    let sum = 0
    for(let i = 1; i < 1e9 * 3; i ++){
        sum += i;
    }

    console.log('main sum : ',sum)
    console.log('main loop done')

}

// childProcess()

const {Worker} = require('worker_threads');
function workerThread(){
    const worker = new Worker('./worker.js');

    worker.postMessage('start');
    
    worker.on('message',(result) => {
        console.log(result);
        worker.terminate();
    });

    let sum = 0;
    // for (let i = 1; i < 1e9 * 3; i++) {
    //     sum += i;
    // }

    console.log('main sum:', sum);
    console.log('main loop done');
}

workerThread()