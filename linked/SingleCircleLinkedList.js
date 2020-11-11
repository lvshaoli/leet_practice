/**
 * 单项环形列表
 */
import AbstractList from './AbstractList.js'

const ELEMENT_NOT_FOUND = -1;


class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }   
    
    toString() {
        const res = this.element + '_' + this.next.element
        return res;
    }
}

 export default class SingleCircleLinkedList extends AbstractList{

    constructor() {
        super()
        this.first = null;
        this.size = 0;
    }

    clear() {
        this.size = 0;
        this.first = null;
    }


    get(index) {
       let node = this.node(index);
       return node.element;
    }

    set(index, element) {
       let node = this.node(index)
       let old = node.element;
       node.element = element;
       return old;
    }

    add(index, element) {
        this.rangeCheckForAdd(index)
        if (index === 0) {
            let newFirst = new Node(element, this.first)
            let last = (this.size === 0) ? newFirst : this.node(this.size - 1)

            last.next = newFirst;

            this.first = newFirst;

        } else {
            let node = this.node(index - 1)
            node.next = new Node(element, node.next)
        }

        this.size ++;
    }

    remove(index) {
        this.rangeCheck(index)

        let node = this.first;
        if (index == 0) {
            if (this.size === 1) {
                this.first = null;
            } else {
                let last = this.node(this.size - 1)
                this.first = this.first.next;
                last.next = this.first
            }

        } else {
            let prev = this.node(index - 1);
            node = prev.next;
            prev.next = node.next;
        }

        this.size --;
        return node.element;
    }

    indexOf(element) {

        let node = this.first;

        for (let i = 0; i < this.size; i++) {
            if (node.element == element) return i;
            node = node.next;
            
        }


        return ELEMENT_NOT_FOUND
    }

    node(index) {
        this.rangeCheck(index)
        let node = this.first;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        return node;
    }

    toString() {
        let res = `[size=${this.size}, `;
        let node = this.first;

            for (let i = 0; i < this.size; i++) {

                if (i != 0) {
                    res += ', '
                }
                res += node.element;

                node = node.next;
                
            }
        res += ']'

        return res.toString();

    }
 }