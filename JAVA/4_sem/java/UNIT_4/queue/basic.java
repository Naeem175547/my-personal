import java.util.*;

public class basic {
    public static void main(String[] args) {
        // System.out.println("imraqn");

        // Queue<String> q = new LinkedList<>();
        // Queue<String> q = new PriorityQueue<>();/
        Deque<String> q = new ArrayDeque<>();
        q.add("imran khna");
        q.add("shayan");
        q.add("aamshad");
        q.offer("shayan a");

        System.out.println(q);
        q.addFirst("samshad");
        System.out.println(q);
        System.out.println(q.remove());
        System.out.println(q);
        System.out.println(q.poll());
        System.out.println(q);
        // System.out.println(q.poll());
        System.out.println(q.poll());
        // System.out.println(q.remove());
        System.out.println(q.peek());
        System.out.println(q);

    }

}
