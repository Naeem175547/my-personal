public class question {
    static void check_old_even(int n) {
        int bitmask = 1;
        if ((bitmask & n) == 0) {
            System.out.println("even");

        } else {
            System.out.println("old");
        }
    }

    static int get(int n, int i) {
        int bitmask = 1;
        bitmask = bitmask << i;
        if ((bitmask & n) == 0) {
            return 0;
        } else {
            return 1;
        }
    }

    static int set(int n, int i) {
        int bitmask = 1;
        bitmask = bitmask << i;
        return n | bitmask;
    }

    static int clear(int n, int i) {
        int bitmask = 1;
        bitmask = bitmask << i;
        bitmask = ~bitmask;
        return n & bitmask;
    }

    static int update(int n, int i, int newbit) {
        if (newbit == 0) {
            return clear(n, i);
        } else {
            return set(n, i);
        }
    }

    static int update_second(int n, int i) {
        int bitmask = 1 << i;
        if ((bitmask & n) == 0) {
            return set(n, i);

        }
        return clear(n, i);

    }

    static int clear_i_bit(int n, int i) {
        int bitmask = ~0 << i;
        return n & bitmask;

    }

    static int clear_bit_range(int n, int i, int j) {
        int a = (~0) << j + 1;
        int b = (1 << i) - 1;
        int bitmask = a | b;
        return bitmask & n;
    }

    static boolean isPowerOf2(int n) {
        return (n & (n - 1)) == 0;
    }

    static int count_set_bit(int n) {
        int set_bit = 0;
        int unset_bit = 0;

        while (n != 0) {
            if ((n & 1) != 0) {
                set_bit++;
            } else {
                unset_bit++;
            }
            n = n >> 1;

        }

        return set_bit;

    }

   

    public static void main(String[] args) {
        // check_old_even(5);
        // System.out.println(get(12, 2));
        // System.out.println(set(12, 2));
        // System.out.println(clear(12, 2));
        // System.out.println(update(12, 1, 1));
        // System.out.println(update_second(16, 3));
        // System.out.println(clear_i_bit(15, 3));
        // System.out.println(isPowerOf2(8));
        // System.out.println(count_set_bit(15));
        // System.out.println(clear_bit_range(31, 1, 3));
        // System.out.println(fast_exponentiation(7, 2));

    }

}
