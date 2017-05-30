function Node(value) {
  this.value = value;
  this.next = null;
}

function removeDups(head) {
  let unique = head,
      current;

  while (unique && unique.next) {
    current = unique;

    while (current.next) {
      if (unique.value === current.next.value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    unique = unique.next;
  }
}

let first = new Node(1),
    second = new Node(2),
    third = new Node(3),
    fourth = new Node(1);

first.next = second;
second.next = third;
third.next = fourth;

removeDups(first);
