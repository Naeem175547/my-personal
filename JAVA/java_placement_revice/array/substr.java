public class substr {
    static int printf_subArr(int arr[]) {
        int max_array_sum = Integer.MIN_VALUE;

        for (int i = 0; i < arr.length; i++) {
            for (int j = i; j < arr.length; j++) {
                int sum = 0;
                for (int k = i; k <= j; k++) {
                    sum += arr[k];
                    System.out.print(arr[k]);

                }
                max_array_sum = Math.max(max_array_sum, sum);
                System.out.println();
            }
            // System.out.println();
        }
        return max_array_sum;
    }

    public static void main(String[] args) {
        int arr[] = { 2, 4, 6, 0 };
        System.out.println(printf_subArr(arr));

    }

}
