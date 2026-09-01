import java.util.*;
public class queue_Question {
    public static void print_not_repeating_letter(String str){
        Queue<Character> q=new LinkedList<>();
        int freq[]=new int [26];
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            q.add(ch);
            freq[ch-'a']++;//index ko target karega
            while(!q.isEmpty() && freq[q.peek()-'a']>1){
                q.remove();
            }
            if(q.isEmpty()){
                System.out.print(-1+" ");
            }
            else{
                System.out.print(q.peek()+ " ");
            }
           // System.out.println();


        }
        

    }
    //interleave a queue for even number
    static void interleave_queue(Queue<Integer> q){
        Queue<Integer> firsthalf=new LinkedList<>();
        int size=q.size();
        for(int i=1;(i<=size/2);i++){
            firsthalf.add(q.remove());
        }
        while(!firsthalf.isEmpty()){
            q.add(firsthalf.remove());
            q.add(q.remove());
        }

            
    }
    //Queue revesal
    public static void queue_reversal(Queue<Integer> q){
        StackUsingArray<Integer> s=new StackUsingArray();
        while(!q.isEmpty()){
            s.push(q.remove());
        }
        while(!s.isEmpty()){
            q.add(s.pop());
        }
        
    }
    //queue reversal another method
    public static void queue_reversal_another(Queue<Integer> q){
        if(q.isEmpty()){
            return;
        }
        int data=q.remove();
        queue_reversal(q);
        q.add(data);

    }

    public static void main(String[] args) {
       // System.out.println('c'-'a');
      // print_not_repeating_letter("aabccxb");
      Queue<Integer> q=new ArrayDeque<>();
      q.add(1);
      q.add(2);
      q.add(3);
      q.add(4);
      queue_reversal_another(q);
      
      while(!q.isEmpty()){
        System.out.print(q.remove()+" ");
      }


        
    }
    
}
