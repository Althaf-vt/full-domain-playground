class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++;
    }
    prepend(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }

        this.size ++;
    }

    remove(value){
        if(this.isEmpty()) return 'list is empty';

        let curr = this.head;
        let prev = null;

        while(curr.value !== value){
            prev = curr;
            curr = curr.next;
        }
        const removed = curr;

        prev.next = removed.next;
        return `item removed ${removed.value}`;
    }

    display(){
        if(this.isEmpty()){
            console.log('empty list');
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

    findMid(){
        if(this.isEmpty()) return 'list is empty';

        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        return `mid is : ${slow.value}`;
    }

    removeMid(){
        if(this.isEmpty()) return 'list is empty';

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        let removed = slow;

        prev.next = removed.next;

        return `removed ${removed.value}`;
    }

    reverse(){
        if(this.isEmpty()) return 'empty list';

        let prev = null;
        let curr = this.head;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
        this.display()

         prev = null;
         curr = this.head;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }
}

const list = new LinkedList();

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.display();
// console.log(list.remove(40))
list.display()
console.log(list.findMid())
// console.log(list.removeMid())

list.reverse();
list.display();

