import java.util.Scanner;

public class to_d_array {
    public static void spiralmatrix(int arr[][]){
        
        int start_row=0;
        int end_row=arr.length-1;
        int start_column=0;
        int end_column=arr[0].length-1;
        while(start_column<end_column && start_row<end_row){
            //top
            for(int i=start_column;i<=end_column;i++){
                System.out.print(arr[start_row][i]+" ");
            }
            System.out.println();
            //right
            for(int i=start_row+1;i<=end_row;i++){
                System.out.print(arr[i][end_column]+" ");
            }
            System.out.println();
        
        //botton
        for(int i=end_column-1;i>=start_column;i--){
            System.out.print(arr[end_row][i]+" ");
        }
        System.out.println();
        //left
        for(int i=end_row-1;i>=start_row+1;i--){
            System.out.print(arr[i][start_column]+" ");
        }
        System.out.println();
        start_column++;
        start_row++;
        end_column--;
        end_row--; 
    }
        


    }
    public static void array_print(int arr[][]){
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[0].length;j++){
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }

        
    }
    //diagonal sum
    public static void diagnol_sum(int matrix[][]){
        int sum=0;
        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<matrix[0].length;j++){
                if(i==j){
                    sum+=matrix[i][j];
                }
                else if(i+j==matrix[0].length-1){
                    sum+=matrix[i][j];
                }

            }
        }
        System.out.println(sum);
    }
    //diagonal sum optimize
    public static void diagnol_sum_optimize(int matrix[][]){
        int sum=0;
        for(int i=0;i<matrix[0].length;i++){
            sum+=matrix[i][i];
            if(i!=matrix[0].length-1-i)
            sum+=matrix[i][matrix[0].length-1-i];
        }
        System.out.println(sum);
    }
    public static void array_input(int arr[][]){
        Scanner sc=new Scanner(System.in);
        System.out.println("please enter the value into 2d array");
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[0].length;j++){
                arr[i][j]=sc.nextInt();
            }
            System.out.println();
        }
        
    }
    //search in sorted array with stair method
    public static boolean down_staircase_search(int m[][],int key){
        int row=0;
        int col=m[0].length-1;
        while(row<m.length && col>=0){
            if(key==m[row][col])
            return true;
            else if(key>m[row][col]){
                row++;
            }
            else if(key<m[row][col]){
                col--;
            }
        }
        return false;
    }
    // up stairs
    public static boolean up_staircase_search(int m[][],int key){
        int row=m.length-1;
        int col=0;
        while(row >=0 && col<m[0].length){
            if(key==m[row][col])
            return true;
            else if(key>m[row][col]){
                col++;
            }
            else if(key<m[row][col]){
                row--;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int arr[][]={
            {2,3,5},
            {6,8,8},
            {10,20,30}

        };
      //  int arr[][]=new int[4][3];
       // array_input(arr);
     //  spiralmatrix(arr);
     //diagnol_sum_optimize(arr);
     if(up_staircase_search(arr, 5)){
        System.out.println("value is find");
     }else 
     System.out.println("vlue is not find");
     
      
        
    }
    
    
}
