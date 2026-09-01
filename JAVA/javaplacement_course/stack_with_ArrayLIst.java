import java.util.ArrayList;
import java.util.Collections;

import javax.swing.plaf.synth.SynthIcon;
public class stack_with_ArrayLIst{
      static class Stack{
        ArrayList<Integer> list=new ArrayList<>();
        public void push(int data){
            list.add(data);
        }
        public int pop(){
            int top= list.get(list.size()-1);
            list.remove(list.size()-1);
            return top;
            
        }
        public void peek(){
            int top=list.get(list.size()-1);
            System.out.println(top);
            return;


        }
        public boolean isEmpty(){
            return list.size()==0;
        }

    }
    public static void main(String[] args) {
         Stack s=new Stack();
         s.push(1);
         s.push(2);
         s.push(3);
        // System.out.println(s.list.size());
        // System.out.println(s.pop());
        // System.out.println(s.list.size());
         while(!s.isEmpty()){
            System.out.println(s.list.get(s.list.size()-1));
            s.list.remove(s.list.size()-1);

         }
         
        
        
    }
    
}
