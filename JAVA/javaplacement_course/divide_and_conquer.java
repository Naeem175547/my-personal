import javax.naming.PartialResultException;
import javax.sound.midi.MidiChannel;

public class divide_and_conquer {
    public static void Merge_sort(int arr[], int si, int ei) {
        if (si >= ei) {
            return;
        }
        int mid = si + (ei - si) / 2;
        Merge_sort(arr, si, mid);
        Merge_sort(arr, mid + 1, ei);
        merge(arr, si, mid, ei);

    }

    public static void merge(int arr[], int si, int mid, int ei) {
        int temp[] = new int[ei - si + 1];
        int i = si;
        int j = mid + 1;
        int k = 0;
        while (i <= mid && j <= ei) {
            if (arr[i] < arr[j]) {
                temp[k] = arr[i];
                i++;
            } else {
                temp[k] = arr[j];
                j++;
            }
            k++;
        }
        while (i <= mid) {
            temp[k++] = arr[i++];
        }
        while (j <= ei) {
            temp[k++] = arr[j++];
        }
        // note k is size of temp alos
        // copy temp to original array
        for (k = 0, i = si; k < temp.length; k++, i++) {
            arr[i] = temp[k];

        }
    }

    ///
    ///
    // Quick sort using pivot last element
    // Quick sort
    public static void Quick_sort(int arr[], int si, int ei) {
        if (si >= ei)
            return;
        int pivot_index = Partition(arr, si, ei);
        Quick_sort(arr, si, pivot_index - 1);
        Quick_sort(arr, pivot_index + 1, ei);

    }

    public static int Partition(int arr[], int si, int ei) {
        int pivot = arr[ei];
        int i = si - 1;
        for (int j = si; j < ei; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        i++;
        int temp = pivot;
        arr[ei] = arr[i];
        arr[i] = temp;
        return i;

    }

    // quick sort with using first element pivot
    // Quick sort
    public static void Quick_sort1(int arr[], int si, int ei) {
        if (si >= ei)
            return;
        int pivot_index = partition__1(arr, si, ei);
        Quick_sort(arr, si, pivot_index - 1);
        Quick_sort(arr, pivot_index + 1, ei);

    }

    public static int partition1(int arr[], int si, int ei) {
        int pivot = arr[si];
        int i = si;
        for (int j = si + 1; j <= ei; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }

        int temp = pivot;
        arr[si] = arr[i];
        arr[i] = temp;
        return i;

    }// partiontion one another method not working below code

    public static int partition__1(int arr[], int si, int ei) {
        int pivot = arr[si];
        int i = si;
        int j = ei;
        while (i < j) {
            while (pivot >= arr[i]) {
                i++;
            }
            while (pivot < arr[j]) {
                j--;
            }
            if (i < j) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j--;
                i++;

            }

        }
        int temp = arr[j];
        arr[j] = pivot;
        arr[si] = temp;
        return j;

    }

    // quick sort partition with mid element
    public static void partiontion_mid(int arr[], int si, int ei) {
        int mid = si + (ei - si) / 2;
        int pivot = arr[mid];
        int x = si;
        int y = ei;
        for (int i = si; i < mid; i++) {
            if (arr[x] <= arr[mid]) {
                x++;
            }
            if (arr[ei] > arr[mid]) {
                y++;
            }
        }

    }

    // search in rotated sorted array
    public static int search(int arr[], int target, int si, int ei) {
        if (si > ei) {
            return -1;
        }
        int mid = si + (ei - si) / 2;
        if (arr[mid] == target) {
            return mid;

        }
        // mid on l1
        if (arr[si] <= arr[mid]) {
            // case a
            if (arr[si] <= target && target < arr[mid]) {
                return search(arr, target, si, mid - 1);
            }
            // case b
            else {
                return search(arr, target, mid + 1, ei);
            }
        }
        // mid on l2
        else {
            // case a
            if (arr[mid] < target && target <= arr[ei]) {
                return search(arr, target, mid + 1, si);
            }
            // case b
            else {
                return search(arr, target, si, mid - 1);
            }
        }

    }

    // code with iteration //rotated sorted array nevers contain dublicate number
    public static int search_iteration(int arr[], int target, int si, int ei) {

        while (si <= ei) {
            int mid = si + (ei - si) / 2;
            if (arr[mid] == target) {
                return mid;
            }
            if (arr[si] < arr[mid]) {
                if (arr[si] <= target && target < arr[mid]) {
                    ei = mid - 1;
                } else {
                    si = mid + 1;
                }

            } else {
                if (arr[mid] < target && target <= arr[ei]) {
                    si = mid + 1;

                } else {
                    ei = mid - 1;
                }
            }

        }
        return -1;

    }

    // code from chatgpt
    public static int search1(int arr[], int target, int si, int ei) {
        if (si > ei) {
            return -1;
        }
        int mid = si + (ei - si) / 2;
        if (arr[mid] == target) {
            return mid;
        }
        // mid on l1
        if (arr[ei] >= arr[mid]) {
            // case a
            if (arr[si] <= target && target < arr[mid]) {
                return search(arr, target, si, mid - 1);
            }
            // case b
            else {
                return search(arr, target, mid + 1, ei);
            }
        }
        // mid on l2
        else {
            // case a
            if (arr[mid] < target && target <= arr[ei]) {
                return search(arr, target, mid + 1, ei);
            }
            // case b
            else {
                return search(arr, target, si, mid - 1);
            }
        }
    }

    public static void print(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] x = { 5, 96, 7, 8, 9 };
        int arr[] = { 10, 20, 30, 1, 2, 3, 4 };

        int n = x.length - 1;
        print(arr);
        // Merge_sort(x, 0, n);
        // int pos= search(arr, 3, 0, arr.length-1);
        Quick_sort1(arr, 0, arr.length - 1);
        print(arr);

    }

}
