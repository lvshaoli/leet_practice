// 双向链表
import AbstractList from './AbstractList.js'

class Node {
    constructor(prev, element, next) {
        this.prev = prev;
        this.element = element;
        this.next = next;
    }

    toString() {
        let sb = '';
        if (this.prev) {
            sb += this.prev.element
        } else {
            sb+='null'
        }
        sb += '_' + this.element + '_';

        if (this.next) {
            sb += this.next.element;
        } else {
            sb += 'null'
        }

        return sb;
    }
}

const ELEMENT_NOT_FOUND = -1;
export default class LinkedList extends AbstractList {

    constructor() {
        super()
        this.first = null;
        this.last = null;
    }

    set(index, element) {
        let node = this.getNode(index);

        let oldElement = node.element;

        node.element = element;
        return oldElement
    }

    get(index) {
        return this.getNode(index).element
    }

    add(element) {
        this.addIndex(this.size, element)
    }

    addIndex(index, element) {
        this.rangeCheckForAdd(index)
        if(index === this.size) {
            let oldLast = this.last;
            this.last = new Node(oldLast, element, null);
            if (oldLast === null) { // 这是链表添加的第一个元素
                this.first = this.last;
            } else {
                oldLast.next = this.last;
            }
        } else { // 正常添加元素
            let oldNode = this.getNode(index);
            let prev = oldNode.prev;
            let node = new Node(prev, element, oldNode);
            oldNode.prev = node;
            if (prev === null) {
                this.first = node;
            } else {
                prev.next = node;

            }
        }

        this.size ++;
    }

    indexOf(element) {
        let node = this.first
        for (let i = 0; i < this.size; i++) {
            if (node.element === element) return i;
            node = node.next;
        }
        return ELEMENT_NOT_FOUND
    }

    /**
	 * 根据索引找到节点
	 */
    getNode(index) {
        this.rangeCheck(index)

        if(index < (this.size >> 1) ) { // 索引小于一半

            let node = this.first;
            for(let i = 0; i<index; i++) {
                node = node.next;
            }
            return node;
        } else { // 索引大于一半
            let node = this.last;
            for(let i = this.size - 1; i>index; i--) {
                node = node.prev
            }
            return node;
        }

    }


    remove(index) {
        this.rangeCheck(index)
        let node = this.getNode(index);
        let next = node.next;
        let prev = node.prev;

        if (!prev) { // 第一个
            this.first = next;
        } else {
            prev.next = next;
        }

        if (!next) { // 最后一个
            this.last = prev;
        } else {
            next.prev = prev;
        }


        this.size --;
        return node.element;
    }

    clear() {

        this.first = null;
        this.last = null;
        this.size = 0;
    }


    toString () {
        let node = this.first;

        let res = '[ ';
        for(let i = 0; i < this.size; i++) {
            if (i !== 0) {
                res += ', '
            }
            res += node;
            node = node.next;
        }

        res += " ]"
        return res.toString();
      }

}