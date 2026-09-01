public class DoubleLL {
    class Node {
        int data;
        Node next;
        Node prev;

        Node(int data) {
            this.data = data;
            this.next = null;
            this.prev = null;
        }
    }

    static Node head = null;
    static Node tail = null;
    static int size = 0;
    static Node temp = null;

    void addFirst(int data) {
        Node nn = new Node(data);
        size++;
        if (head == null) {
            tail = head = nn;
        } else {
            nn.next = head;
            head.prev = nn;
            head = nn;
        }

    }

    void addLast(int data) {
        Node nn = new Node(data);
        size++;
        if (head == null) {
            tail = head = nn;
        } else {
            tail.next = nn;
            nn.prev = tail;
            tail = nn;
        }
    }

    void addAtindex(int data, int index) {
        Node nn = new Node(data);
        if (index < 0 || index >= size) {
            System.out.println("index is not out of bound");
        } else {

            if (index == 0) {
                addFirst(data);
            } else {
                size++;
                int i = 0;
                temp = head;
                while (i < index - 1) {
                    temp = temp.next;
                    i++;

                }
                nn.prev = temp;
                nn.next = temp.next;
                temp.next.prev = nn;
                temp.next = nn;

            }

        }

    }

    // removing method

    int removeFirst() {
        if (head == null) {
            return -1;

        } else {
            size--;

            if (head.next == null) {
                int data = head.data;
                head = tail = null;
                return data;

            } else {
                int data = head.data;
                head = head.next;
                head.prev = null;
                return data;
            }

        }

    }

    int removeLast() {
        if (head == null) {
            System.out.println("underflow");
            return -1;
        } else {
            size--;
            if (head.next == null) {
                int data = head.data;
                head = tail = null;
                return data;
            } else {
                int data = tail.data;
                tail = tail.prev;
                tail.next = null;
                return data;

            }

        }
    }

    int removeAtIndex(int index) {
        if (index < 0 || index >= size) {
            System.out.println("index is not out of bound");
            return -1;
        }
        if (head == null) {
            System.out.println("index out of bound");
            return -1;
        } else {

            if (index == 0) {
                return removeFirst();
            } else {
                size--;
                int i = 0;
                temp = head;
                while (i < index) {
                    i++;
                    temp = temp.next;
                }
                int data = temp.data;
                if (temp == tail) {
                    tail = temp.prev;
                    tail.next = null;

                } else {
                    temp.prev.next = temp.next;
                    temp.next.prev = temp.prev;
                    temp.next = null;
                    temp.prev = null;
                }
                return data;

            }
        }
    }

    void print() {
        System.out.println("printing staring...");
        temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
        System.out.println("size of dll is = " + size);
    }

    void print1() {
        temp = tail;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.prev;
        }
        System.out.println();
        System.out.println("size of dll is = " + size);
    }

    public static void main(String[] args) {
        DoubleLL dll = new DoubleLL();
        dll.addFirst(10);
        dll.addFirst(20);
        dll.addFirst(30);
        dll.print();
        // dll.print1();
        dll.addLast(40);
        dll.addLast(2);
        dll.print();
        // dll.print1();
        dll.addAtindex(50, 0);
        dll.addAtindex(60, 5);
        dll.print();
        dll.addAtindex(100, 2);
        dll.print();
        // dll.print1();
        dll.removeFirst();
        dll.removeFirst();
        dll.print();
        dll.removeLast();
        dll.removeFirst();
        dll.removeLast();
        dll.print();
        // dll.print1();
        dll.removeAtIndex(2);
        dll.print();
        dll.print1();

    }

}
