
import ArrayList from './list/ArrayList.js'

export default class Stack {

    constructor() {
        this.list = new ArrayList()
    }

    clear() {
        this.list.clear()
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    push(element) {
        this.list.addPush(element)
    }

    pop() {
        return this.list.remove(list.size() - 1)
    }

    top() {
        return this.list.get(list.size() - 1)
    }
}