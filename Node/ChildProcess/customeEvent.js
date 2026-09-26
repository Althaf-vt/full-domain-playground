class MyEmitter{
    constructor(){
        this.events = {};
    }

    on(eventName, listener){
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName,data){
        const listeners = this.events[eventName];

        if(listeners){
            listeners.forEach((fn) => fn(data));

        }
    }

    once(eventName, listener){
        const wrapper = (data) => {
            listener(data);

            this.off(eventName,wrapper);
        }
        this.on(eventName, wrapper);
    }

    off(event,listener){
        let listeners = this.events[event];

        if(!listeners) return;

        this.events[event] = listeners.filter((fn)=>  fn !== listener)
    }

}

const emitter = new MyEmitter();

emitter.on('greet',(name) => {
    console.log(`hello ${name}`);
})

emitter.emit('greet','berlin');
emitter.once('bye',(name)=>{
    console.log(`good bye ${name}`)
})
emitter.emit('bye','berlin')
emitter.emit('bye','berlin')

