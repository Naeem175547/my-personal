import  java.util.*;

public class Question {
    static void subset(String str,String ouput,int idx){
        if(idx==str.length()){
            System.out.println(ouput);
            return;

        }
        subset(str, ouput+str.charAt(idx), idx+1);
        subset(str, ouput, idx+1);


    }
     static void permutation(List<List<Integer>> result, List<Integer> list, int nums[]) {

        if (list.size() == nums.length) {
            System.out.println(list);
            // create copy
            result.add(new ArrayList<>(list));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (list.contains(nums[i]))
                continue;
            list.add(nums[i]);
            permutation(result, list, nums);
            // backtracking
            list.remove(list.size() - 1);
        }
    }

    static void permutationStr(String str,String ans){
        if(str.length()==0){
            System.out.println(ans);
            return;
        }
        for(int i=0;i<str.length();i++){
            char val=str.charAt(i);
            String newStr=str.substring(0,i)+str.substring(i+1);
            permutationStr(newStr, ans+val);
        }

        
        
    }
    static int GridWays(int i,int j,int m ,int n){
        if(i==m || j==n){
            return 0;
        }
        if(i==m-1 && j==n-1) return 1;
        int w1=GridWays(i+1, j, m, n);
        int w2=GridWays(i, j+1, m, n);
        return w1+w2;
      
    }
    //rat in maze 

    void helper(int[][] maze, int r, int c,
                String path,
                ArrayList<String> ans,
                boolean[][] visited) {
        int n = maze.length;
        // invalid cases
        if (r < 0 || c < 0 || r >= n || c >= n
                || maze[r][c] == 0
                || visited[r][c]) {
            return;
        }
        // destination
        if (r == n - 1 && c == n - 1) {
            ans.add(path);
            return;
        }
        visited[r][c] = true;
        //if don't want to use visited just use below condition
        // maze[r][c]=-1;
        // D L R U  (many platforms expect this order)
        helper(maze, r + 1, c, path + "D", ans, visited);
        helper(maze, r, c - 1, path + "L", ans, visited);
        helper(maze, r, c + 1, path + "R", ans, visited);
        helper(maze, r - 1, c, path + "U", ans, visited);
        visited[r][c] = false;
        // maze[r][c]=1;
    }

    public ArrayList<String> ratInMaze(int[][] maze) {
        ArrayList<String> ans = new ArrayList<>();
        int n = maze.length;
        // if starting cell blocked
        if (maze[0][0] == 0) {
            return ans; 
        }
        boolean[][] visited = new boolean[n][n];
        helper(maze, 0, 0, "", ans, visited);
        return ans;    
    }
    //target sum combination
    
     void helper2( int arr[],int target,ArrayList<ArrayList<Integer>> ans,ArrayList<Integer> list,int sum,int start)
    {
        if(sum==target){
            ans.add(new ArrayList<>(list));
            return;
        }
        for(int i=start;i<arr.length;i++){
            if(sum+arr[i]<=target){
                list.add(arr[i]);
                helper2(arr,target,ans,list,sum+arr[i],i);
                list.remove(list.size()-1);
            }
            
        }
    }
    public ArrayList<ArrayList<Integer>> targetSumComb(int[] arr, int target) {
        // code here
        ArrayList<ArrayList<Integer>> ans=new ArrayList<>();
        helper2(arr,target,ans,new ArrayList<>(),0,0);
        return ans;
        
        
    }
    //Longest Possible Route in a Matrix with Hurdles

    static  int  helper3(int mat[][],int n,int m,int xs,int ys,int xd,int yd,int count){
        if(xs>=n || ys>=m || xs<0 || ys<0 || mat[xs][ys]==-1 || mat[xs][ys] == 0 ){
            return -1;
        }
        if(xs==xd && ys==yd){
            return count;
        }
        mat[xs][ys]=-1;
        int down=helper3(mat,n,m,xs+1,ys,xd,yd,count+1);
        int right=helper3(mat,n,m,xs,ys+1,xd,yd,count+1);
        int up=helper3(mat,n,m,xs-1,ys,xd,yd,count+1);
        int left=helper3(mat,n,m,xs,ys-1,xd,yd,count+1);
        mat[xs][ys]=1;
        return Math.max(down,Math.max(right,Math.max(up,left)));
        
        
        
    }
    public static int longestPath(int[][] mat, int n, int m, int xs, int ys, int xd,
                                  int yd) {
        // code here
        return helper3(mat,n,m,xs,ys,xd,yd,0);
        
        
    }
    //n-queues
    static boolean isSafe(char board[][],int row,int col){
        //cheking up
        for(int i=row-1;i>=0;i--){
            if(board[i][col]=='Q'){
                return false;
            }
        }

        //left diagonal cheking
        for(int i=row-1,j=col-1;i>=0 && j>=0;i--,j--){
            if(board[i][j]=='Q'){
                return false;
            }
        }
        //right diagonal cheking
        for(int i=row-1,j=col+1;i>=0 && j<board.length;i--,j++){
            if(board[i][j]=='Q'){
                return false;
            }
        }
        return true;
    }

