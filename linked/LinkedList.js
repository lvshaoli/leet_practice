class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.size = 0;
        this.first = new Node('first', null)
    }


    add(obj) {
        this.addIndex(this.size, obj);
    }

    addIndex(index, obj) {
        if (index === 0) {
           this.first = new Node(obj, this.first)
        } else {
            let prenode = this.getNode(index -1)
            // prenode原来里面放的next给新node
            let newNode = new Node(obj, prenode.next)
             prenode.next = newNode;
        }
     this.size += 1;
    }

    getNode(index) {
        let node = this.first;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        return node;
    }

    toString () {
        let current = this.first;
        let res = '';
        while(current) {
            let next = current.next;
            next = next ? next.value : null;
            res += `[element:${current.value}, next: ${next}]`
            current = current.next;
        }

        return res;
      }
}