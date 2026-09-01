import  java.util.Stack;
public class StackUsingFramework {
   static  void pushAtBotton(Stack<Integer> s,int data){
        if(s.isEmpty()){
            s.push(data);
            return;
        }
        int val=s.pop();
        pushAtBotton(s, data);
        s.push(val);

    }

    static void stringReverse(Stack<Character> s,String str){
        for(int i=0;i<str.length();i++){
            s.push(str.charAt(i));
        }
        StringBuilder sb=new StringBuilder();
        while(!s.isEmpty()){
            sb.append(s.pop());


        }
        System.out.println(sb);


    }

   static  void reverseStack(Stack<Integer> s){
        if(s.isEmpty()){
            return;
        }
        int val=s.pop();
        reverseStack(s);
        pushAtBotton(s, val);


    }
    public static void main(String[] args) {
        Stack<Integer> s=new Stack<>();
        s.push(10);
        s.push(20);
        s.push(30);
        System.out.println(s);
        s.push(1);
        pushAtBotton(s,40);
        pushAtBotton(s,50);
        System.out.println(s);


        // Stack<Character> s=new Stack<>();
        // stringReverse(s, "imrankhan");

        reverseStack(s);
    
        System.out.println(s);

    }
    
}
