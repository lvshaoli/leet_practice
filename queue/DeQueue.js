import LinkedList from "./list/LinkedList";

export default class DeQueue {
    // 双向链表实现

    constructor() {
        this.list = new LinkedList()
    }

    size() {
        return this.list.size();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    clear() {
        this.list.clear();
    }

    enQueueRear(element) {
        this.list.add(element)
    }
    enQueueFront(element) {
        this.list.add(0, element)
    }

    deQueueRear() {
        return this.list.remove(this.list.size() - 1);
    }

    deQueueFront() {
        return this.list.remove(0);
    }

    front() {
        return this.list.get(0);
    }

    rear() {
        return this.list.get(this.list.size() - 1);
    }
}