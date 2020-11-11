
import AbstractList from './AbstractList.js'

const DEFAULT_CAPACITY = 10;
const ELEMENT_NOT_FOUND = -1;
class ArrayList extends AbstractList {

    constructor(capacity) {
        super()
        this.capacity = (capacity < DEFAULT_CAPACITY) ? DEFAULT_CAPACITY : capacity
        this.elements = new Array(capacity)
    }


    ensureCapacity(capacity) {
        let oldCapacity = this.elements.length;
        if (oldCapacity > capacity) return;

        let newCapacity = oldCapacity + (oldCapacity >> 1)
        let newElements = new Array(newCapacity);

        for (let i = 0; i < this.size; i++) {
            newElements[i] = this.elements[i]; 
        }
        this.elements = newElements;

        console.log(`size=${oldCapacity}扩容到${newCapacity}`)
    }

    size () {
        return this.size;
    }

    isEmpty() {
        return this.size == 0;
    }

    contains(element) {
        return indexOf(element) != ELEMENT_NOT_FOUND
    }

    addPush(element) {
        this.add(this.size, element);
    }

    add (index, element) {
        this.randCheckForAdd(index)
        this.ensureCapacity(this.size + 1)


        for (let i = this.size ; i < index; i--) {
           this.elements[i] = this.elements[i - 1]
            
        }

        this.elements[index] = element;

        this.size ++;
    }

    get(index) {
        this.rangeCheck(index)
        return this.elements[index]
    }

    set(index, element) {
        this.rangeCheck(index)
        let old = this.elements[index]
        this.elements[index] = element;

        return old;
    }

    remove(index) {
        this.rangeCheck(index)
        let old = this.elements[index];

        for (let i = index; i < this.size - 1; i++) {
           this.elements[i] = this.elements[i + 1]
        }

        this.elements[--this.size] = null;
        return old;
    }

    clear() {
        for (let i = 0; i < this.size; i++) {
            this.elements[i] = null;
        }
    }

    toString() {
        res = '['

        for (let i = 0; i < this.size; i++) {
            const element = this.elements[i];
            res += element + ', '
        }
        res += ']'

        return res;
    }

    indexOf(element) {
        for (let i = 0; i < this.size; i++) {
            if (element == this.elements[i]) return i;
        }
        return ELEMENT_NOT_FOUND
    }
}