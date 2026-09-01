public class backtraking{
    //array operation 
    //sub set
    public static void  subset(String str,String ans,int i){
        if(i==str.length()){
            System.out.println(ans);
            return;
        }
        subset(str, ans+str.charAt(i), i+1);
        subset(str,ans,i+1);
    }//find permutations
    public static void fint_permutations(String str,String ans){
        if(str.length()==0){
            System.out.println(ans);
            return;
        }
        for(int i=0;i<str.length();i++){
            char curr=str.charAt(i);
            String new1=str.substring(0, i)+str.substring(i+1);
            fint_permutations(new1, ans+curr);
        }
    }
    //N-Queen
    public static boolean is_Safe(char arr[][],int col,int row){
        //vericle up
        for(int i=row-1;i>=0;i--){
            if(arr[i][col]=='Q'){
                return false;
            }
        }
       //diagonal left up
       for(int i=row-1,j=col-1;i>=0 && j>=0;i--,j--){
        if(arr[i][j]=='Q'){
            return false;
        }

       }
       //diagonal right up
       for(int i=row-1,j=col+1; i>=0 && j<arr.length;i--,j++){
        if(arr[i][j]=='Q'){ 
            return false;
        }

       }
        return true;

    }

    public static void N_Queen(char arr[][],int row){
        if(row==arr.length){
            System.out.println("----CHESS BOARD");
            print_r(arr);
            System.out.println();
            count++;
            
            return;
        }
        for(int i=0;i<arr.length;i++){
            if(is_Safe(arr, i, row)){

            
            
            arr[row][i]='Q';
            N_Queen(arr, row+1);
            arr[row][i]='.';
            

       
    }}
    }
    //N-Queens print 1 solution
    public static boolean N_Queen2(char arr[][],int row){
        if(row==arr.length){
           // System.out.println("----CHESS BOARD");
            //print_r(arr);
          //  System.out.println();
            return true;
        }
        for(int i=0;i<arr.length;i++){
            if(is_Safe(arr, i, row)){
              arr[row][i]='Q';
             if(N_Queen2(arr, row+1)){
                return true;

             }
              arr[row][i]='.';
            

       
    }}
    return false;
    }
    static int count=0;
    //print array funtion
    public static void print_r(char arr[][]){
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr.length;j++){
                System.out.print(arr[i][j]+" ");

            }
            System.out.println();
        }
        System.out.println();
    }
    public static void print_r(int arr[][]){
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr.length;j++){
                System.out.print(arr[i][j]+" ");

            }
            System.out.println();
        }
        System.out.println();
    }
    public static int gridways(int i,int j,int n,int m){
        if(i==n-1 && j==m-1){
            return 1;
            
        }else if(i==n || j==m){
            return 0;
            
        }
        int w1=gridways(i+1, j, n, m);
        int w2=gridways(i,j+1,n,m);
        return w1+w2;
    }
    //sudoko 
    public static boolean issafe(int sudoko[][],int row,int col,int digit){
        //column
        for(int i=0;i<9;i++){
            if(sudoko[i][col]==digit){
                return false;
            }
        }
        //row
        for(int i=0;i<9;i++){
            if(sudoko[row][i]==digit){
                return false;
            }
        }
        //grid
        int sr=(row/3)*3;
        int sc=(col/3)*3;
        for(int i=sr;i<sr+3;i++){
            for(int j=sc;j<sc+3;j++){
                if(sudoko[i][j]==digit){
                    return false;
                }
            }
        }
        return true;
    }
    public static boolean sudokosolver(int sudoko[][],int row,int col){
        //base case
        if(row==9){
            return true;
        }
        //recursion
        int nextrow=row,nextcol=col+1;
        if(col+1==9){
            nextrow=row+1;
            nextcol=0;
        }
        if(sudoko[row][col]!=0){
            return sudokosolver(sudoko, nextrow, nextcol);
        }
       // digit placing
        for(int digit=1;digit<=9;digit++){
            if(issafe(sudoko, row, col, digit)){
                sudoko[row][col]=digit;
                if(sudokosolver(sudoko, nextrow, nextcol)){//solution exists next level or not
                    return true;
                }
                sudoko[row][col]=0;
            }
            
        }
        return false;
   
    }
    public static void main(String[] args) {
        //subset("ABC","", 0);
       // fint_permutations("ABC","");
       //board == array
      /* char arr[][]=new char[4][4];
       for(int i=0;i<arr.length;i++){
        for(int j=0;j<arr.length;j++){
            arr[i][j]='.';
            

        }
        
    }
    N_Queen(arr, 0);
    //System.out.println(count);
    if(N_Queen2(arr,0)){
        System.out.println("solution is possible");
        print_r(arr);
    }
    else{
        System.out.println("solution is not possible");
    }
    */
    /*grid ways
    System.out.println(gridways(0, 0, 3, 3));
    */
    int sudoko[][]={
        {0,0,8,0,0,0,0,0,0},
        {4,9,0,1,5,7,0,0,2},
        {0,0,3,0,0,4,1,9,0},
        {1,8,5,0,6,0,0,2,0},
        {0,0,0,0,2,0,0,6,0},
        {9,6,0,4,0,5,3,0,0},
        {0,3,0,0,7,2,0,0,4},
        {0,4,9,0,3,0,0,5,7},
        {8,2,7,0,0,9,0,1,3}
        };
        if(sudokosolver(sudoko, 0, 0)){
            System.out.println("solution exists");
            print_r(sudoko);
        }else{
            System.out.println("Solution is not exists");
        }
   
      


       
       
        
    }
}