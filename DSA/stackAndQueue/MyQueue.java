import java.util.Stack;

public class MyQueue<T> {

    T arr[];
    int n;
    int front;
    int rear;

    MyQueue(int n) {
        this.n = n;

        arr = (T[]) new Object[n];

        front = -1;
        rear = -1;
    }

    void enqueue(T data) {

        if (isFull()) {
            System.out.println("Queue is full..");
            return;
        }

        // first element
        if (front == -1) {
            front = 0;
        }

        rear = (rear + 1) % n;
        arr[rear] = data;
    }

    T dequeue() {

        if (isEmpty()) {
            System.out.println("Queue is empty..");
            return null;
        }

        T data = arr[front];

        // single element
        if (front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % n;
        }

        return data;
    }

    boolean isEmpty() {
        return front == -1;
    }

    boolean isFull() {
        return (rear + 1) % n == front;
    }

    public static void main(String[] args) {

        // MyQueue<Integer> q = new MyQueue<>(5);
        QueueUsingStack q=new QueueUsingStack();



        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);

        System.out.println(q.dequeue());
        System.out.println(q.dequeue());

        q.enqueue(40);
        q.enqueue(50);
        q.enqueue(60);

        System.out.println(q.dequeue());

    }
}

class QueueUsingStack{
    Stack<Integer> s1=new Stack<>();
    Stack<Integer> s2=new Stack<>();
    void enqueue(int data){
        while(!s1.isEmpty()){
            s2.push(s1.pop());
        }
        s1.push(data);
        while(!s2.isEmpty()){
            s1.push(s2.pop());
        }


    }
    int dequeue(){
        if(s1.isEmpty()){
            System.out.println("queue is empty..");
            return-1;            

        }

        return s1.pop();



    }
}