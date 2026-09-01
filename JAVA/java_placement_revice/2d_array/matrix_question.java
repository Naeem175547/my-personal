public class matrix_question {
    static void spiral_matrix(int matrix[][]) {
        int start_row = 0;
        int end_row = matrix.length - 1;
        int start_col = 0;
        int end_col = matrix[0].length - 1;
        while (start_row <= end_row && start_col <= end_col) {
            // top
            for (int i = start_col; i <= end_col; i++) {
                System.out.print(matrix[start_row][i] + " ");
            }
            // right
            for (int i = start_row + 1; i <= end_row; i++) {
                System.out.print(matrix[i][end_col] + " ");
            }
            // bottom
            for (int i = end_col - 1; i >= start_col; i--) {
                System.out.print(matrix[end_row][i] + " ");
            }
            // left
            for (int i = end_row - 1; i > start_row; i--) {
                System.out.print(matrix[i][start_col] + " ");
            }
            start_col++;
            start_row++;
            end_col--;
            end_row--;

        }

    }

    static void diagnal_sum(int matrix[][]) {
        int sum = 0;
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                if (i == j || (i + j) == matrix.length - 1) {
                    sum += matrix[i][j];
                }
            }
        }
        System.out.println(sum);
    }

    // optimize
    static void diagnal_sum_2(int matrix[][]) {
        int sum = 0;
        for (int i = 0; i < matrix.length; i++) {
            sum += matrix[i][i];
            if (i != matrix.length - 1 - i) {
                sum += matrix[i][matrix.length - 1 - i];
            }
        }
        System.out.println(sum);
    }

    public static void main(String[] args) {
        int matrix[][] = {
                { 1, 2, 3, 4 },
                { 5, 6, 7, 8 },
                { 9, 10, 11, 12 },
                { 13, 14, 15, 16 }
        };
        // spiral_matrix(matrix);
        diagnal_sum(matrix);
        diagnal_sum_2(matrix);

    }
}