class Q{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    enqueue(x){
        this.items.push(x);
    }
    dequeue(){
        if(this.isEmpty()) return 'empty queue';
        const removed = this.items.shift();
        return removed;
    }

    front(){
        if(this.isEmpty()) return 'empty queue';
        return this.items[0];
    }

    display(){
        if(this.isEmpty()){
            console.log('empty queue');
        }else{
            console.log(this.items);
        }
    }

    reverse(){
        if(this.isEmpty()) return;

        let temp = this.dequeue();
        this.reverse();
        this.enqueue(temp);
    }
}

const q = new Q();

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.display();
q.reverse();
q.display()
