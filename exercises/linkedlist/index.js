// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let current = this.head;
        let counter = 0;

        while (current) {
            counter++;
            current = current.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        while (node && node.next) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = (this.head ? this.head.next : null);
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node && node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        const newNode = new Node(data);
        let last = this.getLast();

        last ? last.next = newNode : this.head = newNode;
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }

            node = node.next;
            counter++;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const prevNode = this.getAt(index - 1);

        if (!prevNode || !prevNode.next) {
            // nothing to remove
            return;
        }

        prevNode.next = prevNode.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const prevNode = this.getAt(index - 1) || this.getLast();

        prevNode.next = new Node(data, prevNode.next);
    }

    forEach(fn) {
        let node = this.head;
        let index = 0;

        while (node) {
            fn(node, index);

            index++;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
