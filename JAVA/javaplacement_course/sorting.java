import java.util.*;
public class sorting {
    //bubble sort
    public static void bubble_sort(int arr[]){
        for(int i=0;i<arr.length-1;i++){
            for(int j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }


            }
        }
        print(arr);

    }
    //bubble sort with recursion
    public static void bubble_sort_rucursion(int arr[] ,int l_index,int s_index){
        if(l_index==0)
          return;
        if(s_index>l_index){
            if(arr[s_index]>arr[s_index+1]){
                int temp=arr[s_index];
                arr[s_index]=arr[s_index+1];
                arr[s_index+1]=temp;
            }
            bubble_sort_rucursion(arr, l_index, s_index+1);
        }else{
            bubble_sort_rucursion(arr, l_index-1, s_index);;
        }
        


    }
    //selection sort
    public static void selection_sort(int arr[]){
        for(int i=0;i<arr.length-1;i++){
            int max_pos=i;
            for(int j=1+i;j<arr.length;j++){
                if(arr[max_pos]>arr[j])
                max_pos=j;

            }
            int temp=arr[max_pos];
            arr[max_pos]=arr[i];
            arr[i]=temp;
        }
        print(arr);
    }
    //insertion sort
    public static void insertion_sort(int arr[]){
        for(int i=1;i<arr.length;i++){
            int curr=arr[i];
            int prev=i-1;
            while(prev>=0 && arr[prev]>curr){
                arr[prev+1]=arr[prev];
                prev--;
            }
            arr[prev+1]=curr;
        }
        
    }
    //countsort
    public static void count_sort(int arr[]){
        int max_no=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            max_no=Math.max(max_no,arr[i]);
        }
        int count[]=new int[max_no+1];
        for(int i=0;i<arr.length;i++){
              count[arr[i]]++;
        }
        ;
        //sorting
        int j=0;
        for(int i=0;i<count.length;i++){
            while(count[i]>0){
                arr[j]=i;
                j++;
                count[i]--;
            }

        }
        print(arr);
    }

    public static void print(int x[])
    {
        for(int i=0;i<x.length;i++)
        {
            System.out.print(x[i]+" ");
        }
    }
    public static void main(String[] args) {
        int arr[]={5,4,3,3,1};
       // bubble_sort(arr);
       // System.out.println();
        //selection_sort(arr);
        //System.out.println();
       // print(arr);
        //insertion_sort(arr);
        //System.out.println();
        //Arrays.sort(arr);
        //print(arr);
      //  count_sort(arr);
      bubble_sort_rucursion(arr, 0, arr.length);
      print(arr);

        
       
    }
    
}
