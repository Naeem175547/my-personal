import java.util.Collections;
import java.util.Stack;
public class stack_using_framwork {
    //push value at the bottom
    public static void push_at_bottom(Stack<Integer> s,int data){
        if(s.isEmpty()){
            s.push(data);
            return;
        }
        int val=s.pop();
        push_at_bottom(s, data);
        s.push(val);

    }
    //Reverse a string 
    public static String reverse_string_using_stack(String str){
        Stack<Character> s=new Stack<>();
        for(int i=0;i<str.length();i++){
            s.push(str.charAt(i));
        }
        StringBuilder ns=new StringBuilder();
        while(!s.isEmpty()){
            ns.append(s.pop());
        }
        return ns.toString();


    }
    //reverse a stack 
    public static void reverse_stack(Stack<Integer> s){
        if(s.isEmpty()){
            return;
        }
        int top=s.pop();
        reverse_stack(s);
        //we will call push at botton function
        push_at_bottom(s, top);

    }
    static void print_Stack(Stack<Integer> s){
        Stack<Integer> temp=s;
        while(!temp.isEmpty()){
            int val=temp.pop();
            System.out.print(val+" ");

        }
        System.out.println();
    }
    
    public static void main(String[] args) {
       Stack<Integer> s=new Stack<>();
        s.push(1);
        s.push(2);
        s.push(3);
       print_Stack(s);
       //reverse_stack(s);
       Stack<Integer> sa=new Stack<>();
       sa=s;
       print_Stack(sa);


        

        
       
        
    }
    
}
