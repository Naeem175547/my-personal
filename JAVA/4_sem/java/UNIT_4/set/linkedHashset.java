import java.util.*;

public class linkedHashset {
    public static void main(String[] args) {
        LinkedHashSet<Integer> lhs = new LinkedHashSet<>();
        lhs.add(10);
        lhs.add(20);
        lhs.add(1000);
        System.out.println(lhs);
        System.out.println(lhs.size());
        System.out.println(lhs.remove(20));
        System.out.println(lhs.size());
    }

}
