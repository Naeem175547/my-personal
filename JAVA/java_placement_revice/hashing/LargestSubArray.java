
import java.util.HashMap;

public class LargestSubArray {
    //largest sub array with 0 sum
    static  public int LargestSubArrayWithSumZero(int arr[]){
        // //brute force
        // int ans=0;
        // for(int i=0;i<arr.length;i++){
        //     int sum=0;
        //     int count=0;
        //     for(int j=i;j<arr.length;j++){
        //         sum+=arr[j];
        //         count++;
        //         if(sum==0 && count>ans){
        //             ans=count;
        //         }

        //     }

        // }
        // return ans;

        HashMap<Integer,Integer> hm=new HashMap<>();
        int sum=0;
        int len=0;
        for(int j=0;j<arr.length;j++){
            sum+=arr[j];
            if(hm.containsKey(sum)){
                len=Math.max(len,j-hm.get(sum));//len =j-i

            }
            else{
                hm.put(sum, j);

            }
        }
        return len;

        
    }
    static  public int LargestSubArrayWithSumK(int arr[],int k){
        //brute force
        int ans=0;
        for(int i=0;i<arr.length;i++){
            int sum=0;
            int count=0;
            for(int j=i;j<arr.length;j++){
                sum+=arr[j];
                count++;
                if(sum==k && count>ans){
                    ans=count;
                }

            }

        }
        return ans;

        
    }
    static  public int NoOfSubArrayWithSumK(int arr[],int k){
        
        HashMap<Integer,Integer> hm=new HashMap<>();
        hm.put(0, 1);
        int sum=0;
        int ans=0;
        for(int j=0;j<arr.length;j++){
            sum+=arr[j];
            if(hm.containsKey(sum-k)){//this means that only k has been made by subarray 
                ans+=hm.get(sum-k);

            }
            hm.put(sum,hm.getOrDefault(sum, 0)+1);
        }
        return ans;


        
    }
    public static void main(String[] args) {
        int arr[]={15,-2,2,8,1,7,10,23};
        System.out.println(LargestSubArrayWithSumZero(arr));
        System.out.println(LargestSubArrayWithSumK(arr, 10));
        System.out.println(NoOfSubArrayWithSumK(arr, 10));
        
    }
    
}