    static void backtrack(List<List<String>> result,char board[][],int row){
        if(row==board.length){
            System.out.println(Arrays.deepToString(board));
            ArrayList<String> list=new ArrayList<>();
            for(int i=0;i<board.length;i++){
                list.add(new String(board[i]));                
            }
            result.add(list);
           
            return;
        }
        for(int col=0;col<board.length;col++){
           if(isSafe(board,row,col)){
             board[row][col]='Q';
            backtrack(result,board,row+1);
            board[row][col]='.';
           }

        }
    }
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result=new ArrayList<>();
        char board[][]=new char[n][n];        
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                board[i][j]='.';
                
            }
        }
        System.out.println(Arrays.deepToString(board));
        backtrack(result,board,0);
        return result;
        
    }


    //nqueue from gfg
     boolean isSafe2(int mat[][], int row, int col) {

        // up
        for(int i = row - 1; i >= 0; i--) {
            if(mat[i][col] == -1) return false;
        }

        // left diagonal
        for(int i = row - 1, j = col - 1;
            i >= 0 && j >= 0;
            i--, j--) {

            if(mat[i][j] == -1) return false;
        }

        // right diagonal
        for(int i = row - 1, j = col + 1;
            i >= 0 && j < mat.length;
            i--, j++) {

            if(mat[i][j] == -1) return false;
        }

        return true;
    }

    void helper(int mat[][],
                int n,
                int row,
                ArrayList<ArrayList<Integer>> ans,
                ArrayList<Integer> list) {

        // base case
        if(row == n) {
            ans.add(new ArrayList<>(list));
            return;
        }
        for(int col = 0; col < n; col++) {
            if(isSafe2(mat, row, col)) {
                // place queen
                mat[row][col] = -1;
                list.add(col + 1);
                helper(mat, n, row + 1, ans, list);
                // backtrack
                list.remove(list.size() - 1);
                mat[row][col] = 0;
            }
        }
    }

    public ArrayList<ArrayList<Integer>> nQueen2(int n) {
        ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
        int mat[][] = new int[n][n];
        helper(mat, n, 0, ans, new ArrayList<>());
        return ans;
    }

    //n queens
    static boolean isSafe3(char board[][],int row,int col){
        //veritcal up 
        for(int i=row-1;i>=0;i--){
            if(board[i][col]=='Q')
                return false;

        }

        //diagonal left up
        for(int i=row-1, j=col-1;i>=0 && j>=0;i--,j--){
            if(board[i][j]=='Q')
                return false;

        }

        //diagonal rigth up
        for(int i=row-1, j=col+1;i>=0 && j<board.length;i--,j++){
            if(board[i][j]=='Q')
                return false;

        }

        return true;

    }
