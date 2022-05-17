class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Deque{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    pushFront(value) {
        var newNode = new Node(value);

        if(!this.head){
            this.tail = newNode;
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    popFront() {
        if(!this.head){
            console.log("This deque is empty");
            return null;
        }

        var popped = this.head;
        this.head = this.head.next;
        popped.next = null;
        return popped.value;
    }

    readFront() {
        if(!this.head){
            console.log("This deque is empty");
            return null;
        }
        return this.head.value;
    }

    pushBack(value) {
        var newNode = new Node(value);

        if(!this.tail){
            console.log("This deque is empty");
            return null;
        }

        this.tail.next = newNode;
        this.tail = newNode;

    }

    popBack(){
        if(!this.tail){
            console.log("This deque is empty");
            return null;
        }

        var runner = this.head;
        while(runner){
            if(runner.next.next !== null){
                runner = runner.next;
            } else {
                var popped = runner.next;
                this.tail = runner;
                runner.next = null;

                return popped.value;
            }
        }
    }

    readBack(){
        if(!this.tail){
            console.log("This deque is empty");
            return null;
        }
        return this.tail.value;
    }

    size() {
        if(!this.tail){
            return 0;
        }

        var runner = this.head;
        var count = 0;
        while(runner){
            count += 1;
            runner =  runner.next;
        }

        return count;
    }

    contains(value) {
        var runner = this.head;

        while(runner){
            if(runner.value === value){
                return true;
            }
            runner =  runner.next;
        }

        return false; 
    }
}

deque = new Deque;

deque.pushFront(4);
deque.pushFront(5);
deque.pushBack(3);
console.log(deque.popBack());
console.log(deque.size());