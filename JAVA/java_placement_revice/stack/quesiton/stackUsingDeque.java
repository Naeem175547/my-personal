import java.util.Deque;
import  java.util.LinkedList;

public class stackUsingDeque {
     Deque<Integer> d=new LinkedList<>();
    void push(int data){
        d.addLast(data);
        
    }
    int pop(){
        if(d.isEmpty()){
            return -1;
        }
        return d.removeLast();
    }
    int peek(){
        return d.getFirst();
    }
    
    public static void main(String[] args) {
        stackUsingDeque s=new stackUsingDeque();
        s.push(10);
        s.push(20);
        s.push(30);
        System.out.println(s.d);
        s.pop();
        System.out.println(s.d);
        
    }
    
}

class QueueUsingDeque{
    Deque<Integer> d=new LinkedList<>();
    void add(int data){
        
        d.addLast(data);
    }
    int remove(){
        if(d.isEmpty()){
            return -1;
        }
        return d.removeFirst();
    }
    int peek(){
        if(d.isEmpty()){
            return -1;
        }
        return d.getFirst();

    }

}
