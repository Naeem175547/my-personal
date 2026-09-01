import java.util.*;

class Stack_ {
    public static void main(String[] args) {
        // Stack s1 = new Stack();// gerneric stack
        // Stack<Integer> s2 = new Stack<Integer>();
        // // s1.push(10);
        // // s1.push("imra kahan");
        // // System.out.println(s1.size());
        // // while (!s1.isEmpty()) {
        // // System.out.println(s1.pop());
        // // }
        // s2.push(10);
        // s2.push(null);

        // Stack s1 = new Stack<>();
        Stack<Integer> s1=new Stack<>()
        s1.push(10);
        s1.push(20);
        s1.push(30);
        System.out.println(s1);
        System.out.println(s1.pop());
        System.out.println(s1);
        System.out.println(s1.isEmpty());
        System.out.println(s1.search(10));
        // s1.push("imran khan");
        System.out.println(s1);

    }
}