
public class count_sort {
    static void count_sort(int arr[]) {
        int largest = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (largest < arr[i]) {
                largest = arr[i];
            }

        }
        int helper[] = new int[largest + 1];
        for (int i = 0; i < arr.length; i++) {
            helper[arr[i]]++;
        }
        for (int i = 0; i < helper.length; i++) {
            System.out.print(helper[i] + " ");
        }
        int c = 0;
        for (int i = 0; i < helper.length; i++) {
            while (helper[i] > 0) {
                arr[c] = i;
                c++;
                helper[i]--;

            }

        }

    }

    public static void main(String[] args) {
        int[] arr = { 2, 4, 16, 3, 0, 3 };
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
        }
        System.out.println();
        count_sort(arr);
        System.out.println();
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }

    }

}
