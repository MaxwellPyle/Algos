class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLQueue{
    constructor(){
        this.head = null;
        this.tail = null;
    }


    enqueue(value){
        var newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = this.tail.next;
    }

    dequeue(){
        if(!this.head){
            console.log("This queue is empty");
            return null;
        }

        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp.value;
    }

    contains(value){
        if(!this.head){
            return false;
        }

        var runner = this.head;
        while(runner !== null){
            if(runner.value === value){
                return true;
            }
            runner =  runner.next;
        }
    }

    front(){
        if(!this.head){
            return null;
        } else {
            return this.head.value;
        }
    }

    isEmpty(){
        if(!this.head){
            return "this queue is empty";
        } else {
            return "this queue is not empty";
        }
    }

    size() {
        if(!this.head) {
            return 0;
        }
        var len = 1;
        var runner = this.head;

        while(runner){
            len += 1;
            runner = runner.next;
        }

        return len;
    }
}

var queue = new SLQueue();

queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(888);
queue.enqueue(349);

console.log(queue.dequeue());
console.log(queue.size());