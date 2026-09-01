import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.*;

public class stream_api {
    public static void main(String[] args) {
        // System.out.println("imran khan");
        // sum of all even squere number

        // List<Integer> l = Arrays.asList(1, 2, 4, 2, 1, 3, 1, 31, 31, 3, 1);

        // Stream s = l.stream().filter((x) -> x % 2 == 0).map(n->n*2);
        // s.forEach((x) -> System.out.print(x + " "));

        // int sum = l.stream().filter((n) -> n*2 == 0).mapToInt(n -> n * 2).sum();
        // System.out.println(sum);

        // processedNumbers
        // List<Integer> n = Arrays.asList(1, 23, 4, 2, 32, 4, 12, 2, 43);
        // List<Integer> pn = n.stream().filter(x -> x % 2 != 0).map(x -> x *
        // 2).collect(Collectors.toList());
        // System.out.println(pn);
        // System.out.println(n.stream().count());

        // calculate the average

        List<Integer> n = Arrays.asList(1, 23, 4, 2, 32, 4, 12, 2, 43);
        double average = n.stream().mapToInt(i -> i).average().orElse(0);
        double sum = n.stream().reduce(0, (a, b) -> a + b);// same as below
        // int sum = n.stream().map(i -> i).reduce(0, (a, b) -> a + b);
        System.out.println(sum / n.stream().count());
        System.out.println(average);

        //

        // // filte string starts with a

        // List<String> w = Arrays.asList("Apple", "Bana", "Carrot");
        // List<String> lf = w.stream().filter(s ->
        // s.startsWith("A")).collect(Collectors.toList());
        // System.out.println(lf);

        // List<String> w = Arrays.asList("Apple", "Bana", "Carrot");
        // List<String> lf = w.stream().map(s ->
        // s.toUpperCase()).collect(Collectors.toList());
        // System.out.println(lf);

        // find the maximum number using reduce()

        // List<Integer> l = Arrays.asList(1, 2, 4, 2, 1, 3, 1, 31, 31, 3, 1);
        // int a = l.stream().reduce(Integer.MIN_VALUE,(x, b) -> x > b ? x : b);
        // System.out.println(a);

        // or

        /*
         * List<Integer> l = Arrays.asList(1, 2, 4, 2, 1, 3, 1, 31, 31, 3, 1);
         * 
         * // Using Optional to handle empty lists
         * Optional<Integer> max = l.stream()
         * .reduce((a, b) -> a > b ? a : b);
         * 
         * 
         * 
         * 
         * 
         * // Print the maximum number if present
         * 
         * max.ifPresent(System.out::println);//same
         * max.ifPresent(n -> System.out.println(n));//same
         * // In this version, the reduce() method is used to find the maximum number.
         * // Since the list may be empty,
         * // the result is wrapped in an Optional<Integer>. The ifPresent() method is
         * then
         * // used to print the maximum value if it is present.
         * 
         */

        // find the logest string using stream api

        List<String> ls = Arrays.asList("imrjjn", "khan", "shayan");// this will find max
        // Optional<String> Ls = ls.stream().max((a, b) -> a.length() - b.length());
        // Optional<String> Ls = ls.stream().min((a, b) -> a.length() -
        // b.length());//this will find min
        // Optional<String> Ls = ls.stream().max((a, b) -> b.length()-a.length());//this
        // will find min
        // Optional<String> Ls = ls.stream().min((a, b) -> b.length() - a.length());//
        // this will find max

        /*
         * ! Ls.ifPresent(str -> System.out.println(str));
         */

    }

}
