import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.*;

public class stream_and_lebda_ques {
    public static void main(String[] args) {
        List<String> l = Arrays.asList("imran", "shayan", "faeem", "banana", "qaziwala");
        List<Integer> li = Arrays.asList(4, 10, 4, 19);
        // // Questtion: convert string to uppercase and lowercase

        // // using only lamda fun
        // A x = (list) -> {
        // for (int i = 0; i < list.size(); i++) {
        // list.set(i, list.get(i).toUpperCase());

        // }
        // System.out.println(list);
        // for (int i = 0; i < list.size(); i++) {
        // list.set(i, list.get(i).toLowerCase());

        // }
        // System.out.println(list);

        // };
        // x.change(l);

        // // // using stream

        // List<String> lu = l.stream().map((s) ->
        // s.toLowerCase()).collect(Collectors.toList());
        // System.out.println(lu);
        // List<String> ul = l.stream().map((s) ->
        // s.toUpperCase()).collect(Collectors.toList());
        // System.out.println(ul);

        // // sort in alphabeteric order

        // Stream<String> ss = l.stream().sorted();
        // ss.forEach((s) -> System.out.println(s));

        // // average
        // double avg = li.stream().mapToInt(x -> x).average().orElse(0);
        // System.out.println(avg);

        // // sum

        // double sum = li.stream().reduce(0, (a, b) -> a + b);
        // System.out.println(sum);

        // // remove dublicate
        // List<Integer> x = ltinct().collecti.stream().dis(Collectors.toList());

        // System.out.println(x);

        // // calculate factorial
        // B x = (a) -> {
        // int temp = 1;
        // for (int i = 1; i <= a; i++) {
        // temp *= i;
        // }
        // return temp;

        // };
        // System.out.println(x.fact(5));

        // // mind max and min

        // int max = li.stream().reduce(0, (a, b) -> a > b ? a : b);
        // System.out.println(max);
        // int min = li.stream().reduce(Integer.MAX_VALUE, (a, b) -> a < b ? a : b);
        // System.out.println(min);

        // // multiply and sum
        // int mul = li.stream().reduce(1, (a, b) -> a * b);
        // int sum = li.stream().reduce(0, (a, b) -> a + b);
        // System.out.println(mul);
        // System.out.println(sum);

        // findsumof square of odd number and even number
        int sumOfoddn = li.stream().filter((a) -> a % 2 != 0).mapToInt(a -> a * a).sum();
        System.out.println(sumOfoddn);

        // contains specific word

        // System.out.println("imrna".contains("a"));//do using make own functional
        // interface

    }

}

interface A {
    void change(List<String> l);

}

interface B {
    int fact(int x);
}
