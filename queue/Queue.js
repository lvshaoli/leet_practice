
import LinkedList from './list/LinkedList.js'

export default class Queue {

    constructor() {
        console.log("Queue")
        this.list = new LinkedList()
    }

    // 入队
    enQueue(element) {
        this.list.add(element)
    }

    // 出队
    deQueue() {
        return this.list.remove(0)
    }

    // 元素的数量
    size() {
        console.log(this.list)
        return this.list.size
    }

    // 清空

    clear() {
        this.list.clear()
    }

    // 队头元素

    top() {
        return this.list.get(0)
    }

    // 是否为空
    isEmpty() {
        return this.list.size == 0
    }
}