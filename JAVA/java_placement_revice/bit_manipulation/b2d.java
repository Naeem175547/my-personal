public class b2d {
    static int binary_to_decimal(int n) {
        int pow = 0;
        int decimal = 0;
        while (n != 0) {
            int last_digit = n % 10;
            decimal += last_digit * (int) Math.pow(2, pow);
            n = n / 10;
            pow++;

        }
        return decimal;
    }

    public static void main(String[] args) {
        // System.out.println(Math.pow(5, 2));
        System.out.println(binary_to_decimal(10001));

    }

}
