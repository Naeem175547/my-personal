
public class pattern {
    public static void inverted_half_pyramid(int n) {
        for (int i = 0; i < n; i++) {
            // space
            for (int a = 0; a < n - 1 - i; a++) {
                System.out.print(" ");
            }
            // star
            for (int v = 0; v <= i; v++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    // inverted and rotated half pyramid with no and floyd's triangle
    public static void inverted_half_pyramid_with_no(int n) {
        int e = 1;
        for (int i = 1; i <= n; i++) {

            for (int v = 1; v <= i; v++) {
                System.out.print(e + " ");
                e++;
            }
            System.out.println();
        }
    }

    public static void hollow(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 || j == 0 || j == n - 1 || i == n - 1) {
                    System.out.print(" *");
                } else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }

    // butterfly pattern
    public static void butterfly(int n) {
        // upper
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            for (int j = 1; j <= 2 * (n - i); j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // lower
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            for (int j = 1; j <= 2 * (n - i); j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void rhombus_hollow(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                System.out.print(" ");

            }
            for (int j = 0; j < n; j++) {
                if (i == 0 || i == n - 1 || j == 0 || j == n - 1)
                    System.out.print("*");
                else
                    System.out.print(" ");

            }
            System.out.println();

        }
    }

    public static void diamond(int n) {
        // upper
        for (int i = 1; i <= n; i++) {
            // spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");

            }
            // stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // lower
        for (int i = n; i >= 1; i--) {
            // spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");

            }
            // stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

    }

    public static void no_pyramid(int n) {
        for (int i = 0; i < n; i++) {
            // spaces
            for (int j = 0; j < n - 1 - i; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j <= i; j++) {
                System.out.print((i + 1) + " ");
            }
            System.out.println();

        }
    }

    public static void main(String[] args) {
        hollow(4);
        // System.out.println();
        // inverted_half_pyramid_with_no(5);
        // butterfly(4);
        // rhombus_hollow(4);
        // diamond(4);
        no_pyramid(4);
        System.out.println("imran");

    }

}