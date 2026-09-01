
public class yeild_Keywork {
    public static void main(String[] args) {
        int x = 10;
        int y = switch (x) {
            case 1, 2, 3, 4, 5, 6 -> {
                int result = 100; // Additional logic can go here
                yield result;
            }
            case 7, 8, 9 -> 1000;
            default -> {
                yield 1000;
            }

        };
        System.out.println(y);
    }

}
