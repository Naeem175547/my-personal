public class circularLL {
    static class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            next = null;

        }
    }

    public static Node head = null;
    public static Node tail = null;
    public static int size = 0;

    // addFirst
    public void addFirst(int data) {
        Node newNode = new Node((data));
        if (head == null) {
            newNode.next = head;
            head = tail = newNode;
            size++;
            return;
        }
        newNode.next = head;
        head = newNode;
        tail.next = head;
        size++;

    }

    // addLast
    public void addLast(int data) {
        Node newNode = new Node((data));
        if (head == null) {
            newNode.next = head;
            head = tail = newNode;
            size++;
            return;
        }
        tail.next = newNode;
        newNode.next = head;
        tail = newNode;
        size++;

    }

    // removeFirst
    public int removeFirst() {
        if (head == null) {
            System.out.println("CLL is empty");
            return Integer.MIN_VALUE;

        }
        if (size == 1) {// head.next=null only one elements
            int val = head.data;
            head = tail = null;
            size--;

        }
        int val = head.data;
        head = head.next;
        tail.next = head;
        size--;
        return val;

    }

    // remove Last
    public int removeLast() {
        if (head == null) {
            System.out.println("CLL is empty");
            return Integer.MIN_VALUE;

        }
        if (size == 1) {// head.next=null only one elements
            int val = head.data;
            head = tail = null;
            size--;

        }
        Node temp = head;
        while (temp.next.next != head) {// we can run loop i=0 to i<n-1
            temp = temp.next;
        }
        int val = temp.next.data;
        temp.next = te.mp.next.next;
        tail = temp;

        size--;
        return val;

    }

    // Print funtion for circular linked list
    public void print() {
        Node temp = head;
        do {
            System.out.print(temp.data + " ");
            temp = temp.next;
        } while (temp != head);
        System.out.println(size);
    }

    public static void main(String[] args) {
        DoubleLL cll = new DoubleLL();
        cll.addFirst(10);
        cll.addFirst(20);
        cll.addLast(2000);
        cll.addFirst(4);
        cll.addFirst(3);
        cll.addFirst(1);
        cll.addFirst(2);
        cll.addFirst(3);
        cll.addLast(1000);
        cll.print();
        System.out.println(cll.removeFirst());
        System.out.println(cll.removeLast());
        cll.print();
        System.out.println(cll.removeLast());
        cll.print();

    }

}
