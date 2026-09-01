public class stack_with_LinkList {
    static class Stack{
        //we can create this class in this class and subclass also
        class Node{
            int data;
            Node next;
            int size;
            public Node(int data){
                this.data=data;
                next=null;
            }

         
        }
        static Node head=null;
        public void push(int data){
            Node newnode=new Node(data);
            if(head==null){
                head=newnode;
                return;
            }
            newnode.next=head;
            head=newnode;
            return;
        }
        public int  pop(){
            if(head==null){
                System.out.println("stack is Underflow");
                return -1;
            }
            int val=head.data;
            head=head.next;
            return val;
            

        }
        public void peek(){
            if(head==null){
                System.out.println("stack is underflow");
                return ;
            }
            System.out.println(head.data);
            
        }
        public boolean isEmpty(){
            if( head==null){
                return true;
            }
            else{
                return false;
            }

        }
    }
    public static void main(String[] args) {
        Stack s=new Stack();
        s.push(1);
        s.push(2);
        s.push(3);
        System.out.println(s.isEmpty());
        
        while(s.head!=null){
            System.out.println(s.head.data);
            s.head=s.head.next;


        }
        System.out.println(s.isEmpty());

        
    }
    
}
