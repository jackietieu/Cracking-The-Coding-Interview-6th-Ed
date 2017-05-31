function Node(value) {
  this.value = value;
  this.next = null;
}

function removeMiddle(node) {
  node.value = node.next.value;
  node.next = node.next.next;
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

removeMiddle(third);
