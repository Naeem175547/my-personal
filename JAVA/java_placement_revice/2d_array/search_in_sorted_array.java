
public class search_in_sorted_array {
    static int[] search_in_sorted(int matrix[][], int target) {
        int row = 0;
        int col = matrix[0].length - 1; // Corrected the initialization of col
        while (row <= matrix.length - 1 && col >= 0) {
            if (matrix[row][col] == target) {
                return new int[] { row, col };
            } else if (matrix[row][col] > target) {
                col--;
            } else {
                row++;
            }
        }
        return new int[] { -1, -1 };
    }

    public static void main(String[] args) {
        int[][] matrix = {
                { 1, 2, 3 },
                { 4, 6, 7 },
                { 8, 9, 10 }
        };
        System.out.println(search_in_sorted(matrix, 8));
    }
}
