import java.util.*;
import java.util.Collections;

public class find_sum_of_max_subarr {
    static void print(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    static void find_sum_of_max_subar(int arr[]) {
        int prefix[] = new int[arr.length];
        prefix[0] = arr[0];
        for (int i = 1; i < arr.length; i++) {
            prefix[i] = prefix[i - 1] + arr[i];
        }
        int max_sum = Integer.MIN_VALUE;
        int curr_sum;
        for (int i = 0; i < arr.length; i++) {
            int start = i;
            for (int j = i; j < arr.length; j++) {
                int end = j;
                curr_sum = start == 0 ? prefix[end] : prefix[end] - prefix[start - 1];
                if (curr_sum > max_sum) {
                    max_sum = curr_sum;
                }
            }

        }
        System.out.println("sum of maxx_subarr = " + max_sum);

    }

    // kadan's algorithm
    static void kadans(int arr[]) {
        int i;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                break;

            }
        }
        if (i == arr.length) {
            System.out.println("whole is -1");
            return;
        }
        int cs = 0, mx = 0;
        for (int j = 0; j < arr.length; j++) {
            cs = cs + arr[j];
            if (cs < 0) {
                cs = 0;
            }
            mx = Math.max(mx, cs);
        }

        System.out.println("sum of maxx_subarr =" + mx);

    }

    public static void main(String[] args) {
        int a[] = { 2, 4, 5, 2, 1 };
        find_sum_of_max_subar(a);
        // System.out.println(kadans(a));//error
        kadans(a);

    }

}
