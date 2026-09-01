public class question {
   static void printNTo1(int n){
        if(n==0)return;
        // System.out.print(n+" ");
        printNTo1(n-1);
        System.out.print(n+" ");
    }
     static int factorial(int n){
        if(n==1) return 1;
        // int result=factorial(n-1);
        // return n*result;
        return n*factorial(n-1);
    }
    static int SumOfFirstNNumber(int n){
        if(n==1) return 1;
        return n+SumOfFirstNNumber(n-1);
    }
    static int fibnacci(int n){
        if(n==0 || n==1){
            return n;
        }
        int fib1=fibnacci(n-1);
        int fib2=fibnacci(n-2);
        return fib1+fib2;
        
    }
    static boolean isSorted(int arr[],int i){
        // if(i==arr.length-1){
        //     return true;
        // }
        // return arr[i]<=arr[i+1]&&isSorted(arr, i+1);

        //2nd method
        if(i==arr.length-1) return  true;
        if(arr[i]>arr[i+1]){
            return false;
        }
        return isSorted(arr, i+1);
    }
    static int fisrtOccurence(int arr[],int key,int i){
        if(i==arr.length){
            return -1;
        }
        if(arr[i]==key){
            return i;
        }
        return fisrtOccurence(arr, key, i+1);
    }
    static int lastOccurence(int arr[],int key,int i){
        if(i==arr.length-1){
            return -1;
        }
       int isfound=lastOccurence(arr, key, i+1);
       if(isfound==-1 && arr[i]==key){
        return i;
       }
       return isfound;
    }
    static int pow(int x,int y){
        if(y==0){
            return 1;
        }
        return x*pow(x, y-1);

    }
    static int powOptimize(int x,int y){
        if(y==0){
            return 1;
        }
        // int halfPow1=powOptimize(x, y/2);
        // int halfPow2=powOptimize(x, y/2);
        // int pow=halfPow1*halfPow2;

        int halfPow=powOptimize(x, y/2);
        int pow=halfPow*halfPow;
        if(y%2!=0){
            pow=x*pow;

        }
        return pow;
    }
    static void removeDublicate(String str,int idx,boolean freq[],StringBuilder sb){
        if(idx==str.length()){
            System.out.println(sb);
            return;
        }
        char currChar=str.charAt(idx);
        if(freq[currChar-'a']==true){
            removeDublicate(str, idx+1, freq, sb);;


        }
        else{
            sb.append(currChar);
            freq[currChar-'a']=true;

            removeDublicate(str, idx+1, freq, sb);

        }

    }
    class Solution {

    boolean isCheckforFSP(int mat[][], int row, int col, int n, int m) {

        // left
        if (col != 0 && mat[row][col - 1] == 0) {
            return true;
        }

        // top
        if (row != 0 && mat[row - 1][col] == 0) {
            return true;
        }

        // right
        if (col != m - 1 && mat[row][col + 1] == 0) {
            return true;
        }

        // down
        if (row != n - 1 && mat[row + 1][col] == 0) {
            return true;
        }

        return false;
    }

    //find shortest path

    int findShortestPathHelper(int mat[][], int row, int col,int count, int n, int m) {

        // invalid condition
        if (row < 0 || col < 0 || row >= n || col >= m || mat[row][col] != 1) {
            return Integer.MAX_VALUE;
        }
        // unsafe cell
        if (isCheckforFSP(mat, row, col, n, m)) {
            return Integer.MAX_VALUE;
        }

        // reached last column
        if (col == m - 1) {
            return count;
        }

        
        

        // mark visited
        mat[row][col] = -1;

        int left = findShortestPathHelper(mat, row, col - 1,count + 1, n, m);
        int top = findShortestPathHelper(mat, row - 1, col,count + 1, n, m);
        int right = findShortestPathHelper(mat, row, col + 1,count + 1, n, m);
        int down = findShortestPathHelper(mat, row + 1, col,count + 1, n, m);
        // backtrack
        mat[row][col] = 1;
        return Math.min(left,Math.min(top,Math.min(right, down)));
    }
    int findShortestPath(int[][] mat) {
        int n = mat.length;
        int m = mat[0].length;
        int ans = Integer.MAX_VALUE;
        for (int i = 0; i < n; i++) {
            int val = findShortestPathHelper(mat, i, 0,1, n, m);
            ans = Math.min(ans, val);
        }
        return ans == Integer.MAX_VALUE ? -1 : ans;
    }
}
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5};
        // System.out.println("irman");
        // printNTo1(10);
        // System.out.println(factorial(5));
        // System.out.println(SumOfFirstNNumber(5));
        // System.out.println(fibnacci(2));
        // System.out.println(isSorted(arr, 0));
        // System.out.println(fisrtOccurence(arr, 4, 0));
        // System.out.println(lastOccurence(arr, 4, 0));
        // System.out.println(pow(2,5));
        // System.out.println(powOptimize(2,5));
        removeDublicate("appnacollege", 0, new boolean[26], new StringBuilder());

    }
    
}
