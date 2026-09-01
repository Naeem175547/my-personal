import java.util.Stack;

public class queue_implementation {
    
    public static void main(String[] args) {
        // QueueUsingArray q1=new QueueUsingArray(5);
        // cQueue q1=new cQueue(5);
        // q1.add(10);
        // q1.add(20);
        // q1.print();
        // q1.add(30);
        // q1.add(40);
        // q1.add(50);
        // q1.add(20);
        // q1.print();
        // q1.remove();
        // q1.print();
        // q1.remove();
        // q1.print();
        // q1.remove();
        // q1.print();
        // q1.remove();
        // q1.print();
        // q1.remove();
        // q1.print();

        // cQueue s=new cQueue(3);
        // s.add(10);
        // s.add(20);
        // s.add(30);
        // s.print();
        // s.add(40);
        // s.remove();
        // s.print();
        // s.add(2);
        // s.print();

        // llQueue lq=new llQueue();
        // lq.add(10);
        // lq.add(20);
        // lq.add(30);
        // lq.print();

        sQueue q=new sQueue();
        q.add1(1);
        q.add1(2);
        q.add1(3);
        q.print();
        System.out.println(q.remove());
        q.print();


        
        

        
    }
    
}

class QueueUsingArray{
    private int []arr;
    private int rear;
    private int front;
    private int size;

    public QueueUsingArray(int size) {
        this.arr=new int[size];
        this.rear=-1;
        this.front=-1;
        this.size=size;
    }
    public void add(int data){
        if(rear==size-1){
            System.out.println("queue is full");
            return;

        }
        if(front==-1){
            front=0;
        }
        rear+=1;
        arr[rear]=data;

    }
  public int remove(){
        if(isEmpty()){
            System.out.println("queuse is empty");
            return -1;

        }
        int data=arr[front];
        if(front==rear){
            front=rear=-1;
        }
        else{
            front++;
        }     


        return data;


    }
    public boolean isEmpty(){
        return  front==-1;
    }
    public int peek(){
        if(isEmpty()){
            System.out.println("queuse is empty");
            return -1;
        }
        return arr[front];
    }

    public void print(){
        if(isEmpty()){
            System.out.println("queue is empty");
            return;
        }
        for(int i=front;i<=rear;i++){
            System.out.print(arr[i]+" ");

        }
        System.out.println();
    }

    

}
//cricular queue
class cQueue {
    private int front;
    private int rear;
    private int arr[];
    private int size;

    public cQueue(int size) {
        this.front = -1;
        this.rear = -1;
        this.size = size;
        arr = new int[size];
    }

    // Check if the queue is empty
    boolean isEmpty() {
        return front == -1;
    }

    // Check if the queue is full
    boolean isFull() {
        return (rear + 1) % size == front;
    }

    // Enqueue operation
    public void add(int data) {
        if (isFull()) {
            System.out.println("queue is full");
            return;
        }
        rear = (rear + 1) % size;
        arr[rear] = data;
        if (front == -1) {
            front = 0;
        }
    }

   
    public int remove() {
        if (isEmpty()) {
            System.out.println("queue is empty");
            return -1;
        }
        int data = arr[front];
        if (rear == front) {  // The queue will be empty after this removal
            rear = front = -1;
        } else {
            front = (front + 1) % size;
        }
        return data;
    }

    // Print the queue
    public void print() {
        if (isEmpty()) {
            System.out.println("queue is empty");
            return;
        }
        int i = front;
        while (true) {
            System.out.print(arr[i] + " ");
            if (i == rear) break;
            i = (i + 1) % size;
        }
        System.out.println();
    }
}

//using linkedlist
class llQueue{
    class Node{
        int data;
        Node next;
        Node(int data){
            this.data=data;
            this.next=null;
        }

    }
    Node head=null;
    Node tail=null;
    Node temp;

    public void add(int data){
        Node nn=new Node(data);
        if(head==null){
            head=tail=nn;
            return;
        }
        tail.next=nn;
        tail=nn;

    }
    public int remove(){
        if(isEmpty()){
            System.out.println("queue is empty");
            return -1;
        }
        int data=head.data;
        head=head.next;
        if(head==null){
            head=tail=null;
        }
        return data;
    }
    public  int peek(){
        if(isEmpty()){
            return -1;
        }
        return head.data;
    }
    public boolean isEmpty(){
        return head==null;
    }
    public void print(){
        if(isEmpty()){
            System.out.println("queue is empty");
            return;
            
        }
        temp=head;
        while(temp!=null){
            System.out.print(temp.data+" ");
            temp=temp.next;

        }
        System.out.println();
    }


}


//queue using stack

class sQueue{
    Stack<Integer> s1=new Stack<>();
    Stack<Integer> s2=new Stack<>();
    boolean isEmpty(){
        return s1.size()==0;
    }
    public void add(int data){
        while(!s1.isEmpty()){
            s2.push(s1.pop());
        }
        s1.push(data);
        while(!s2.isEmpty()){
            s1.push(s2.pop());
        }
    }
    public void add1(int data){
        if(s1.isEmpty()){
            s1.push(data);
            return;
            
        }
        int v=s1.pop();
        add1(data);
        s1.push(v);
        
    }
    public int peek(){
        if(isEmpty()){
            return -1;
        }
        return s1.peek();
    }
    public int remove(){
        if(isEmpty()){
            return -1;
        }
        return  s1.pop();
    }
    void print(){
        if(isEmpty()){
            System.out.println("queue is empty");
            return;
        }
        System.out.println(s1);
    }
}