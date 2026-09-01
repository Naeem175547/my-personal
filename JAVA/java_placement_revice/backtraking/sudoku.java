public class sudoku {
    static boolean  isSafe(int[][] sudoku,int row,int col,int digit){
        //column
        for(int i=0;i<9;i++){
            if(sudoku[i][col]==digit){
                return false;
            }
        }
        //row
        for(int i=0;i<9;i++){
            if(sudoku[row][i]==digit){
                return false;
            }
        }

        //grid
        int sr=(row/3)*3;
        int sc=(col/3)*3;
        for(int i=sr;i<sr+3;i++){
            for(int j=sc;j<sc+3;j++){
                if(sudoku[i][j]==digit){
                    return false;
                }

            }
        }
        return true;
    }
    public static boolean sudosolver(int[][] sudoku,int row,int col){
        if(row==9){
            print(sudoku);
            return true;
        }
        int nextrow=row;
        int nextcol=col+1;
        if(col+1==9){
            nextrow++;
            nextcol=0;
        }
        if(sudoku[row][col]!=0){
            return sudosolver(sudoku, nextrow, nextcol);
        }
        for(int digit=1;digit<=9;digit++){
            if(isSafe(sudoku,row,col,digit)){
                sudoku[row][col]=digit;
                if(sudosolver(sudoku, nextrow, nextcol)){
                    return true;
                }
                sudoku[row][col]=0;
            }
        }
        return false;
    }
       static void print(int[][] sudoku){
        System.out.println();
        for(int i=0;i<sudoku.length;i++){
            for(int j=0;j<sudoku.length;j++){
                System.out.print(sudoku[i][j]+" ");
            }
            System.out.println();
        }
       }
         public static void main(String[] args) {
            int[][] sudoku = {
                {0, 0, 8, 0, 0, 0, 0, 0, 0},
                {4, 9, 0, 1, 5, 7, 0, 0, 2},
                {0, 0, 3, 0, 0, 4, 1, 9, 0},
                {1, 8, 5, 0, 6, 0, 0, 2, 0},
                {0, 0, 0, 0, 2, 0, 0, 6, 0},
                {9, 6, 0, 4, 5, 3, 0, 0, 0},
                {0, 3, 0, 0, 7, 2, 0, 0, 4},
                {0, 4, 9, 0, 3, 0, 0, 5, 7},
                {8, 2, 7, 0, 0, 9, 0, 1, 3}
            };
    
            System.out.println("Original Sudoku:");
            print(sudoku);  // Print the original Sudoku
    
            if (sudosolver(sudoku, 0, 0)) {
                System.out.println("Solved Sudoku:");
                print(sudoku);  // Print the solved Sudoku
            } else {
                System.out.println("Sudoku cannot be solved.");
            }
    }
    
}
