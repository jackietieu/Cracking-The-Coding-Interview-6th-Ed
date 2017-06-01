function Node(value) {
  this.value = value;
  this.next = null;
}

function reverse(head) {
  let curr = head,
      prev = null,
      next = null

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

function isPalindrome(head) {
  let slow = fast = head;
      fast = fast.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }


  if (fast === null) {
    slow = slow.next;
  }

  fast = head;
  slow = reverse(slow);

  while (fast && slow) {
    if (fast.value !== slow.value) {
      return false;
    }

    slow = slow.next;
    fast = fast.next;
  }

  return true;
}

let first = new Node(5),
    second = new Node(4),
    third = new Node(3),
    fourth = new Node(4),
    fifth = new Node(5);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

isPalindrome(first)
