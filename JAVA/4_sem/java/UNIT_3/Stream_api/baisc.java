import java.util.*;
import java.util.stream.Stream;

public class baisc {
    public static void main(String[] args) {
        Stream<String> s = Stream.empty();// empty stream of string
        // List<Integer> a = Arrays.asList(1, 2, 4, 2, 3, 3);
        List<Integer> a = Arrays.asList(13, 1, 12, 12, 123, 1);
        Stream<Integer> si = a.stream().sorted();
        // Stream<Integer> si = a.stream().distinct();
        // Stream<Integer> si = a.stream().parallel();
        // Stream<Integer> si = a.stream().sequential();
        si.forEach((p) -> System.out.print(p + " "));

        // for (int i : a) {
        // System.out.print(i);
        // }
        // a.forEach((x) -> System.out.println(x));

    }

}
