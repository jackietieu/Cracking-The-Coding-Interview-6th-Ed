function Node(value) {
  this.value = value;
  this.next = null;
}

function detectLoop(head) {
  let slow = fast = head;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow.value === fast.value) {
      return slow;
    }
  }

  return null;
}

let first = new Node(1),
    second = new Node(2),
    third = new Node(3),
    fourth = new Node(4),
    fifth = new Node(5);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = second;

detectLoop(first)
