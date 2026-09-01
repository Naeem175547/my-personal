import java.util.LinkedList;
public class ll_from_JC {
    public static void main(String[] args) {
        LinkedList<Integer> ll=new LinkedList<>();
        ll.addFirst(3);
        ll.addLast(4);
        ll.addLast(5);
        ll.add(30);
        System.out.println(ll.removeFirst());
        System.out.println(ll);
        
    }
    
}
