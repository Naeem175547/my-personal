public class circularLL {
    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    static Node head = null;
    static Node tail = null;
    static Node temp;
    static int size = 0;

    void addFirst(int data) {
        Node nn = new Node(data);
        if (head == null) {
            head = tail = nn;
            tail.next = head;

        } else {
            nn.next = head;
            head = nn;
            tail.next = head;
        }
        size++;

    }

    void addLast(int data) {
        Node nn = new Node(data);
        if (head == null) {
            tail = head = nn;
            tail.next = head;

        } else {
            tail.next = nn;
            tail = nn;
            tail.next = head;

        }
        size++;
    }

    void addAtIndex(int data, int index) {

        if (head == null) {
            addFirst(data);
        } else if ((index <= 0)) {
            addFirst(data);

        } else if (index >= size) {
            addLast(data);
        } else {
            Node nn = new Node(data);

            int i = 0;
            temp = head;
            while (i < index - 1) {
                temp = temp.next;
                i++;

            }
            nn.next = temp.next;
            temp.next = nn;
            size++;

        }
    }

    int removeFirst() {
        if (head == null) {
            System.out.println("underflow...");
            return -1;
        } else {
            size--;
            if (head.next == head) {
                int data = head.data;
                tail = head = null;
                return data;

            } else {
                int data = head.data;
                head = head.next;
                tail.next = head;
                return data;
            }

        }
    }

    int removeLast() {
        if (head == null) {
            System.out.println("overflow..");
            return -1;
        } else {
            size--;
            if (head.next == head) {/// or size ==0
                int data = head.data;
                head = tail = null;
                return data;
            } else {

                temp = head;
                while (temp.next != tail) {
                    temp = temp.next;
                }
                int data = tail.data;
                tail = temp;
                tail.next = head;

                return data;

            }
        }
    }

    int removeAtIndex(int index) {
        if (index < 0 || index >= size) {
            System.out.println("index is out of bound");
            return -1;
        }
        if (index == 0) {
            return removeFirst();
        }

        int i = 0;
        temp = head;
        while (i < index - 1) {
            temp = temp.next;
            i++;
        }
        if (temp.next == tail) {
            return removeLast();
        } else {
            int data = temp.next.data;
            temp.next = temp.next.next;
            size--;
            return data;

        }

    }

    static void print() {
        if (head == null) {
            System.out.println("empty..");
            return;
        }
        temp = head;
        do {
            System.out.print(temp.data + " ");
            temp = temp.next;
        } while (temp != head);
        System.out.println();
        System.out.println("size of linkedList==" + size);
    }

    public static void main(String[] args) {
        circularLL cl = new circularLL();
        cl.addFirst(10);
        cl.addFirst(20);
        cl.addFirst(30);
        print();
        cl.addLast(2);
        cl.addLast(3);
        cl.addFirst(10);
        cl.addAtIndex(1, 0);
        cl.addAtIndex(2, -3);
        cl.addAtIndex(0, 8);
        cl.addAtIndex(50, 0);
        cl.addAtIndex(2000, 100);
        cl.addAtIndex(1000, 0);
        print();

        cl.removeFirst();
        cl.removeFirst();
        cl.removeLast();
        cl.removeLast();
        print();
        cl.removeAtIndex(0);
        cl.removeAtIndex(0);
        print();
        cl.removeAtIndex(5);
        print();
        cl.removeAtIndex(1);
        print();
    }

}
