public class question{
    static void changeArray(int arr[],int idx,int val){
        if(idx==arr.length){
            print(arr);
            return;
        }
        arr[idx]=val;
        changeArray(arr, idx+1, val+1);
        arr[idx]=val-2;
    }
    static void print(int[] arr){
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }
    //subset of string
    static void subsets(String str,String ans,int i){
        if(i==str.length()){
            System.out.println(ans);
            return;
        }
        subsets(str,ans+str.charAt(i),i+1);
        subsets(str, ans, i+1);
        
    }
    //permutatoin
    static void permutatoin(String str,String ans){
        if(0==str.length()){
            System.out.println(ans);
            return;
        }
        for(int i=0;i<str.length();i++){
            String newStr=str.substring(0,i)+str.substring(i+1);
            permutatoin(newStr, ans+str.charAt(i));



        }


    }
    static void totalArrangement(String str,String ans,int n){
        if(ans.length()==n){
            System.out.println(ans);
            return;
        }
        for(int i=0;i<str.length();i++){
            totalArrangement(str,ans+str.charAt(i),n);

        }
    }
    static void printBoard(char[][] board){
        System.out.println("__________________________________");
        for(int i=0;i<board.length;i++){
            for(int j=0;j<board.length;j++){
                System.out.print(board[i][j]+" ");
            }
            System.out.println();
        }
    }
    static int count=0;
    static void nQueues(char[][] board,int row){
        if(row==board.length){
            printBoard(board);
            count++;
            return;
        }
        for(int i=0;i<board.length;i++){
            if(isSafe(board,row,i)){
                board[row][i]='Q';
            nQueues(board, row+1);
            board[row][i]='*';
            }
        }
    }
    //solution possible or not
    static boolean  nQueues2(char[][] board,int row){
        if(row==board.length){
            printBoard(board);
            return true;
        }
        for(int i=0;i<board.length;i++){
            if(isSafe(board,row,i)){
                board[row][i]='Q';
            if(nQueues2(board, row+1)){
                return true;
            }
            board[row][i]='*';
            }
        }
        return false;
    }
    static boolean isSafe(char[][] board,int row,int column){
        //verticle
        for(int i=row-1;i>=0;i--){
            if(board[i][column]=='Q'){
                return false;

            }
        }
        //left diagnol
        for(int i=row-1,j=column-1;i>=0 && j>=0;i--,j--){
            if(board[i][j]=='Q'){
                return  false;
            }
        }
        for(int i=row-1,j=column+1;i>=0 && j<board.length;i--,j++){
            if(board[i][j]=='Q'){
                return  false;
            }
        }
        return true;
    }
   //grid way 00 to n-1 m-1
    static int  gridWays(int i,int j,int n,int m){
        if(i==n || j==m){
            return 0;
        }
        if(i==n-1 && j==m-1){
            return 1;
        }
        int w1=gridWays(i+1, j, n, m);
        int w2=gridWays(i, j+1, n, m);
        return w1+w2;

    }
    
    public static void main(String[] args) {
        // int[] arr=new int[n];
        // changeArray(arr,0,1);
        // print(arr);

        // subsets("ABC", "", 0);
        // permutatoin("ABC", "");
        // totalArrangement("ABC", "", 3);
         int n=4;
        char[][] board=new char[n][n];
        for(int i=0;i<board.length;i++){
           for(int j=0;j<board.length;j++){
            board[i][j]='*';
           }
            
        }
        // printBoard(board);
        nQueues(board,0);
        System.out.println("Total number of way = "+count);
        System.out.println(nQueues2(board, 0));
        System.out.println(gridWays(0, 0, 3, 3));
    }
} 