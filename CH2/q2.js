function Node(value) {
  this.value = value;
  this.next = null;
}

function findKthToLast(head, k) {
  let current = head,
      tail = head;

  for (let i = 0; i < k - 1; i++) {
    if (current.next) {
      current = current.next;
    } else {
      return null;
    }
  }

  while (current.next) {
    tail = tail.next;
    current = current.next;
  }

  return tail;
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

findKthToLast(first, 2);
