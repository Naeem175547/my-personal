import javax.lang.model.util.ElementScanner14;
import javax.swing.plaf.basic.BasicInternalFrameUI.InternalFramePropertyChangeListener;

public class array{
    public static void pair(int arr[]) {
        int c=0;
        for(int i=0;i<arr.length;i++){
            for(int j=i+1;j<arr.length;j++){
                System.out.println((arr[i]+","+ arr[j]));
                c++;

            }
        }
        System.out.println("total pair"+c);
        
    }
    //sub array
    /**
     * 
     */
    public static void subarray(int arr[]){
        for(int i=0;i<arr.length;i++){
            for(int j=i;j<arr.length;j++){
                for(int a=i;a<=j;a++){
                    System.out.print(arr[a]);
                    }
                    System.out.println();
                }
            }
        }
     // sum of all sun array
     public static void subarray_sum(int arr[]){
        int sum=0;
        for(int i=0;i<arr.length;i++){
            for(int j=i;j<arr.length;j++){
                
                for(int a=i;a<=j;a++){
                   // System.out.print(arr[a]);
                    sum+=arr[a] ;
                    }
                    
                }
            }
            System.out.println(sum);
          
        }   
    // max sub array
    public static void subarray_max_sum(int arr[]){
        int max_sum=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            for(int j=i;j<arr.length;j++){
                int sum=0;
                for(int a=i;a<=j;a++){
                   // System.out.print(arr[a]);
                    sum+=arr[a]; 
                    }
                    if(sum>max_sum){
                        max_sum=sum;
                    }
                    //
                }
            }
            System.out.println(max_sum);
        }
    

    // sub array sum and max _sum by prefix array
    public static void subarray_sum_and_max_sum(int arr[]){
        int sum=0;
        int max_sum=Integer.MIN_VALUE;
        //prefix array
        int prefix_arr[]=new int[arr.length];
        prefix_arr[0]=arr[0];
        for(int i=1;i<arr.length;i++){
            prefix_arr[i]=prefix_arr[i-1]+arr[i];
        }
        for(int i=0;i<arr.length;i++){
                int start=i;
            for(int j=i;j<arr.length;j++){
                int end=j;
                sum+=start==0?prefix_arr[end]:prefix_arr[end]-prefix_arr[start-1];
                //if you want to know what is the max_subarray then you can know 


            }

        }
        print(prefix_arr);
        System.out.println(sum);
    }
    //KADANE"S ALGORITHM
    public static void kdanes_algo(int arr[]){
        int max_subarray=Integer.MIN_VALUE;
        int c_s=0;
        for(int i=0;i<arr.length;i++){
            c_s=c_s+arr[i];
            if(c_s<0){
                c_s=0;
            }
            max_subarray=(int)Math.max(max_subarray,c_s);

        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        System.out.println(c_s);
    }
    //Trapinng rainwater
    public static void Trapinng_rainwater(int height[]){
        int n=height.length;
        //auxiliary array(helper array)
        //left max boundary
        int left_max[]=new int[n];
        left_max[0]=height[0];
        for(int i=1;i<n;i++){
            left_max[i]=Math.max(left_max[i-1], height[i]);
        }
        //rigt max boundary
        
        int right_max[]=new int[n];
        right_max[n-1]=height[n-1];
        for(int i=n-2;i>=0;i--){
            right_max[i]=Math.max(right_max[i+1], height[i]);
    }
    int total_water_trap=0;
    for(int a=0;a<n;a++){
        int water_level=Math.min(left_max[a],right_max[a]);
        total_water_trap+=water_level-height[a];

    }
    
    System.out.println();
    
    System.out.println(total_water_trap);
}
//buy and sell stock and know what is maxprofid
    public static void buyandsell_stock(int prices[]){
        int bp=Integer.MAX_VALUE;
        int max_profit=0;
        for(int i=0;i<prices.length;i++){
            if(bp<prices[i]){
                int profit=prices[i]-bp;
                max_profit=Math.max(max_profit, profit);
            }else{
                bp=prices[i];
            }
        }
        System.out.println(max_profit);
    }
    public static void revise(int arr[]){
        arr[1]=23;
    }
    //linear seach
    public static void linear_search(int arr[],int val, int after)
    {
        for(int i=after;i<arr.length;i++){
            if(arr[i]==val){
            System.out.println("value is find index no "+i);
            return;}
        }
        System.out.println("value is not find");
    }
    public static void max_no(int arr[]){
        int max=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            if(max<arr[i]){
                max=arr[i];
            }
        }
        System.out.println("max val is "+max);
    }
    //max value with recursion
    public static void max_value_recursion(int x[],int index,int max_val){
            if(x.length==index){
                System.out.println("max value is "+max_val);
            return;
            }
            if(max_val<x[index]){
                max_val=x[index];
            }
            max_value_recursion(x,index+1,max_val);


    }
    //binary search 
    public static void binary_search1(int x[],int val){
        int f=0;
        int e=x.length-1;
        while(f<=e){
            int mid=(f+e)/2;
            if(x[mid]==val){
            System.out.println("value is find index no"+mid);
            return;
            
            }
            else if(x[mid]<val)
            f=mid+1;
            else{
                e=mid-1;
            }
        } 
        System.out.println("value is not find");
    }
    public static void reverse_array(int arr[]){
        int f=0;
        int e=arr.length-1;
        while(f<e){
            int temp=arr[f];
            arr[f]=arr[e];
            arr[e]=temp;
            f++;
            e--;
        }
    }
    public static void print(int x[])
    {
        for(int i=0;i<x.length;i++)
        {
            System.out.print(x[i]+" ");
        }
    }
    public static void main(String[] args) {
        int x[]={2,5,3};
       
       // revise(x);
       //linear_search(x,2,1);
      //max_no(x);
      //max_value_recursion(x,0,43);
     //binary_search1(x, 5);
     //reverse_array(x);
     //sumarray(x)
    // subarray_sum(x);
     //subarray_max_sum(x);
     //subarray_sum_and_max_sum(x);
     //kdanes_algo(x);
     //Trapinng_rainwater(x);
     buyandsell_stock(x);
     
    


      


       
        
    }
}