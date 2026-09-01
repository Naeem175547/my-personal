
public class Linked_List {
    public class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }

    }

    public static Node head;// hamne static isliye likha kyki hum direct main se ise call laga sakte hai or
                            // value bhi same he rahegi
    public static Node tail;
    public static int size;

    // method
    // add node in linkedlist
    public void addFirst(int data) {
        // step1=create new node
        Node newNode = new Node(data);
        size++;
        if (head == null) {
            head = tail = newNode;
            return;
        }
        // step2
        newNode.next = head;
        head = newNode;
    }

    public void addlast(int data) {
        Node newNode = new Node(data);
        size++;
        if (tail == null) {
            head = tail = newNode;
            return;
        }
        // step2
        tail.next = newNode;
        tail = newNode;

    }

    public void add_index(int index, int data) {
        if (index == 0) {
            addFirst(data);
            return;
        }
        size++;
        Node newNode = new Node(data);
        Node temp = head;
        int i = 0;
        while (i < index - 1) {
            temp = temp.next;
            i++;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }

    // remove a element from linked list
    public int remove_first() {
        if (size == 0) {// head==null
            System.out.println("Linked list is empty");
            return Integer.MIN_VALUE;

        } else if (size == 1) {
            int data = head.data;
            head = tail = null;
            size = 0;
            return data;
        }
        int data = head.data;
        head = head.next;
        size--;
        return data;

    }

    public int remove_last() {
        if (size == 0) {
            System.out.println("LL is empty");
            return Integer.MIN_VALUE;
        } else if (size == 1) {
            int data = head.data;
            head = tail = null;
            size = 0;
            return data;

        }
        // temp=>i==size-2

        Node temp = head;// temp=prev
        for (int i = 1; i < size - 1; i++) {
            temp = temp.next;
        }
        /*
         * Node temp=head;
         * while(temp.next.next!=null){
         * temp=temp.next;
         * 
         * }
         */

        int val = temp.next.data;
        temp.next = null;
        tail = temp;
        size--;
        return val;
    }

    // Searching in Linked list
    public int search_iteration(int key) {
        if (head == null) {
            System.out.println("ll is empty");
            return -1;
        }
        Node temp = head;
        int i = 0;
        while (temp != null) {
            if (temp.data == key) {
                return i;
            }
            i++;
            temp = temp.next;
        }
        return -1;

    }

    public int search_recursion(int key) {

        return helper_recursion(head, key);

    }

    public static int helper_recursion(Node temp, int key) {
        if (temp == null) {
            return -1;

        }
        if (temp.data == key) {
            return 0;
        }
        int idx = helper_recursion(temp.next, key);
        if (idx == -1) {
            return -1;
        }
        return idx + 1;
    }

    // Reverse a linked List
    public void reverse_linked_list() {
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

    // remove nth node from end
    public void delectNthNode(int n) {
        int sz = 0;
        Node temp = head;
        while (temp != null) {
            temp = temp.next;
            sz++;

        }
        if (sz == 0) {
            System.out.println("linked list is empty");
            return;
        }
        if (n == sz) {
            head = head.next;
            return;

        }
        Node prev = head;// prev==temp
        // sn-n
        int i = 1;
        while (i < size - n) {
            prev = prev.next;
            i++;

        }
        prev.next = prev.next.next;
        return;

    }

    // palindrome
    public Node findmid() {
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;

    }

    public boolean check_palindrome() {
        if (head == null || head.next == null) {
            return true;
        }
        // step1
        Node midNote = findmid();
        Node prev = null;
        Node curr = midNote;
        Node next;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // step3 check let half & right half is equal or not

        Node right = prev;
        Node left = head;
        print(right);
        print(left);

        while (right != null) {
            if (left.data != right.data) {
                return false;

            }
            left = left.next;
            right = right.next;

        }
        return true;

    }

    // travesal in linked list
    public void print() {
        if (head == null) {
            System.out.println("LL is empty");
            return;

        }
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;

        }
        System.out.println();
    }

    // detect a cycle
    public boolean cycle() {
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

    // remove a loop /cycle in a ll
    public void delete_cycle() {
        Node slow = head;
        Node fast = head;
        boolean cycle = false;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                cycle = true;
                break;
            }
        }
        if (cycle == false)
            return;
        // finding meeting point
        slow = head;
        Node prev = null;// last node
        while (slow != fast) {
            prev = fast;
            slow = slow.next;
            fast = fast.next;

        }
        prev.next = null;
    }

    // MERGE SORT
    public Node merge_sort(Node head_temp) {
        if (head_temp == null || head_temp.next == null) {
            return head_temp;
        }
        Node mid = get_mid(head_temp);
        Node righNode = mid.next;
        mid.next = null;
        Node newLeft = merge_sort(head_temp);
        Node newright = merge_sort(righNode);
        return merge(newLeft, newright);

    }

    // find mid of first half
    private Node get_mid(Node temp) {
        Node slow = temp;
        Node fast = temp.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;// middle
    }

    // merging
    private Node merge(Node head_temp1, Node head_temp2) {
        Node mergeLL = new Node(-1);
        Node temp = mergeLL;
        while (head_temp1 != null && head_temp2 != null) {
            if (head_temp1.data <= head_temp2.data) {
                temp.next = head_temp1;
                head_temp1 = head_temp1.next;
                temp = temp.next;

            } else {
                temp.next = head_temp2;
                head_temp2 = head_temp2.next;
                temp = temp.next;
            }
        }
        while (head_temp1 != null) {
            temp.next = head_temp1;
            head_temp1 = head_temp1.next;
            temp = temp.next;
        }
        while (head_temp2 != null) {
            temp.next = head_temp2;
            head_temp2 = head_temp2.next;
            temp = temp.next;
        }
        return mergeLL.next;
    }

    // ZIGZAG
    public void zigzag() {
        Node slow = head;
        Node fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

        }
        Node mid = slow;
        // reversing second half
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
        Node L_next, R_next;
        while (left != null && right != null) {
            L_next = left.next;
            left.next = right;
            R_next = right.next;
            right.next = L_next;
            left = L_next;
            right = R_next;

        }
    }

    public void print(Node head1) {
        if (head1 == null) {
            System.out.println("LL is empty");
            return;

        }
        Node temp1 = head1;
        while (temp1 != null) {
            System.out.print(temp1.data + " ");
            temp1 = temp1.next;

        }
        System.out.println();
    }

    public static void main(String[] args) {
        Linked_List l1 = new Linked_List();
        l1.addFirst(1);
        l1.addFirst(2);
        l1.addlast(3);
        l1.addlast(2);
        l1.addlast(5);

        // l1.print();
        // l1.add_index(2, 39);
        // l1.print();
        // System.out.println(l1.remove_first());
        // l1.print();
        // System.out.println(l1.remove_last());
        // l1.reverse_linked_list();
        // l1.print();
        // System.out.println(l1.search_iteration(3));
        // System.out.println(l1.search_recursion(39));
        // l1.delectNthNode(1);
        l1.print();
        System.out.println(l1.check_palindrome());
        /*
         * head=new Node(3);
         * head.next=new Node(2);
         * head.next.next=new Node(5);
         * head.next.next.next=head.next;
         */
        // l1.delete_cycle();

        // System.out.println(l1.cycle());
        l1.print();
        // head=l1.merge_sort(head);
        // l1.print();
        // l1.zigzag();
        // l1.print();

    }

}
