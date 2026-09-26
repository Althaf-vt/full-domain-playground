const {parentPort} = require('worker_threads');


parentPort.on('message',(msg) => {
    let sum = 0;

    for(let i = 1; i < 1e9 * 4; i ++){
        sum += i;
    }
    parentPort.postMessage(sum)
})