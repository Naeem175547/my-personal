public class StackUsingArray{
    
    public static void main(String[] args) {
        Stack s=new Stack(5);
        // s.peek();
        s.push(10);
        s.push(20);
        s.push(20);
        s.push(30);
        s.print();
        s.pushAtBotton(40);
        s.pushAtBotton(50);

        // System.out.println(s.pop());
        s.print();

        
    }
}

class Stack{
    int []arr;
    int top=-1;
    int size;
    public Stack(int size){
        this.size=size;
        arr=new int[size];
    }
    void push(int data){
        if(top==size-1){
            System.out.println("overflow");
            return;


        }
        top+=1;
        arr[top]=data;
    }
    void pushAtBotton(int data){
        if(top==size-1){
            System.out.println("overflow");
            return;
        }
        if(top==-1){
            top++;
            arr[top]=data;
            return;
        }
        int val=pop();
        pushAtBotton(data);
        top++;
        arr[top]=val;
        


    }
    int pop(){
        if(top==-1){
            System.out.println("undeflow");
            return -1;
        }
        int data=arr[top];
        top--;
        return data;
    }
    int peek(){
        if(top==-1){
            System.out.println("stack is empty");
            return -1;
        }
        return arr[top];
    }
    boolean isFull(){
        if(top==size-1){
            return true;
        }
        else{
            return false;
        }
    }
    boolean isEmpty(){
        return top==-1;
    }

    void print(){
        int temp=top;
        while(temp>=0){
            System.out.print(arr[temp]+" ");
            temp--;

        }
        System.out.println();


    }



}