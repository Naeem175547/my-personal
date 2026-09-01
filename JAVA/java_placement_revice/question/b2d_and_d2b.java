public class b2d_and_d2b {
    public static int b2d(int num) {
        int a = 0;
        int dn = 0;
        while (num != 0) {
            int x = num % 10;
            dn = dn + x * (int) Math.pow(2, a);
            a++;
            num = num / 10;

        }
        return dn;

    }

    public static int d2b(int num) {
        int pow = 0;
        int bn = 0;
        while (num != 0) {
            int rem = num % 2;
            bn = bn + (rem * (int) (Math.pow(10, pow)));
            pow++;
            num = num / 2;

        }
        return bn;

    }

    public static void main(String[] args) {
        System.out.println(d2b(14));
        System.out.println(b2d((1110)));

    }

}
