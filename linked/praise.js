// 删除链表中的节点
// https://leetcode-cn.com/problems/delete-node-in-a-linked-list/comments/


function ListNode(val) {
    this.val = val;
    this.next = null;
}


var deleteNode = function(node) {
    let nextNode = node.next;
    node.val = nextNode.val;
    node.next = nextNode.next;

};



/**
 * 反转列表
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 * 输入: 1->2->3->4->5->NULL
   输出: 5->4->3->2->1->NULL   
 */
var reverseList = function(head) {

    if (head === null || head.next === null) return head;
    var newHead = reverseList(head.next);

    head.next.next = head;

    head.next = null;
    return newHead;

};

var reverseList2 = function(head) {
    if (head === null || head.next === null) return head;
    var newHead = null;

    while(head != null) {
        let tmp = head.next;
        head.next = newHead;
        newHead = head;
        head = tmp;
    }
}


/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if (head == null || head.next == null) return false;
    let slow = head.next;
    let fast = head.next.next;

    while(fast != null && fast.next != null) {
        if (slow == fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};


/**
 * 203. 移除链表元素
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let newHead = head;
    let pre = null;
    while(newHead) {
        if(newHead.val == val && newHead === head) {
            head = head.next;
            newHead = head;
        } else if (newHead.val === val) {
            pre.next = newHead.next;
            newHead = newHead.next;
        } else {
            pre = newHead;
            newHead = newHead.next;
        }
    }
    return head;
};