
public class Linkedlist {
    static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    static Node head = null;
    static Node tail = null;
    static int size = 0;
    static Node temp = null;

    void addLast(int data) {
        // System.out.println("my linkedlist");
        Node nn = new Node(data);
        size++;
        if (head == null) {
            head = tail = nn;
            return;
        }

        // } else if (head.next == null) {
        // head.next = nn;

        // } else {
        // temp = head;
        // while (temp.next != null) {
        // temp = temp.next;
        // }
        // temp.next = nn;

        // }

        tail.next = nn;
        tail = nn;

    }

    void addFirst(int data) {
        Node nn = new Node(data);
        size++;
        if (head == null) {
            head = tail = nn;
        } else {
            nn.next = head;
            head = nn;

        }

    }

    void addAtindex(int data, int index) {
        if (index < 0 || index > size) {
            // Optionally, throw an exception or handle the invalid index
            System.out.println("Index out of bounds");
            return;
        }

        Node nn = new Node(data);

        if (head == null) {
            head = tail = nn;
        } else if (index == 0) {
            // addFirst(data);
            nn.next = head;
            head = nn;

        } else {
            int i = 0;
            temp = head;
            while (i < index - 1 && temp.next != null) {
                temp = temp.next;
                i++;
            }
            if (temp.next == null) {
                temp.next = nn;
                tail = nn;
            } else {
                nn.next = temp.next;
                temp.next = nn;
            }
        }
        size++;

    }

    void addAfterNode(int data, int node) {
        if (head == null) {
            System.out.println("linked list is empty");
            return;
        }
        Node nn = new Node(data);
        temp = head;
        while (temp != null && temp.data != node) {
            temp = temp.next;
        }
        if (temp != null) {
            if (temp.next == null) {
                tail.next = nn;
                tail = nn;
            } else {
                nn.next = temp.next;
                temp.next = nn;

            }
            size++;
        } else {
            System.out.println("element not inside linkedlist");
        }

    }

    void addBeforeNode(int data, int nodedata) {
        if (head == null) {
            System.out.println("linked list is empty");
            return;
        }

        if (nodedata == head.data) {
            addFirst(data);

        } else {
            Node nn = new Node(data);
            temp = head;
            while (temp.next != null && temp.next.data != nodedata) {
                temp = temp.next;

            }
            if (temp.next != null) {
                nn.next = temp.next;
                temp.next = nn;

            } else {
                System.out.println("element in not in linked list");

            }

        }
        size++;

    }

    // removing mehod
    int removeFirst() {
        if (head == null) {
            return -1;
        } else if (head.next == null) {
            int data = head.data;
            head = tail = null;
            size--;
            return data;
        } else {
            int data = head.data;
            head = head.next;
            size--;
            return data;

        }

    }

    int removeLast() {
        int data;
        if (head == null) {
            return -1;
        } else if (head.next == null) {
            data = head.data;
            head = tail = null;
            size--;
            return data;

        } else {
            temp = head;
            while (temp.next.next != null) {
                temp = temp.next;
            }
            data = temp.next.data;
            temp.next = null;
            tail = temp;
            size--;
            return data;
        }
    }

    int removeAtindex(int index) {

        if (head == null) {
            return -1;
        } else if (index < 0 || index >= size) {
            System.out.println("index out of bound");

            return -1;
        } else if (index == 0) {
            size--;
            return removeFirst();

        } else {
            int i = 0;
            temp = head;
            while (i < index - 1) {
                temp = temp.next;
                i++;
            }
            Node temp1 = temp.next;
            int data = temp1.data;
            if (temp1.next == null) {
                temp.next = null;
                tail = temp;
            } else {
                temp.next = temp1.next;
            }
            size--;
            return data;

        }
    }

    static void print() {
        temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
        System.out.println("size of the linked list = " + size);
    }

    static void print(Node temp1) {

        while (temp1 != null) {
            System.out.print(temp1.data + " ");
            temp1 = temp1.next;
        }
        System.out.println();

    }

    static int search_iteration(int data) {
        temp = head;
        int i = 0;
        while (temp != null) {
            if (temp.data == data) {
                return i;
            }
            temp = temp.next;
            i++;
        }
        return -1;

    }

    static int helper_recursion(Node start, int data, int i) {
        // System.out.println(i);
        if (start == null) {
            System.out.println("linkedlistt is empty....");
            return -1;
        }
        if (start.data == data) {
            return i;
        }
        return helper_recursion(start.next, data, i + 1);

    }

