public class deque_implementation {
    static class deque_basic{
        int arr[];
        int rear;
        int size;
        int front;
        deque_basic(int n){
            arr=new int[n];
            size=n;
            rear=-1;
            front=-1;
        }
        //
        public boolean isEmpty(){
            return front>rear;
        }
        //enque
        public void addLast(int data){
            if(rear==arr.length-1){//queue full condition or fornt>rear
                System.out.println("queue is full from right side");
                return;
            }
            if(front==-1){
                front=front+1;

            }
            rear++;
            arr[rear]=data;
        }
        //addFirst
        public void addFirst(int data){
            if(front==-1 && rear==-1){
                front++;
                rear++;
                arr[front]=data;
                return;
                

            }
            if(front==0){
                System.out.println("queue is full from left side");
                return;

            }
            front=front-1;
            arr[front]=data;
        }
        //deque
        public int removeFirst(){
            if(isEmpty()){
                System.out.println("Queue is empty");
                return -1;
            }
            int data=arr[front];
            front=front+1;
            return data;

            

        }
        public int removeLast(){
            if(isEmpty()){
                System.out.println("Queue is empty");
                return -1;
            }
            int  data=arr[rear];
            rear=rear-1;
            return data;
            

            

        }
        //peek
        public int peek(){
            if(isEmpty()){
                System.out.println("Queue is empty");
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
static class deque{
        int arr[];
        int front;
        int rear;
        int n;
        deque(int n){
            arr=new int[n];
             front=rear=-1;
             this.n=n;

        }
        public  boolean isfull(){
            return (rear+1)%n==front; //(rear+1)==front || (front==0 && rear==n-1)
        }
        public boolean isEmpty(){
            return (rear==-1) && (front==-1);
        }
        public void addFirst(int data){
            if(isfull()){
                System.out.println("full deque");
                return;

            }
            if(front==-1){
                front=rear=0;
                arr[front]=data;
                return;
            }
            if(front==0){
                front=n-1;
                arr[front]=data;
                return;
                
            }
            front--;
            arr[front]=data;

    }
    public void addLast(int data){
       if(isfull()){
        System.out.println("full deque");
        return;

       }
        if(front==-1){
        front=rear=0;
        arr[front]=data;
        return;
       }
    /*if(rear==n-1){
        rear=0;
        arr[rear]=data;
        return;
        
    }*/
    //ya
       rear=(rear+1)%n;
        arr[rear]=data;
    
    }
    public int removeFisrt(){
       if(isEmpty()){
        System.out.println("deque is empty");
        return -1;
      }
      if(front==rear){//for single element
        int data=arr[front];
        front=rear=-1;
        return data;

    }
    int data=arr[front];
    front++;
    return data;


   }
   public int removeLast(){
    if(isEmpty()){
        System.out.println("deque is empty");
        return -1;
    }
    if(front==rear){//for single element
        int data=arr[front];
        front=rear=-1;
        return data;

    }
    int data=arr[rear];
    rear--;
    return data;


    }
    public int getFirst(){
        if(isEmpty()){
            System.out.println("empty");
            return -1;

        }
        return arr[front];
    }
    public int getLast(){
        if(isEmpty()){
            System.out.println("empty");
            return -1;

        }
        return arr[rear];
    }
    public void print(){
        if(isEmpty()){
            System.out.println("deque is empty");
            return;
        }
        int i=front;
        while(i!=rear){
            System.out.print(arr[i] +" ");
            i=(i+1)%n;

        }
        System.out.print(arr[i]);
    }



}
    public static void main(String[] args) {
      deque q=new deque(3);
      q.addFirst(1);;
      q.addLast(2);
      q.addLast(3);
      q.print();
     

       

    }
    
}
