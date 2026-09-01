public class DLL {
    class Node{
        int data;
        Node prev;
        Node next;
        public Node(int data){
            this.data=data;
            prev=null;
            next=null;
        }
    
    }
    public static Node head=null;
    public static Node tail=null;
    public static int size=0;
    public void addFisrt(int data){
        Node newNode=new Node(data);
        if(head==null){
            head=tail=newNode;
            size++;
            return;
        }
        newNode.next=head;
        head.prev=newNode;
        head=newNode;

    }
    //addLast
    public void addLast(int data){
        Node newNode=new Node(data);
        if(head==null){
            head=tail=newNode;
            size++;
            return;
        }
        tail.next=newNode;
        newNode.prev=tail;
        tail=newNode;
        size++;
    }
    //removefirst
    public int removeFirst(){
        if(head==null){
            System.out.println("DLL is null");
            return Integer.MIN_VALUE;
        }
        if(size==1){
            int val=head.data;
            head=tail=null;
            size--;
            return val;
        }
        int val=head.data;
        head=head.next;
        head.prev=null;
        size--;
        return val;


    }
    //removeLast
    public int removeLast(){
        if(head==null){
            System.out.println("DLL is null");
            return Integer.MIN_VALUE;
        }
        if(size==1){
            int val=head.data;
            head=tail=null;
            size--;
            return val;
        }
        Node temp=head;
        while(temp.next.next!=null){
            temp=temp.next;
        }
        int val=temp.next.data;
        temp.next.prev=null;
        temp.next=null;
        tail=temp;
        size--;
        return val;


    }
    //Reverse a Linked List
    public void reverse(){
        tail=head;
        Node prev=null;
        Node curr=head;
        Node next;
        while(curr!=null){
            next=curr.next;
            curr.next=prev;
            curr.prev=next;
            prev=curr;
            curr=next;
        }
        head=prev;

    }
    public void print(){
        Node temp=head;
        while(temp!=null){
            System.out.print(temp.data+" ");
            temp=temp.next;
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        DLL x=new DLL();
        x.addFisrt(1);
        x.addFisrt(2);
        x.print();
        x.addLast(5);
        x.addLast(10);
        x.addFisrt(100);
        x.print();
        System.out.println(x.removeFirst());
        x.print();
        System.out.println(x.removeLast());
        x.print();
        x.reverse();
        x.print();


        
    }
    
}
