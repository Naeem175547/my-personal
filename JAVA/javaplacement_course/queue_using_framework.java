import java.net.SocketTimeoutException;
import java.util.*;

import javax.xml.namespace.QName;
public class queue_using_framework {
   static public class Queue_using_2stack{
        StackUsingArray<Integer> s1=new StackUsingArray<>();
        StackUsingArray<Integer> s2=new StackUsingArray<>();
        //isEmpty
        public boolean isEmpty(){
            return s1.isEmpty();

        }
        //
        //enque
        public void add(int data){
            while(!s1.isEmpty()){
                s2.push(s1.pop());

            }
            s1.push(data);
            while(!s2.isEmpty()){
                s1.push(s2.pop());
            }
        }
        private  void add_at_bottom(int data){
            if(s1.isEmpty()){
                s1.push(data);
                return;


            }
            int val=s1.pop();
            add_at_bottom(data);
            s1.push(val);

        }
        //another enque function
        public void add_second(int data){
            add_at_bottom(data);
            
        }
        
            //dequeue
            public int remove(){
                if(isEmpty()){
                    System.out.println("Queue  is empty");
                    return -1;
                }
                return s1.pop();
                
            }
            //peek
            public int peek(){
                if(isEmpty()){
                    System.out.println("Queue is empty");
                    return -1;

                }
                return s1.peek();
            }

        
    }
    // using two stack with pop(n)
    static class Queue_using_2stack_2{
        StackUsingArray<Integer> s1=new StackUsingArray<>();
        StackUsingArray<Integer> s2=new StackUsingArray<>();
        //isEmpty
        public boolean isEmpty(){
            return s1.isEmpty();
        }
        //enque
        public void add(int data){
            s1.push(data);
        }
        //deque
        public int remove(){
            if(isEmpty()){
                System.out.println("queue is empty");
                return -1;
            }
            int val=-1;
            while(!s1.isEmpty()){
                 val=s1.pop();
                if(s1.isEmpty()){
                    break;
                }
                s2.push(val);

            }
            while(!s2.isEmpty()){
                s1.push(s2.pop());
            }
            return val;
             
        }
        //peek
        public int peek(){
            if(isEmpty()){
                System.out.println("queue is empty");
                return -1;
            }
            int val=-1;
            while(!s1.isEmpty()){
                 val=s1.pop();
                /*if(s1.isEmpty()){
                    break; //we don't need to do this because we don't need to remove any element
                }*/
                s2.push(val);

            }
            while(!s2.isEmpty()){
                s1.push(s2.pop());
            }
            return val;

        }
        



    }
    
    
    
    public static void main(String[] args) {
        Queue_using_2stack_2 q=new Queue_using_2stack_2();
        
        q.add(5);
        System.out.println(q.remove());
        System.out.println(q.remove());
        q.add(100);
        
        q.add(6);
        q.remove();
        System.out.println(q.remove());
        

        

        

        
    }
    


    
}
