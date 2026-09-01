import java.util.*;
public class Question {
    
    static void DiagnolSum(int arr[][]){
        // int sum=0;
        // for(int i=0;i<arr.length;i++){
        //     for(int j=0;j<arr.length;j++){
        //         if(i==j){
        //             sum+=arr[i][j];
        //         }
        //         else if (i+j==arr.length-1) {
        //             sum+=arr[i][j];                    
        //         }
                
        //     }
        // }
        // System.out.println(sum);


        //optimizing code

        int sum=0;
        for(int i=0;i<arr.length;i++){
            sum+=arr[i][i];
            if(i!=arr.length-1-1){
                sum+=arr[i][arr.length-1-i];
            }
        }
        System.out.println(sum);
    }
    static void sortedMatrix(int arr[][],int key){
        int i=0,j=arr.length-1;
        while(i<=arr.length-1 && j>=0){
            if(arr[i][j]==key){
                System.out.println("found");
                return;

            }
            else if(key<arr[i][j]){
                j--;
            }
            else{
                i++;
            }

        }
        System.out.println("not founded.....");
    }
    static void print(int arr[][]){
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[0].length;j++){
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
            
        }
        System.out.println();
    }
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> list = new ArrayList<>();

        int startRow = 0;
        int endRow = matrix.length - 1;
        int startCol = 0;
        int endCol = matrix[0].length - 1;

        while (startRow <= endRow && startCol <= endCol) {

            // top
            for (int i = startCol; i <= endCol; i++) {
                list.add(matrix[startRow][i]);
            }

            // right
            for (int i = startRow + 1; i <= endRow; i++) {
                list.add(matrix[i][endCol]);
            }

            // bottom
            if (startRow < endRow) {
                for (int i = endCol - 1; i >= startCol; i--) {
                    list.add(matrix[endRow][i]);
                }
            }

            // left
            if (startCol < endCol) {
                for (int i = endRow - 1; i > startRow; i--) {
                    list.add(matrix[i][startCol]);
                }
            }

            startRow++;
            startCol++;
            endRow--;
            endCol--;
        }

        return list;
    }
    static ArrayList<Integer> diagonalOrder(int[][] mat) {
        ArrayList<Integer> res = new ArrayList<>();
        int n = mat.length;
        int m = mat[0].length;
        
        // Process all diagonals starting from the first column
        for (int row = 0; row < n; row++) {
            int i = row, j = 0;
            
            // Follow each diagonal going up and right
            while (i >= 0 && j < m) {
                res.add(mat[i][j]);
                i--;
                j++;
            }
        }
        
        // Process remaining diagonals starting from 
        // the bottom row (except first column)
        for (int col = 1; col < m; col++) {
            int i = n-1, j = col;
            
            // Follow each diagonal going up and right
            while (i >= 0 && j < m) {
                res.add(mat[i][j]);
                i--;
                j++;
            }
        }
        
        return res;
    }
    public int[] findDiagonalOrder(int[][] mat) {
        Map<Integer, ArrayList<Integer>> map = new HashMap<>();

        int m = mat.length;
        int n = mat[0].length;

        // Fill map
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int key = i + j;

                map.putIfAbsent(key, new ArrayList<>());
                map.get(key).add(mat[i][j]);
            }
        }

        // Build result
        ArrayList<Integer> list = new ArrayList<>();
        boolean flip = true;

        for (int key = 0; key <= m + n - 2; key++) {
            ArrayList<Integer> temp = map.get(key);

            if (flip) {
                Collections.reverse(temp);
            }

            list.addAll(temp);
            flip = !flip; // ⭐ important
        }

        // Convert to int[]
        int[] ans = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            ans[i] = list.get(i);
        }

        return ans;
    }

 
    public void setZeroes(int[][] matrix) {
        //just for how code can be written
        // int m=matrix.length;
        // int n=matrix[0].length;
        // Map<Integer,List<Integer>> map=new HashMap<>();
        // for(int row=0;row<m;row++){
        //     int col=0;
        //     while(col<n){
        //         if(matrix[row][col]==0){
        //             map.putIfAbsent(row,new ArrayList<>());
        //             map.get(row).add(col);
        //             col++;                   

        //         }
        //         else{
        //             col++;
        //         }
        //     }

            

        // }
        // for(int key:map.keySet()){
        //     //make row zero
        //     List<Integer> list=map.get(key);
        //     int row=key;
        //     for(int col:list){
        //         //for row
        //         int i=0;
        //     while(i<m){
        //         matrix[i][col]=0;
        //         i++;

        //     }
        //     //for col
        //      i=0;
        //     while(i<n){
        //         matrix[row][i]=0;
        //         i++;

        //     }
        //     }
            
            
        // }
//         //brute force
//          int m=matrix.length;
//         int n=matrix[0].length;
//         Set<Integer> rows = new HashSet<>();
//        Set<Integer> cols = new HashSet<>();

//         for (int i = 0; i < m; i++) {
//         for (int j = 0; j < n; j++) {
//          if (matrix[i][j] == 0) {
//             rows.add(i);
//             cols.add(j);
//                         }
//            }
//           }

//     for (int i = 0; i < m; i++) {
//     for (int j = 0; j < n; j++) {
//         if (rows.contains(i) || cols.contains(j)) {
//             matrix[i][j] = 0;
//         }
//     }
//   }
       int m=matrix.length;
       int n=matrix[0].length;
       boolean firstRow=false;boolean firstCol=false;
//set marker in first row and first column
    for(int i=0;i<m;i++){//i==row
       for(int j=0;j<n;j++){//j==col
          if(matrix[i][j]==0){
           if(i==0) firstRow=true;
           if(j==0) firstCol=true;
           matrix[0][j]=0;
            matrix[i][0]=0;
    }
    }
    }
    for(int i=1;i<m;i++){//i==row
       for(int j=1;j<n;j++){//j==col
       if(matrix[i][0]==0||matrix[0][j]==0){
        matrix[i][j]=0;

       }
          
    }
    }
    //now for first now and column
    if(firstRow){
        for(int i=0;i<n;i++){
            matrix[0][i]=0;
        }
    }
    if(firstCol){
        for(int i=0;i<m;i++){
            matrix[i][0]=0;
        }

    }
    




        
    }

    
    public void rotate(int[][] matrix) {
        // //brute force
        // int n = matrix.length;
        // int[][] mat = new int[n][n];

        // // fill rotated matrix
        // for (int i = 0; i < n; i++) {
        //     for (int j = 0; j < n; j++) {
        //         mat[j][n - 1 - i] = matrix[i][j];
        //     }
        // }

        // // copy back to original matrix
        // for (int i = 0; i < n; i++) {
        //     for (int j = 0; j < n; j++) {
        //         matrix[i][j] = mat[i][j];
        //     }
        // }

        //in place 4 way transpose

         int n = matrix.length;

        for (int i = 0; i < (n + 1) / 2; i++) {
            for (int j = 0; j < n / 2; j++) {

                int temp = matrix[n - 1 - j][i];

                // left -> bottom
                matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];

                // bottom -> right
                matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];

                // right -> top
                matrix[j][n - 1 - i] = matrix[i][j];

                // top -> left
                matrix[i][j] = temp;
            }
        }

        
    }
    //Driver Code Starts
