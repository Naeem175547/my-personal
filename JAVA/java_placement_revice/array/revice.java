
public class revice{
   static void fun(int arr[][],int target){       
    int row=arr.length-1;
    int col=0;
    while(row>=0 && col<=arr.length-1){
        if(arr[row][col]==target){
            System.out.println("Value found");
            return;
        }
        else if(arr[row][col]>target){
            row--;

        }
        else{
            col++;
        }
    }
    System.out.println("Not found");
   
   

   
            
    }

   static  int recFun(int arr[],int max,int i){
        if(i==arr.length){
            return max;
        }
        System.out.println(i);
        return recFun(arr, arr[i]>max?arr[i]:max,++i);
    

    }
   static  void print(int arr[]){
    System.out.println();
        for(int x:arr){
            System.out.print(x+" ");
        }
        System.out.println();
    }
    static  void print(int arr[][]){
        System.out.println();
        for(int[] x:arr){
            for(int y:x){
                System.out.print(y+" ");
            }
            System.out.println();
        }
        System.out.println();
    }
    public static void main(String[] args) {
        // System.out.println("irma");
        int arr[]={7,1,5,3,6,4};
        // System.out.println(recFun(arr,Integer.MIN_VALUE,0));
        // print(arr);
        // // fun(arr);

        // Arrays.sort(arr);
        // print(arr);
        // fun(arr);

        int[][] arr2={
            {1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}
            
        };
        print(arr2);
        fun(arr2,111);
        print(arr2);
    }
}