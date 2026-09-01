

public class StackUsingLinkedList {
    class Node{
        int data;
        Node next;
        Node(int data){
            this.data=data;
            this.next=next;
        }
    }
        Node head=null;
        int size=0;
        Node tail=null;
        void push(int data){
            Node nn=new Node(data);
            // if(nn==null){
            //     System.out.println("underflow: stack is full");
            //     return;
            // }
            size++;

            if(head==null){
                head=tail=nn;
                return;
            }
            nn.next=head;
            head=nn;
            


            
            
        }
        int pop(){
            if(head==null){
                System.out.println("undeflow:stack is empy");
                return -1;
            }
            else if(head.next==null){
                int data=head.data;
                head=tail=null;
                return data;
            }
            int data=head.data;
            head=head.next;
            return data;
        }
        boolean isEmpty(){
            return head==null;
        }

        int peek(){
            if(head==null){
                System.out.println("stack is empty");
                return -1;
            }
            return head.data;
        }
        void print(){
            Node temp=head;
            while(temp!=null){
                System.out.print(temp.data+" ");
                temp=temp.next;
            }
            System.out.println();

        }
        public static void main(String[] args) {
            StackUsingLinkedList s=new StackUsingLinkedList();
            s.push(10);
            s.push(20);
            s.push(30);
            s.print();     
            s.push(4);;
            s.push(5);
            s.pop();
            s.print();
            System.out.println(s.peek());
           }
        

    }
    

