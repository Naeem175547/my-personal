
import  java.util.ArrayList;
public class stackUsingArrayList<T> {
    ArrayList<T> arr=new ArrayList<>();
    void push(T data){
        arr.add(data);
      
    }

    void pushAtBotton(T data){
        if(arr.size()==0){
            arr.add(data);
            return;
        
        }
        T val=pop();
        pushAtBotton(data);
        arr.add(val);
    }

    <T> T pop(){
        if(arr.size()==0){
            System.out.println("underflow: stack  is empty");
            return -1;
        }
        T data=arr.get(arr.size()-1);
        arr.remove(arr.size()-1);
        return data;

    }

    boolean isEmpty(){
       return arr.size()==0;
    }

     T peek(){
        if(isEmpty()){
            System.out.println("stack is empty");
            return -1;
        }
        return arr.get(arr.size()-1);
    }

    void print(){
        System.out.println(arr);
    }

    public static void main(String[] args) {
        stackUsingArrayList<Integer> s=new stackUsingArrayList();
        s.push(10);
        s.push(20);
        s.print();
        s.pop();
        s.push(10);
        s.push(20);
        s.push(30);
        s.print();
        s.pushAtBotton(50);
        // s.pop();
        System.out.println(s.arr.size());
        s.print();
        
        
    }
    
}

