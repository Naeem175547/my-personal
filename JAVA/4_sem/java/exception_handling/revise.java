import java.io.IOException;

class a extends ArithmeticException {
    a(String x) {
        super(x);
        System.out.println((x));

    }

    public String toString() {

        return "m code is running";
    }

    public String getMessage() {
        return "this is my Arithemaic excepion";
    }

}

public class revise {
    public static void main(String[] args) throws IOException {
        float x = 10.3f;
        int y = 20;
        // if (x == y) {

        // }
        if (x != y) {
            // throw new a("x is not eqaul to y");
            throw new IOException("compile time excepion");

        }

        try {
            float x1 = 10.3f;
            int y1 = 20;
            // if (x == y) {

            // }
            if (x != y) {
                // throw new a("x is not eqaul to y");
                throw new IOException("compile time excepion");

            }
            System.err.println(("try last code" + " "));

        } catch (Exception e) {
            System.err.println(e.getMessage());
            System.err.println(("running"));
        } finally {
            System.out.println("program end..");
            // }

            // if (5 > 0) {
            // throw new ArithmeticException("chal na ....");
            // }
            System.out.println("will not running");
        }

    }
}
