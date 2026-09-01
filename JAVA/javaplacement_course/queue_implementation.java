

public class queue_implementation {
    static class Queue{
        int arr[];
        int rear;
        int size;
        Queue(int n){
            arr=new int[n];
            size=n;
            rear=-1;
        }
        //
        public boolean isEmpty(){
            return rear==-1;
        }
        //enque
        public void add(int data){
            if(rear==arr.length-1){//queue full condition
                System.out.println("queue is full");
                return;
            }
            rear++;
            arr[rear]=data;
        }
        //deque
        public int remove(){
            if(isEmpty()){
                System.out.println("Queue is empty");
                return -1;
            }
            int front=arr[0];
            for(int i=0;i<rear;i++){
                arr[i]=arr[i+1];
            }
            rear=rear-1;
            return front;

        }
        //peek
        public int peek(){
            if(isEmpty()){
                System.out.println("Queue is empty");
                return -1;
            }
            return arr[0];
        }
        public  void print(){
            for(int i=0;i<=rear;i++){
                System.out.print(arr[i]+" ");
            }
            System.out.println();
        }
    }
    //my method
    
    //circular queue
    static class circular_queue{
        int arr[];
        int size;
        int front;
        int rear;
        circular_queue(int n){
            arr=new int [n];
            size=n;
            front=rear=-1;

        }
        boolean isEmpty(){
            return front==-1 && rear==-1;
        }
        boolean isFull(){
            return  (rear+1)%size==front;
        }
        void add(int data){
            if(isFull()){
                System.out.println("Circular Queue is full");
                return;
            }
            if(front==-1){
                front=0;
            }
            rear=(rear+1)%size;
            arr[rear]=data;
           System.out.println("Value enter successfully");


        }
        public int remove(){
            if(isEmpty()){
                System.out.println("Circular Queue is empty");
                return -1;

            }
            int data=arr[front];
            if(front==rear){
                rear=front=-1;
            }
            else{
                front=(front+1)%size;
            }
            return data;
        }
        int peek(){
            if(isEmpty()){
                System.out.println("Cicular Queue is empty");
                return -1;
            }
            return arr[front];
        }
        public  void print(){
            for(int i=front;i<=rear;i++){
                System.out.print(arr[i]+" ");
            }
            System.out.println();
        }




    }
    //queue Implementation by linked list
   static  class queue_by_linklist{
        class Node{
            int data;
            Node next;
            Node(int data){
                this.data=data;
                next=null;
            }
        }
            Node head=null;
            Node tail=null;
            public boolean isEmpty(){
                return  head==null && tail==null;
            }
            //enque
            public void add(int data){
                Node newNode=new Node(data);
                if(head==null){
                    head=tail=newNode;
                    return;
                }
                tail.next=newNode;
                tail=newNode;
            }
            //deque
            public int  remove(){
                if(isEmpty()){
                    System.out.println("queue is empty");
                    return -1;

                }

                int front=head.data;
                if(head==tail){
                    head=tail=null;
                    
                }
                head=head.next;
                return front;
            }
            // peek
            public int peek(){
                if(isEmpty()){
                    System.out.println("Queue is empty");
                    return -1;
                }
                return head.data;

            }
            //print()
            public void print_linklist(){
                if(head==null){
                    System.out.println("linklist is empty");
                }else{
                    Node temp=head;
                    while(temp!=null){
                        System.out.print(temp.data+" ");
                        temp=temp.next;
                    }
                    System.out.println();
                }
            }

        
        

    }
    

    public static void main(String[] args) {
      {
        circular_queue q=new circular_queue(3);
        q.add(1);
        q.add(2);
        q.add(3);
       System.out.println(q.peek());
        q.print();
        q.remove();
        q.add(1);
        q.print();
        System.out.println(q.peek());

        
        
        
        
        


            
        }
        
    }

    
}
