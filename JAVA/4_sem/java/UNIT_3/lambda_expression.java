import java.lang.reflect.Array;
import java.util.*;
import java.util.function.Consumer;

public class lambda_expression {
    public static void main(String[] args) {
        // List<Integer> l = Arrays.asList(12, 23, 10, 28, 10);
        // System.out.println(l);
        // Collections.sort(l, (Integer a, Integer b) -> b.compareTo(a));// not
        // premitive type
        // System.out.println(l);
        // /*
        // * Consumer<Integer> ff = (item) -> System.out.println(item);
        // *
        // * l.forEach(ff);
        // */
        // l.forEach((item) -> System.out.println(item));

        A a = (x, y) -> x + y;
        System.out.println(a.add(10, 20));

        Runnable c = () -> System.out.println("imran");
        c.run();e258o

    }

}

interface A {
    int add(int a, int b);
}
