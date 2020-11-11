

export default class AbstractList {
    constructor() {
        this.size = 0;
    }


    // 下标越界抛出的异常
    outOfBounds(index) {
        throw new Error("Index:" + index + ", Size:" + size)
    }

    // 检查下标越界(不可访问或删除size位置)
    rangeCheck(index) {
        if (index < 0 || index > this.size) {
            this.outOfBounds(index)
        }
    }
    // 检查add()的下标越界(可以在size位置添加元素)
    randCheckForAdd(index) {
        if (index < 0 || index >= this.size) {
            this.outOfBounds(index)
        }
    }

    contain(element) {

    }

    size() {
        return this.size;
    }

    isEmpty(){
        return this.size == 0
    }
}