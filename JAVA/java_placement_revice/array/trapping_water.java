
public class trapping_water {
    public static void water_trap(int height[]) {
        int n = height.length;
        int left_max[] = new int[n];
        left_max[0] = height[0];
        for (int i = 1; i < n; i++) {
            left_max[i] = Math.max(left_max[i - 1], height[i]);
        }
        // calculate right ma boundary
        int right_max[] = new int[n];
        right_max[n - 1] = height[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            right_max[i] = Math.max(height[i], right_max[i + 1]);
        }
        int trap_water = 0;
        for (int i = 0; i < height.length; i++) {
            int water_lavel = Math.min(left_max[i], right_max[i]);
            trap_water += water_lavel - height[i];

        }
        System.out.println(trap_water);
        print(left_max);
        print(right_max);

    }

    static void print(int arr[]) {
        for (int item : arr) {
            System.out.print(item + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] water_trap = { 4, 2, 0, 6, 3, 2, 5 };
        water_trap(water_trap);

    }

}
