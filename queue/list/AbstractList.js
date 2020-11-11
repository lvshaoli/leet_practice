
export default class AbstractList {
    constructor() {
        this.size = 0;
    }

      // 检查下标越界(不可访问或删除size位置)
      rangeCheck(index) {
        if (index < 0 || index >= this.size) {
            this.outOfBounds(index)
        }
    }

    // 检查add()的下标越界(可以在size位置添加元素)
    rangeCheckForAdd(index) {
      if (index < 0 || index > this.size) {
          this.outOfBounds(index)
      }
    }
    // 下标越界抛出异常
    outOfBounds(index) {
        throw new Error("Index:" + index + ", Size:" + this.size)
    }

    isEmpty() {
        return this.size == 0;
    }

    size() {
        return this.size;
    }
}