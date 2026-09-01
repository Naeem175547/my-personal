import java.util.Arrays;
import java.util.function.Consumer;
import java.util.*;

public class question {
    public static void main(String[] args) {
        List<String> l = Arrays.asList("imran", "shayan", "naeem");
        System.out.println(l);
        MyFuction mf = (Message) -> {
            System.out.println("Message " + Message);
        };
        mf.perform_action(l);

        // question
        A a = (x, y) -> x + y;
        int val = a.add(10, 20);
        System.out.println(val);

        // question
        checkStr cs = (str) -> {
            if (str.isEmpty()) {
                System.out.println("given str is empy");
            } else {
                System.out.println("not empty");
            }

        };
        cs.check(";dk");

    }

    @FunctionalInterface
    interface MyFuction {
        void perform_action(List<String> Message);
    }

    interface checkStr {
        void check(String str);
    }

@FunctionalInterface
interface A {
    int add(int a, int b);// we can return value also
}
