import java.util.*;

public class vector {
    public static void main(String[] args) {
        LinkedList<String> ls = new LinkedList<String>();
        ls.add("imran");
        ls.add("shayan");
        ls.add(2, "100");
        ls.add("kahn");
        System.out.println(ls);
        // for (int i = 0; i < ls.size(); i++) {
        // System.out.println((ls.get(i)));
        // }

        for (String item : ls) {
            System.out.print(item + " ");
        }
        System.out.println();
        System.out.println(ls.set(2, "RJP"));
        System.out.println(ls.remove(2));
        Iterator<String> itr = ls.iterator();

        while (itr.hasNext()) {
            System.out.print(itr.next() + " ");
        }

    }

}
