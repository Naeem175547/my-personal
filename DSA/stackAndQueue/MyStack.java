
public class MyStack{
    int arr[];
    int i=-1;
    int N;
     MyStack(int n){
        this.arr=new int[n];
        this.N=n;
    }

    void push(int data){
        if(i==N-1){
            System.out.println("Overflow...");
            return;

        }
        i++;
        arr[i]=data;
    }

    int pop(){
        if(i==-1){
            System.out.println("underflow....");
            return Integer.MIN_VALUE;
        }
        int data=arr[i];
        i--;
        return data;

    }

    int peek(){
        if(i==-1){
            System.out.println("stack is empty...");
            return Integer.MIN_VALUE;
        }
        return arr[i];
    }
    boolean isEmpty(){
        return i==-1;
    }

    boolean isFull(){
        return i==N-1;
    }
    void print(){
        for(int temp=i;temp>=0;temp--){
            System.out.println(arr[temp]);
        }
    }

    public static void main(String[] args) {
        // Stack s=new Stack(10);
        // s.push(20);
        // s.push(30);
        // s.push((10));
        // s.print();


        

        
    }
}


