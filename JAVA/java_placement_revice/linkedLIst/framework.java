import java.util.LinkedList;

public class framework {
    static void print(LinkedList<Integer> l) {
        System.out.println("printing staring ");
        while (l != null) {
            System.out.println(l.getLast());

        }

    }

    public static void main(String[] args) {
        LinkedList<Integer> ls = new LinkedList<>();
        ls.addLast(10);
        ls.addLast(100);
        ls.addFirst(20);
        System.out.println(ls);

    }

}
