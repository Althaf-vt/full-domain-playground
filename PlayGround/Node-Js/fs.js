const fs = require('fs').promises;

async function fileRead(fileName){
    try {
        const result = await fs.readFile(fileName, "utf-8");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// fileRead('../source.txt');

// class CustomEmitter{
//     constructor(){
//         this.events = {};
//     }

//     on(event, callback){
//         if(!this.events[event]) this.events[event] = [];
//         this.events[event].push(callback)
//     }

//     emit(event, data){
//         if(this.events[event]){
//             this.events[event].forEach(cb => cb(data));
//         }
//     }

//     off(event, listener){
//         let listeners = this.events[event];

//         if(!listeners) return;

//         this.events[event] = listeners.filter((fn) => fn !== listener);
//     }

//     once(event,listener){
//         const wrapper = (data) => {
//             listener(data);

//             this.off(event, wrapper)
//         }
//         this.on(event,wrapper)
//     }
// }


class CustomEmitter{
    constructor(){
        this.events = {};
    }

    on(event,listener){
        if(!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
    }

    emit(event,data){
        if(this.events[event]){
            this.events[event].forEach((cb) => cb(data));
        }
    }

    off(event,listener){
        let listeners = this.events[event];
        if(!listeners) return;

        this.events[event] = listeners.filter((fn) => fn !== listener);
    }

    once(event,listener){
        const wrapper = (data) => {
            listener(data);

            this.off(event,wrapper);
        }
        this.on(event,wrapper)
    }
}

const emiter = new CustomEmitter();

// emiter.on('greet',(name)=>{
//     console.log('hello ', name)
// });

// emiter.emit('greet','berlin')

// emiter.once('hi',(name)=>{
//     console.log('hi ', name)
// })

// emiter.emit('hi','vasu')
// emiter.emit('hi','vasu')

// ======================================

const {fork} = require('child_process')

function childProcess(){
    const child = fork('./child.js');

    child.send('start');

    child.on('message',(result) => {
        console.log(result);
        child.kill();
    })

    let i = 1
    const interval = setInterval(()=>{
        console.log('from main proccess ', i);
        i ++;

        if(i > 5) {
            clearInterval(interval);
        };
    },2000);
}

// childProcess()