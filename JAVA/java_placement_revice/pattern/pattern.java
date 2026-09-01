public class pattern {
    static void half_pyramid_charator(int n) {
        char c = 'A';

        for (int i = 0; i < n; i++) {

            for (int j = 0; j <= i; j++) {
                System.out.print(c++ + " ");
            }
            System.out.println();
        }

    }

    static void hollow_reactange(int r, int c) {
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                if (i == 0 || i == r - 1 || j == 0 || j == c - 1)
                    System.out.print(" *");
                else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }

    }

    static void inverted_rotated_half_pramid(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

    }

    static void inverted_rotated_half_pramid_another(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (j >= n - 1 - i) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();

        }

    }

    static void inverted_half_pramid_no(int n) {
        for (int i = 0; i < n; i++) {
            int x = 1;
            for (int j = n - 1; j >= 0 + i; j--) {
                System.out.print(x++ + " ");
            }
            System.out.println();
        }

    }

    static void floydsTringular(int n) {
        int x = 1;
        for (int i = 1; i < n; i++) {
            for (int j = 1; j <= i; j++) {
                // if(j<=i)
                System.out.print(x++ + " ");
            }
            System.out.println();

        }

    }

    static void zero_one_tringular(int n) {
        int x = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                // if(j<=i)
                System.out.print(x + " ");
                if (x == 0) {
                    x = 1;
                } else {
                    x = 0;

                }
            }
            System.out.println();

        }

    }

    static void butterfly(int n) {
        for (int i = 1; i <= n; i++) {
            // first half
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            for (int j = 1; j <= 2 * (n - i); j++) {
                System.out.print("  ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");

            }
            System.out.println();
        }
        for (int i = n; i >= 1; i--) {
            // first half
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            for (int j = 1; j <= 2 * (n - i); j++) {
                System.out.print("  ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");

            }
            System.out.println();
        }
    }

    static void solid_rhombus(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print("   ");

            }
            for (int j = 1; j <= n; j++) {
                System.out.print(" * ");
            }
            System.out.println();
        }
    }

    public static void Hollow_Rhombus(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print("   ");

            }
            for (int j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n) {
                    System.out.print(" * ");

                } else {
                    System.out.print("   ");
                }

            }
            System.out.println();
        }
    }

    static void diamond(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(("   "));

            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print(" * ");

            }
            System.out.println();
        }
        for (int i = n; i >= 0; i--) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(("   "));

            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print(" * ");

            }
            System.out.println();
        }
    }

    static void palindrome_pattern(int n) {

        for (int i = 1; i <= n; i++) {
            int x = i;
            for (int j = 1; j <= n - i; j++) {
                System.out.print(("   "));

            }
            // 1st method
            // for (int j = 1; j <= 2 * i - 1; j++) {
            // System.out.print(" " + x + " ");
            // if (j <= i) {

            // x--;
            // if (x == 0)
            // x = 2;
            // } else {

            // x++;
            // }

            // }
            for (int j = i; j >= 1; j--) {
                System.out.print(" " + j + " ");
            }
            for (int j = 2; j <= i; j++) {
                System.out.print(" " + j + " ");
            }
            System.out.println();
        }
    }

    public static void no_pyramid(int n) {
        for (int i = 1; i <= n; i++) {
            int x = i;
            for (int j = 1; j <= n - i; j++) {
                System.out.print(("   "));

            }
            for (int j = 1; j <= i; j++) {
                System.out.print(" " + i + "    ");
            }
            System.out.println();

        }
    }

    public static void main(String[] args) {
        // half_pyramid_charator(5);
        // hollow_reactange(5, 4);
        // inverted_rotated_half_pramid(4);
        // inverted_rotated_half_pramid_another(4);
        // inverted_half_pramid_no(5);
        // floydsTringular(5);
        // zero_one_tringular(5);
        // butterfly(4);
        // solid_rhombus(4);
        // Hollow_Rhombus(5);
        // diamond(5);
        // no_pyramid(5);
        palindrome_pattern(5);

    }
}