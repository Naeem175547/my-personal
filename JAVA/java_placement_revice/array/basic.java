public class basic {
    static void print(int arr[]){
        for(int x:arr){
            System.out.print(x+" ");
        }
        System.out.println();
    }
    public static void main(String[] args) {
        int arr[]=new int[]{1,3,4,4,5};
        int arr2[]=arr;
        print(arr);
        print(arr2);
        arr[0]=100;
        print(arr);
        print(arr2);
        arr[1]=1100;
        print(arr);
        print(arr2);


    }

}