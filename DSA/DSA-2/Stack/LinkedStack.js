class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedStack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.min = Infinity;
        this.max = -Infinity;
    }

    isEmpty(){
        return this.size === 0;
    }

    push(x){
        const node = new Node(x);
        if(this.isEmpty()){
            this.head = this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        if(node.value > this.max){
            this.max = node.value;
        }

        if(node.value < this.min){
            this.min = node.value
        }
        this.size ++;
    }

    popF(){
        if(this.isEmpty())return 'nothing to pop';


        const removed = this.head.value;
        if(this.size === 1){
            this.head = this.tail = null;
            this.min = Infinity;
            this.max = -Infinity;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size --;
        return removed;
    }

    popB(){
        if(this.isEmpty()) return 'nothing to pop';

        let removed = this.tail.value;

        if(this.size === 1){
            this.head = this.tail = null;
            this.min = Infinity;
            this.max = -Infinity;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null
        }
        this.size --
        return removed;
    }

    getMIn(){
        if(this.isEmpty()) return 'empty list'

        return this.min;
    }

    getMax(){
        if(this.isEmpty()) return 'empty list';
        return this.max;
    }
    display(){
        if(this.isEmpty()){
            console.log('empty list')
        }else{
            let listValues = '';
            let curr = this.head;

            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues)
        }
    }
}


const l = new LinkedStack();

l.push(10)
l.push(20)
l.push(30)
l.push(40)
l.push(50)
l.push(60)

l.popB()
l.popF()
l.display()




