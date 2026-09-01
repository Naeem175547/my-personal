import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.*;
// import java.util.Iterator;

public class arraylist {
    public static void main(String[] args) {
        // ArrayList<Integer> al = new ArrayList<>();
        // al.add(10);
        // al.add(20);
        // al.add(100);
        // System.err.println(al);
        // al.set(3, 100);
        // System.out.println(al);

        ArrayList<Integer> al = new ArrayList<>();
        List<Integer> si = Arrays.asList(1, 20, 3, 4);

        al.add(10);
        al.add(20);
        al.add((20));
        System.out.println(al);
        al.add(2, 100);

        System.out.println(al);
        System.out.println(al.remove(Integer.valueOf(10)));
        System.out.println(al);
        // al.addAll(si);
        System.out.println(al);
        // al.addAll(2, si);
        System.out.println(al);
        // al.remove(10);
        System.out.println(al);
        // System.out.println(al.removeAll(si));
        System.out.println(al);

        al.retainAll(si);
        System.out.println(al);
        // al.clear();
        System.out.println(al.size());
        al.set(1, 100);
        // al.set(4, 200);
        System.out.println(al.get(1));
        System.out.println(al.contains(100));

        System.out.println(al);

        Iterator<Integer> itr = al.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next() + "a");
        }
        System.out.println("program is ended");

        for (int i : si) {
            System.out.println(i);
        }
        System.out.println("for each loop ");
        al.forEach(System.out::println);
        al.forEach(x -> System.out.println(x));

        System.out.println(al.toArray()[0]);

    }

}
