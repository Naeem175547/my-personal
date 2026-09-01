
public class deque {
    private int[] arr;
    int front=-1;
    int rear=-1;
    int size;
    public deque(int size){
        arr=new int [size];
        this.size=size;
    }
    public void enqueFirst(int data){
        if((front==0 && rear==size-1  )|| (front==rear+1)){//rear+1==front
            System.out.println("queue is full");
            return;

        }
        else if(front==-1){
            front=rear=0;
            arr[front]=data;


        }
        else if(front==0){
            front=size-1;
            arr[front]=data;

        }
        else{
            front--;
            arr[front]=data;
        }

    }

    public void enqueLast(int data){
        if((front==0 && rear==size-1  )|| (front==rear+1)){//rear+1==front
            System.out.println("queue is full");
            return;

        }
        else if(rear==-1){
            rear=front=0;
            arr[rear]=data;


        }
        else if(rear==size-1){
            rear=0;
            arr[rear]=data;

        }
        else{
            rear++;
            arr[rear]=data;
        }

    }

    public void dequeueFirst(){
        if(front==-1 && rear==-1){
            System.out.println("");
            return;
        }
        else if(front==rear){
            System.out.println(arr[front]);
            front=rear=-1;



        }
        else if(front==size-1){
            System.out.println(arr[front]);
            front=0;
        }
        else{
            System.out.println(arr[front]);
            front++;
            
        }
    }

    public void dequeueLast(){
        if(front==-1 && rear==-1){
            System.out.println("");
            return;
        }
        else if(front==rear){
            System.out.println(arr[rear]);
            front=rear=-1;



        }
        else if(rear==0){
            System.out.println(arr[rear]);
            rear=size-1;
        }
        else{
            System.out.println(arr[rear]);
            rear--;
            
        }  
    


    
}
void display(){
    int i=front;
    while(i!=rear){
        System.out.println(arr[i]);
        i=(i+1)%size;
    }
    System.out.println(arr[i]);
}

public static void main(String[] args) {
    deque d=new deque(4);
    d.enqueFirst(10);
    d.enqueFirst(20);
    d.display();
    
}
}