    static int helper_recursion1(Node start, int data) {
        // System.out.println(i);
        if (start == null) {
            System.out.println("linkedlistt is empty....");
            return -1;
        }
        if (start.data == data) {
            return 0;
        }
        int idx = helper_recursion1(start.next, data);
        if (idx == -1) {
            return -1;
        }
        return idx + 1;

    }

    static int search_recursion(int data) {
        // return helper_recursion(head,data,0);
        return helper_recursion1(head, data);
    }
    // reverse

    static void reverse_linked_list() {

        Node prev = null;
        Node curr = tail = head;
        Node next;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        head = prev;

    }

    // check palindrome
    public static Node findMid() {
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;

    }

    public static boolean check_palindrome() {
        if (head == null || head.next == null) {
            return true;

        }
        // find mid
        Node midNode = findMid();

        // reverse second half
        Node prev = null;
        Node curr = midNode;
        Node next;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;

        }

        Node right = prev;
        Node left = head;
        print(left);
        print(right);
        boolean isPalindrom = true;
        Node rightCopy = right;

        while (right != null) {
            if (right.data != left.data) {
                isPalindrom = false;
            }
            right = right.next;
            left = left.next;
        }

        // setting onrighinal linkedlist
        prev = null;
        curr = rightCopy;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;

        }
        return isPalindrom;

    }
    // detect cycle

    static boolean detect_cycle() {
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }

        }
        return false;

    }

    static void remove_cycle() {
        Node slow = head;
        Node fast = head;
        boolean iscycle = false;
        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                iscycle = true;
                break;
            }

        }
        if (iscycle == false) {
            return;
        }
        slow = head;
        Node prev = null;
        while (slow != fast) {
            prev = fast;

            slow = slow.next;
            fast = fast.next;
        }
        prev.next = null;

    }

    // merge sort
    static Node merge_sort(Node head) {
        if (head == null || head.next == null) {
            return head;
        }
        Node mid = getMid(head);
        Node right = mid.next;
        mid.next = null;
        Node newLeft = merge_sort(head);
        Node newRight = merge_sort(right);
        return merge(newLeft, newRight);
    }

    static Node merge(Node head1, Node head2) {
        Node mergeNode = new Node(-1);
        Node temp = mergeNode;
        while (head1 != null && head2 != null) {
            if (head1.data <= head2.data) {
                temp.next = head1;
                head1 = head1.next;
                temp = temp.next;
            } else {
                temp.next = head2;
                head2 = head2.next;
                temp = temp.next;
            }
        }
        while (head1 != null) {
            temp.next = head1;
            head1 = head1.next;
            temp = temp.next;
        }
        while (head2 != null) {
            temp.next = head2;
            head2 = head2.next;
            temp = temp.next;
        }
        return mergeNode.next;

    }

    static Node getMid(Node temp) {
        Node slow = temp;
        Node fast = temp.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    // zigzag
    static public void zigzag() {
        // find mid
        Node slow = head;
        Node fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

        }
        Node mid = slow;
        // reverse 2nd half
        Node curr = mid.next;
        mid.next = null;
        Node prev = null;
        Node next;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;

        }
        Node left = head;
        Node right = prev;
        Node nextL, nextR;
        while (left != null && right != null) {
            nextL = left.next;
            left.next = right;

            nextR = right.next;
            right.next = nextL;

            left = nextL;
            right = nextR;
        }

    }

    public static void main(String[] args) {
        Linkedlist l = new Linkedlist();
        l.addFirst(100);
        l.addLast(5);
        l.addLast(1);
        l.addLast(2);
        l.addLast(10);

        // l.addAtindex(10, 3);
        // l.addAfterNode(12, 10);
        // l.addBeforeNode(34, 10);
        print();
        // // l.removeFirst();
        // // l.removeLast();
        // // l.removeLast();
        // // l.removeAtindex(2);
        // // l.removeAtindex(3);
        // // print();
        // // System.out.println(tail.data);
        // // System.out.println(search_iteration(100));
        // // System.out.println(search_recursion(100));

        // // reverse_linked_list();
        // print();
        // System.out.println(check_palindrome());
        // print();

        // head=new Node(10);
        // Node h2=new Node(20);
        // Node h3=new Node(30);
        // Node h4=new Node(50);

        // head.next=h2;
        // h2.next=h3;
        // h3.next=h4;
        // h4.next=h4 ;
        // // print();
        // System.out.println(detect_cycle());
        // remove_cycle();
        // System.out.println(detect_cycle());
        // head=merge_sort(head);
        print();
        zigzag();
        print();

    }
}