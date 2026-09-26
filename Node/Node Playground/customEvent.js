class CE{
    constructor(){
        this.events = {};
    }

    on(eventName, listener){
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName, data){

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
        this.on(eventName,wrapper);
    }

    off(event, listener){
        let listeners = this.events[event];

        if(listener){
            this.events[event] = listeners.filter((fn)=> fn !== listener)
        }
    }
}