//nqueen from leetcode
    static void nQueens3(char [][]board,int row){
        if(row==board.length){
            
            for(int i=0;i<board.length;i++){
                for(int j=0;j<board.length;j++){
                    System.out.print(board[i][j]+" ");
                }
                System.out.println();
                
            }
            
                System.out.println("--------------------------------------");
        }
        for(int col=0;col<board.length;col++){
            if(isSafe3(board,row,col)){
                board[row][col]='Q';
                nQueens3(board, row+1);
                board[row][col]='.';
            }
        }    
    }

    //sodokuSolver
    boolean sudokuCheck(int mat[][], int row, int col, int digit, int n) {
        // column check
        for (int i = 0; i < n; i++) {
            if (mat[i][col] == digit) {
                return false;
            }
        }
        // row check
        for (int i = 0; i < n; i++) {
            if (mat[row][i] == digit) {
                return false;
            }
        }

        // 3x3 grid check
        int sr = (row / 3) * 3;
        int sc = (col / 3) * 3;

        for (int i = sr; i < sr + 3; i++) {
            for (int j = sc; j < sc + 3; j++) {
                if (mat[i][j] == digit) {
                    return false;
                }
            }
        }

        return true;
    }

    boolean sudokuBacktrack(int mat[][], int n, int row, int col) {
        // base case
        if (row == n) {
            return true;
        }
        int nextRow = row;
        int nextCol = col + 1;
        if (nextCol == n) {
            nextRow = row + 1;
            nextCol = 0;
        }
        // skip filled cells
        if (mat[row][col] != 0) {
            return sudokuBacktrack(mat, n, nextRow, nextCol);
        }

        // try digits 1 to 9
        for (int digit = 1; digit <= 9; digit++) {
            if (sudokuCheck(mat, row, col, digit, n)) {
                mat[row][col] = digit;
                if (sudokuBacktrack(mat, n, nextRow, nextCol)) {
                    return true;
                }
                // backtrack
                mat[row][col] = 0;
            }
        }
        return false;
    }
     public void solveSudoku(int[][] mat) {
        sudokuBacktrack(mat, 9, 0, 0);
    }


    //horse move

    boolean helperKnightTour(int grid[][], int row, int col, int n, int expVal) {
        if(row < 0 || col < 0 || row >= n || col >= n || grid[row][col] != expVal) {            return false;
        }
        if(expVal == n * n - 1) {
            return true;
        }
        boolean ans1 = helperKnightTour(grid, row-2, col+1, n, expVal+1);
        boolean ans2 = helperKnightTour(grid, row-1, col+2, n, expVal+1);
        boolean ans3 = helperKnightTour(grid, row+1, col+2, n, expVal+1);
        boolean ans4 = helperKnightTour(grid, row+2, col+1, n, expVal+1);
        boolean ans5 = helperKnightTour(grid, row+2, col-1, n, expVal+1);
        boolean ans6 = helperKnightTour(grid, row+1, col-2, n, expVal+1);
        boolean ans7 = helperKnightTour(grid, row-1, col-2, n, expVal+1);
        boolean ans8 = helperKnightTour(grid, row-2, col-1, n, expVal+1);
        return ans1 || ans2 || ans3 || ans4 || ans5 || ans6 || ans7 || ans8;
    }

    public boolean checkValidGrid(int[][] grid) {
        if(grid[0][0] != 0) {
            return false;
        }
        return helperKnightTour(grid, 0, 0, grid.length, 0);
    }

   //valid parenthiese
    void validParenthesisHelper(String str, int mr, HashSet<String> set) {
        if(mr == 0) {
            if(getMin(str) == 0) {
                set.add(str);
            }
            return;
        }

        for(int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            // remove only brackets
            if(ch != '(' && ch != ')') {
                continue;
            }
            // avoid duplicate removals
            if(i > 0 && str.charAt(i) == str.charAt(i - 1)) {
                continue;
            }
            String left = str.substring(0, i);
            String right = str.substring(i + 1);
            String newStr = left + right;
            validParenthesisHelper(newStr, mr - 1, set);
        }
    }
      public List<String> validParenthesis(String s) {
        HashSet<String> set = new HashSet<>();
        int minRemoval = getMin(s);
        validParenthesisHelper(s, minRemoval, set);
        List<String> ans = new ArrayList<>(set);
        Collections.sort(ans);
        return ans;
    }


    int getMin(String str) {
        Stack<Character> st = new Stack<>();
        for(int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if(ch == '(') {
                st.push(ch);
            }
            else if(ch == ')') {
                if(st.isEmpty()) {
                    st.push(ch);
                }
                else if(st.peek() == '(') {
                    st.pop();
                }

                else {
                    st.push(ch);
                }
            }
        }

        return st.size();
    }
    static void storePalindromes(String str, int index, List<String> list) {

        // base case
        if (index == str.length()) {
            return;
        }

        // check all substrings starting from current index
        for (int i = index; i < str.length(); i++) {//i can make it recursive also

            String sub = str.substring(index, i + 1);

            // if palindrome then store in list
            if (isPalindrome(sub)) {
                list.add(sub);
            }
        }

        // recursive call for next index
        storePalindromes(str, index + 1, list);
    }

    //another way(both are same)
     public List<String> allPalindromes2(String str) {
        List<String> list = new ArrayList<>();
        for (int i = 0; i < str.length(); i++) {
            findPalindrome2(str, i, list);
        }

        return list;
    }

    void findPalindrome2(String str, int start, List<String> list) {
        for (int end = start; end < str.length(); end++) {
            if (isPalindrome(str)) {
                list.add(str.substring(start, end + 1));
            }
        }
    }


    static boolean isPalindrome(String str) {
        int left = 0;
        int right = str.length() - 1;
        // check palindrome
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    //get all palindrom partition 

     static void getAllPalindromePartition(String s,
                                          List<List<String>> ans,
                                          List<String> partition) {

        // base case
        if (s.length() == 0) {
            ans.add(new ArrayList<>(partition));
            return;
        }

        // generate substrings
        for (int i = 0; i < s.length(); i++) {
            String str = s.substring(0, i + 1);
            // if palindrome
            if (isPalindrome(str)) {
                partition.add(str);
                // recursive call
                getAllPalindromePartition(s.substring(i + 1),ans,partition
                );
                // backtrack
                partition.remove(partition.size() - 1);
            }
        }
    }

    public List<List<String>> partition(String s) {
        List<List<String>> ans = new ArrayList<>();
        getAllPalindromePartition(
                s,
                ans,
                new ArrayList<>()
        );
        return ans;
    }
  





    
    

    



    public static void main(String[] args) {
        // String str="abc";
        // subset(str,"",0);
        // permutationStr(str, "");


        // int n=4;
        // char board[][]=new char[n][n];
        // for(int i=0;i<n;i++){
        //     for(int j=0;j<n;j++){
        //         board[i][j]='.';
        //     }
        // }
        // System.out.println(Arrays.deepToString(board));
        // nQueens(board, 0);

        char ch[]={'2','g'};
        int []arr={1,2,3};
        String str="abc";
        // System.out.println(new String(ch));
        // System.out.println(ch.toString());
        // System.out.println(str.toCharArray());
        // System.out.println(arr.toString());
        // System.out.println(new String(arr));

//         | Type     | `println()` Output |
// | -------- | ------------------ |
// | `char[]` | prints characters  |
// | `int[]`  | memory reference   |
// | `String` | actual text        |


        
    }
    
}
