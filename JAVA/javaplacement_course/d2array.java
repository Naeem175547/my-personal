public class d2array {
    public static void spiralmatrix(int matrix[][]){
        int sr=0;
        int er=matrix.length-1;
        int sc=0;
        int ec=matrix[0].length-1;
        while(sr<=er && sc<=ec){
            for(int i=sc;i<=ec;i++){
                System.out.print(matrix[sr][i]+" ");
                
            }
            
            for(int i=sr+1;i<=er;i++){
                System.out.print(matrix[i][ec]+" ");

            }
            
            for(int i=ec-1;i>=sc;i--){
                if(sr==er)
                break;
                System.out.print(matrix[ec][i]+" ");

            }
            
            for(int i=er-1;i>=sr+1;i--){
                if(sc==ec){
                    break;
                }
                System.out.print(matrix[i][sc]+"");

            }
           
            sr++;
            sc++;
            er--;
            ec--;
            
        }
        System.out.println();
    }
    public static void diagnol_sum(int matrix[][]){

        int sum=0;
        for(int i=0;i<matrix.length;i++){
            //pd
            sum=sum+matrix[i][i];
            //sd
            if(i!=matrix.length-1-i)
            sum=sum+matrix[i][matrix[0].length-1-i];

        }
        System.out.println(sum);

    }
    public static boolean search_sort_matrix1(int matrix[][] , int key){
        int r=0;
        int c=matrix[0].length-1;
        while(r<=matrix.length-1 && c>=0){
            if(key==matrix[r][c]){
                System.out.println("value is find on index shmeeema "+ r + " "+c );
                return true;
            }
            else if(matrix[r][c]<key){
                r=r+1;
            }
            else if(matrix[r][c]>key){
                c=c-1;

            }
            
}
        return false;                                        
    }
    //2nd method
    public static boolean search_sort_matrix2(int matrix[][] , int key){
        int r=matrix.length-1;
        int c=0;
        while(r>=0 && c<matrix[0].length-1){
            if(key==matrix[r][c]){
                System.out.println("value is find on index shmeeema "+ r + " "+c );
                return true;
            }
            else if(matrix[r][c]>key){
                r=r-1;
            }
            else if(matrix[r][c]<key){
                c=c+1;

            }
            
}
        return false;                                        
    }
    public static void main(String[] args) {
        int m[][]=new int[][]{
            {1,2,2},
            {5,6,2},
            {9,10,2}
        };
        int matrix[][]={
            {10,20,30,40},
            {15,25,35,45},
            {27,29,37,48},
            {32,33,39,50}
        };
        if(search_sort_matrix1(matrix, 20) && search_sort_matrix2(matrix,35)){
            System.out.println("Find");
        }
        else{
            System.out.println("value not  find");
        }

        
    }
    
}