class GfG {

//Driver Code Ends
    static int findCommon(int[][] arr) {
        int n = arr.length;
        int m = arr[0].length;
        int ans = -1;

        for (int i = 0; i < m; i++) {

            // Traverse the first row
            int check = arr[0][i];
            int count = 1;

            for (int j = 1; j < n; j++) {
                for (int k = 0; k < m; k++) {

                    // break out of the loop
                    // if element is found
                    if (arr[j][k] == check) {
                        count++;
                        break;
                    }
                }
            }

            if (count == n) {
                ans = arr[0][i];
                break;
            }
        }

        return ans;
    }
//Driver Code Starts

    public static void main(String[] args) {
        int[][] arr = {
            {1, 2, 3, 4, 5},
            {2, 4, 5, 8, 10},
            {3, 5, 7, 9, 11},
            {1, 3, 5, 7, 9}
        };

        int ans = findCommon(arr);
        System.out.println(ans);
    }
}

//Driver Code Ends
    public static void main(String[] args) {
        // int arr[][]={
        //     {1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}
        // };
        int arr[][]={
            {1,3,4},
            {5,6,7},
            {9,10,21}
        };
        // print(arr);
        // spiralMatrix(arr);
        // DiagnolSum(arr);
        // sortedMatrix(arr, 1);
        


        
    }
    
}
