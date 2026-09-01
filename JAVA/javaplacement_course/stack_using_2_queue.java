import java.util.*;
public class stack_using_2_queue {
    //using push(O(n))
    static class Stack{
        Queue<Integer> q1=new LinkedList<>();
        Queue<Integer> q2=new LinkedList<>();
        public boolean isEmpty(){
            return q1.isEmpty();
        }
        public void push(int data){
            while(!q1.isEmpty()){
                q2.add(q1.remove());
            }
            q1.add(data);
            while(!q2.isEmpty()){
                q1.add(q2.remove());
            }
        }
        public int pop(){
            if(isEmpty()){
                System.out.println("Queue is empty");
                return -1;
            }
            return q1.remove();
        }
        public int peek(){
            if(isEmpty()){
                System.out.println("Queue is empty");
                return -1;
            }
            return q1.peek();

        }

    }
    //using pop(O(n))
    static class Stack_2{
        Queue<Integer> q1=new LinkedList<>();
        Queue<Integer> q2=new LinkedList<>();
        public boolean isEmpty(){
            return q1.isEmpty() && q2.isEmpty();//  ham ise aise bhi kr sakte hai jaise push kiya pr ek loop extra lagega
        }
        public void push(int data){
            if(!q1.isEmpty()){
                q1.add(data);
            }
            else{
                q2.add(data);
            }

            
        }
        
        //isko hum aise bhi bana sakte jaise hamne stack se queue banana m use kiya hai or use is tarah bana sakte hai
        public int pop(){
            if(isEmpty()){
                System.out.println("Queue is empty");
                return -1;
            }
            int val=-1;
            if(!q1.isEmpty()){
                while(!q1.isEmpty()){
                     val=q1.remove();
                     if(q1.isEmpty()){
                        break;
                     }
                     q2.add(val);

                }
            }
            else{
                while(!q2.isEmpty()){
                    val=q2.remove();
                    if(q2.isEmpty()){
                       break;
                    }
                    q1.add(val);

               }

            }
            return val;
            
        }
        public int peek(){
            if(isEmpty()){
                System.out.println("Queue is empty");
                return -1;
            }
            int val=-1;
            if(!q1.isEmpty()){
                while(!q1.isEmpty()){
                     val=q1.remove();
                     
                     q2.add(val);

                }
            }
            else{
                while(!q2.isEmpty()){
                    val=q2.remove();
                    if(q2.isEmpty()){
                       break;
                    }
                    q1.add(val);

               }

            }
            //System.out.println("value return");
            return val;
            

        }

    }
    
    public static void main(String[] args) {
        Stack_2 a=new Stack_2();
        a.push(1);
        a.push(2);
        a.push(3);
        a.push(30);
        //a.pop();
        System.out.println(a.peek());
    }
    
}
