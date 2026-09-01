public class prime_no {
    static boolean check_prime(int num) {
        for (int i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("imran");
        System.out.println(check_prime(30));
    }

}