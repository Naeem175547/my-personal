public class binomical_cofficient {
    static int fact(int x) {
        int val = 1;
        for (int i = x; i >= 1; i--) {
            val = val * i;

        }
        return val;
    }

    static void binomical_c(int n, int r) {
        int result = fact(n) / (fact(r) * fact(n - r));
        System.out.println(result);
    }

    public static void main(String[] args) {
        binomical_c(5, 3);

    }
}