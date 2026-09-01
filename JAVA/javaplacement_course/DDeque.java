import java.util.*;

public class DDeque{
    public static void main(String[] args) {
        Deque<Integer> dq=new ArrayDeque<>();
        dq.addFirst(1);
        dq.addLast(3);
        dq.addFirst(2);;
        System.out.println(dq.removeLast());
        System.out.println(dq.getLast());
        Stack s=new Stack();
        System.out.println(s.peek());
        
    }
    static class Stack{
        Deque<Integer> d=new ArrayDeque<>();
        public void push(int data){
            d.addFirst(data);
        }
        public int pop(){
            if(d.isEmpty()){
                System.out.println("stack is empty");
                return -1;
            }
            return d.removeLast();
        }
        public int peek(){
            if(d.isEmpty()){
                System.out.println("stack is empty");
                return-100;
            }
            return d.getLast();

        }
    }
    
}
