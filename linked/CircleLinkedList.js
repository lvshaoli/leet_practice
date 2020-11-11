
import AbstractList from './AbstractList.js'


const ELEMENT_NOT_FOUND = -1;
class Node {
    constructor(prev, element, next) {

        this.prev = prev;
        this.element = element;
        this.next = next;
    }


    toString() {
        let res = ''

        if (this.prev) {
            res += this.prev.element
        } else {
            res += 'null'
        }
        res += `_${this.element}_`

        if (this.next) {
            res += this.next.element;
        } else {
            res += 'null'
        }

        return res;
    }
}

export default class CircleLinkedList extends AbstractList{
    constructor() {
        super()
        this.first = null;
        this.last = null;
        this.current = null;
    }

    reset() {
        this.current = this.first;
    }

    next() {
        if (!this.current) return null;

        current = this.current.next;
        return this.current.element
    }


    removeCurrentNode() {
        if (!this.current) return null;
        let next = this.current.next;

        let element  = removeNode(this.current);
        if (this.size == 0) {
            this.current = null;
        } else {
            this.current = next;
        }

        return element;
    }


    clear() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    get(index) {
        return this.node(index).element
    }

    set(index, element) {
        let oldEle = this.node(index).element;
        this.node(index).element = element
        return oldEle;
    }

    add(index, element) {
        this.rangeCheckForAdd(index)

        if (index == this.size) {
            let oldLast = this.last
            last = new Node(oldLast, element, this.first)

            if (!oldLast) {
                this.first = last;
                this.first.next = this.first
                this.first.prev = this.first;
            } else {
                oldLast.next = last;
                this.first.prev = last;

            }
        } else {
            let node = this.node(index)
            let prev = node.prev;
            let newNode = new Node(prev, element, node)
            node.prev = newNode;
            prev.next = newNode;
            if (node == this.first) {
                this.first = newNode;
            }
        }

        this.size ++;
    }

    remove(index) {
        this.rangeCheck(index)
        this.removeNode(this.node(index))
    }

    indexOf(element) {
        let node = this.first;

        for (let i = 0; i < this.size; i++) {
            if (element == node.element) return i;
            node = node.next;
        }
        return ELEMENT_NOT_FOUND;
    }

    node(index) {
        this.rangeCheck(index);

        if (index < (this.size >> 1)) {
            let node = this.first;

            for (let i = 0; i < index; i++) {
                node = node.next;
            }

            return node;
        } else {

            let node = last;

            for (let i = this.size - 1; i > index ; i--) {
                node = node.prev;
            }

            return node;
        }
    }

    removeNode(node) {

        if (this.size == 1) {
            this.first = null;
            this.last = null;
         } else {
             let prev = node.prev;
             let next = node.next;

             prev.next = next;
             next.prev = prev;

             if (node == this.first) {
                 this.first = next;
             }

             if (node == this.last) {
                 this.last = prev;
             }
         }

        this.size --;

        return node.element
    }
}