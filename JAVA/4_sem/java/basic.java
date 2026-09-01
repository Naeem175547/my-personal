import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

class basic {
    // int x = 10;
    // static int y = 20;
    static void print(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // System.out.print(y);
        int[] arr = { 2, 4, 2, 4, 1, 0 };
        print(arr);
        Arrays.sort(arr, Collections.reverseOrder());
        print(arr);

    }
}