import java.lang.reflect.Array;
import java.util.*;
import java.util.function.Consumer;

public class lambda_expression {
    public static void main(String[] args) {
        List<Integer> l = Arrays.asList(12, 23, 10, 28, 10);
        System.out.println(l);
        Collections.sort(l, (Integer a, Integer b) -> b.compareTo(a));// not premitive type
        System.out.println(l);
        /*
         * Consumer<Integer> ff = (item) -> System.out.println(item);//consumer
         * intefaces
         * 
         * l.forEach(ff);
         */
        l.forEach((item) -> System.out.println(item));

    }

}
