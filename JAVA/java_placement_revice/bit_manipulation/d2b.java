public class d2b {
    static int decimal_to_binary(int n) {
        int pow = 0;
        int binary = 0;
        while (n != 0) {
            int temp = n % 2;
            binary = binary + temp * (int) Math.pow(10, pow);
            n = n / 2;
            pow++;

        }
        return binary;

    }

    public static void main(String[] args) {
        System.out.println(decimal_to_binary(10));

    }

}
