
const CAPACITY_DEFAULT = 10; // 动态数组默认长度

const ELEMENT_NOT_FOUND = -1;
class ArrayList {

    constructor() {
        this.size = 0;
        this.elements = [];
    }


    add(index, element) {
        // this.rangeCheckForAdd(index);

        this.ensureCapacity()

       this.elements[index] = element;

        this.size ++;
    }


    remove(index) {
        this.rangeCheck(index)

        const oldElement = this.elements[index];

        for (let i = index; i < this.size - 1; i++) {
            this.elements[i] = this.elements[i + 1]
        }

        this.elements[--this.size] = null;

        // this.size--;
        this.trim();

        return oldElement;
    }

    clear() {
        for (let i = 0; i < this.size.length; i++) {
            this.elements[i] = null;
        }
        this.size = 0;
    }

    set(index, element) {
        this.rangeCheck(index);
        let oldElement = this.elements[index];

        this.elements[index] = element;

        return oldElement;
    }

    get(index) {
        this.rangeCheck(index)
        return this.elements[index]
    }


    indexOf(element) {
        for (let i = 0; i < this.size; i++) {
            if (this.elements[i] === element) return i;
        }

        return ELEMENT_NOT_FOUND;
    }

    contains(element) {
        return this.indexOf(element) !== ELEMENT_NOT_FOUND
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    rangeCheck(index) {
        if (index < 0 || index > this.size) {
            this.outOfBounds(index);
        }
    }

    ensureCapacity() {
        let oldCapacity = this.elements.length;

        if (this.size < oldCapacity) return;

        let newCapacity = oldCapacity + (oldCapacity >> 1)

        let newElements = new Array(newCapacity)
        for(let i = 0; i< this.size; i++) {
            newElements[i] = this.elements[i];
        }

        this.elements = newElements;
    }

    trim() {
        let capacity = this.elements.length;

        if (this.size >= capacity >> 1 || capacity < CAPACITY_DEFAULT) return;

        let newCapacity = capacity >> 1;
        let newElements = new Array(newCapacity);
        for(let i = 0; i<this.size; i++) {
            newElements = this.elements[i];
        }

        this.elements = newElements
    }

    rangeCheckForAdd(index) {
        if(index < 0 || index > this.size) {
            outOfBounds(index)
        }
    }

    outOfBounds(index) {
        console.log(index)
        throw new Error(`${index},outofBounds`)
    }

    toString() {
        let string = ''
        for(let i = 0; i < this.size; i++) {
            string +=`[${i}:${this.elements[i]}],`
        }
        console.log(`arrayList=${string}size=${this.size}`)
    }
}