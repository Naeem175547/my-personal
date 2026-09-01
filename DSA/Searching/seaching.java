
import java.util.*;

public class seaching {
    

     public static int lowerBound(int []arr, int n, int x) {
        // Write your code here
        // for(int i=0;i<n;i++){
        //     if(arr[i]>=x){
        //         return i;
        //     }
        // }
        // return n;

        //2nd method
        int si=0;
        int ei=n-1;
        int ans=n;
        while(si<=ei){
            int mid=si+(ei-si)/2;//left bias
            // int mid=ei-(ei-si)/2;//right bias
            if(arr[mid]>=x){
                ans=mid;
                ei=mid-1;


            }
            else{
                si=mid+1;

            }
        }
        return ans;
    }
    public static int upperBound(int []arr, int x, int n){
        // Write your code here.
        int ans=n;
        int si=0;
        int ei=n-1;
        while(si<=ei){
            int mid=si+(ei-si)/2;
            if(arr[mid]>x){
                ans=mid;
                ei=mid-1;
            }
            else{
                si=mid+1;
            }
        }
        return ans;
    }
    public int[] searchRange(int[] nums, int target) {
        // int si=-1;
        // int ei=-1;
        // for(int i=0;i<nums.length;i++){
        //     if(target==nums[i]){
        //         if(si==-1){
        //             si=ei=i;
        //         }
        //         else{
        //             ei=i;
        //         }
        //     }
            
        // }
        // return new int[]{si,ei};

        //2nd method
        int leftBound=findLeftBound(nums,nums.length,target);
        int rightBound=findRightBound(nums,nums.length,target);
        return new int[]{leftBound,rightBound};
        
    }
    public static int findLeftBound(int nums[],int n,int target){
        int si=0;
        int ei=n-1;
        int leftBound=-1;
        while(si<=ei){
            int mid=si+(ei-si)/2;
            if(nums[mid]==target){
                leftBound=mid;
                ei=mid-1;
            }
            else if(nums[mid]>target){
                ei=mid-1;
                
            }
            else{
                si=mid+1;
            }

        }
        return leftBound;


    }
    public static int findRightBound(int nums[],int n,int target){
        int si=0;
        int ei=n-1;
        int rightBound=-1;
        while(si<=ei){
            int mid=si+(ei-si)/2;
            if(nums[mid]==target){
                rightBound=mid;
                si=mid+1;
            }
            else if(nums[mid]>target){
                ei=mid-1;
                
            }
            else{
                si=mid+1;
            }

        }
        return rightBound;
        
    }

     public int NumberOfSmallerAndEqual(int[] A, int B) {
        int si=0;
        int ei=A.length-1;
        int ans=-1;
        while(si<=ei){
            int mid=si+(ei-si)/2;
            if(A[mid]>B){
                ans=mid;
                ei=mid-1;
            }
            else{
                si=mid+1;
            }
        }
       if(ans==-1)
       return A.length;
       return ans;
    }
    public boolean searchMatrix(int[][] matrix, int target) {
        int m=matrix.length;
        int n=matrix[0].length;
        int row=m-1;
        int col=0;
        while(row>=0 && col<n){
            if(matrix[row][col]==target){
                return true;
            }
            else if(matrix[row][col]>target){
                row--;
            }
            else{
                col++;
            }
            
        }
        return false;
        
    }
     public int searchInsert(int[] nums, int target) {
        int si=0;
        int ei=nums.length-1;
        int ans=-1;
        while(si<=ei){
            int mid=si+(ei-si)/2;
            if(nums[mid]>=target){
                ans=mid;
                ei=mid-1;
            }
            else{
                si=mid+1;
            }
        }
        if(ans==-1){
            return nums.length;
        }
        return ans;
        
    }
     public int arrangeCoins(int n) {
        //brute force
        // int remVal=n;
        // int i=1;
        // int count=0;
        // while(remVal>0){            
        //     remVal-=i;
        //     if(remVal>=0){
        //         count++;
        //     }
        //     i++;
        // }
        // return count;
        //brute force same as above but we will go 1+2+3 like this
        // int sum=0;
        // int i=1;
        // int  count=0;
        // while((sum+i)<=n){
        //     count++;
        //     sum=sum+i;
        //     i++;    
            


        // }
        // return count;

        // now optimized bc because here k(k+1)/2<=n.so ans is k no of time loop is running
        int sv=1;
        int ev=n;
        int ans=0;//count
        while(sv<=ev){
            int mid=ev-(ev-sv)/2;
            long temp=(long)mid*(mid+1)/2;
            if(temp<=n){
                ans=mid;
                sv=mid+1;

            }
            else{
                ev=mid-1;
            }
        }
        return ans;

                
    }

    public int findPeakElement(int[] nums) {
        //brute force
        // for(int i=0;i<nums.length;i++){
        //     if((i==0 || nums[i]>nums[i-1]) && (i==nums.length-1 || nums[i]>nums[i+1])){
        //         return i;
        //     }

        // }
        // return 0;
        int n=nums.length;
        int si=0;
        int ei=n-1;
        while(si<=ei){
            int mid=si+(ei-si)/2;
            
            if((mid==0 || nums[mid-1]<nums[mid]) && (mid==n-1 || nums[mid]>nums[mid+1])){
                return mid;
            }
            else if(nums[mid]<nums[mid+1]){
                si=mid+1;

            }
            else{
                ei=mid-1;
            }

            
        }
         return 0;
    }
    //cocoEating 
    boolean canEat(int piles[],int h,int k){
            long hoursTook=0;
            for(int val:piles){
                // hoursTook+=(int)Math.ceil((double)val/k);
                hoursTook += (val + k - 1) / k;

            }
            return hoursTook<=h;

        }
    public int minEatingSpeed(int[] piles, int h) {
         
        //brute force
        // int k=1;
        // while(true){
        // long hoursTook=0;
        //     for(int i=0;i<piles.length;i++){
        //         hoursTook+=(int)Math.ceil((double)piles[i]/k);
        //     }
        //     if(hoursTook<=h){
        //         break;
        //     }
        //     k++;
        // }
        // return k;

        //binary search 1
        // int minSpeed=1;
        // int maxSpeed=Integer.MIN_VALUE;
        // for(int val:piles){
        //     if(maxSpeed<val){
        //         maxSpeed=val;
        //     }
        // }
        // int ans=-1;
        // while(minSpeed<=maxSpeed){
        //     int mid=minSpeed+(maxSpeed-minSpeed)/2;//k
        //     if(canEat(piles,h,mid)){
        //         ans=mid;
        //         maxSpeed=mid-1;
        //     }
        //     else{
        //         minSpeed=mid+1;
        //     }

        // }
        // return ans;

        //binary seach 2
        int minSpeed=1;
        int maxSpeed=Integer.MIN_VALUE;
        for(int val:piles){
            if(maxSpeed<val){
                maxSpeed=val;
            }
        }
        
        while(minSpeed<maxSpeed){
            int mid=minSpeed+(maxSpeed-minSpeed)/2;//k
            if(canEat(piles,h,mid)){
                maxSpeed=mid;
            }
            else{
                minSpeed=mid+1;
            }

        }
        return minSpeed;

    }
    //same for split array,book allocation ,painter problem
    boolean canSplit(int nums[],int k,int maxSumAllowed)
    {
        int count=1;
        int sum=0;
        for(int num:nums){
            if(sum+num<=maxSumAllowed){
                sum=sum+num;               

            }
            else{
                count++;
                sum=num;

            }

        }
        return count>k?false:true;
    }
    public int splitArray(int[] nums, int k) {
        int minv=0;
        int maxv=0;
        for(int  num:nums){
            minv=Math.max(minv,num);
            maxv+=num;
        }
        int ans=maxv;
        while(minv<=maxv){
            int mid=minv+(maxv-minv)/2;
            if(canSplit(nums,k,mid)){
                ans=mid;
                maxv=mid-1;
            }
            else{
                minv=mid+1;
            }
        }

        return ans;


        
    }
    //aggressive cows
    static boolean isPlace(int stalls[],int k,int minDist){
        int count=1;
        int lastPosition=0;
        for(int i=1;i<stalls.length;i++){
            if(stalls[i]-stalls[lastPosition]>=minDist){
                count++;
                lastPosition=i;
                if(count==k){
                    return true;
                }
            }
            
        }
        return false;
            //or // return count>=k;
    }
    public int aggressiveCows(int[] stalls, int k) {
        // code here
        Arrays.sort(stalls);
        int low=1;
        int high=stalls[stalls.length-1]-stalls[0];
        int ans=-1;
        while(low<=high){
            int mid=low+(high-low)/2;
            if(isPlace(stalls,k,mid)){
                ans=mid;
                low=mid+1;
            }
            else{
                high=mid-1;
            }
            
        }
        return ans;
    }
    static boolean binarySearchHelper(int arr[],int val){
        int start=0;
        int end=arr.length-1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(arr[mid]==val) return true;
            else if(arr[mid]>val) end=mid-1;
            else start =mid+1;
            
        }
        return false;
    }
    public ArrayList<Integer> commonElements(int[] a, int[] b, int[] c) {
        // ArrayList<Integer> result=new ArrayList<>();
        
        // // code here
        // for(int i=0;i<a.length;i++){
        //     if(i>0 && a[i]==a[i-1]) continue;
           
        //     int val=a[i];
             
        //     boolean exist2=binarySearchHelper(b,val);//exist int second arr or not
        //     boolean exist3=binarySearchHelper(c,val);
        //     if(exist2 && exist3){
        //         result.add(val);
        //     }
            
            
        // }
        // return result;
        
        //2nd approach
        ArrayList<Integer> result=new ArrayList<>();
        
        int i=0;
        int j=0;
        int k=0;
        while(i<a.length && j<b.length && k<c.length){
            if(a[i]==b[j]&& b[j]==c[k]){
                if(result.size()==0 || result.get(result.size()-1)!=a[i])
                result.add(a[i]);
                i++;
                j++;
                k++;
            }
            else if(a[i]<b[j]){
                i++;
            }
            else if(b[j]<c[k]){
                j++;
            }
            else{
                k++;
            }
            
        }
        return result;
        
    }

    public boolean findPair(int[] arr, int x) {
        // code here
        HashSet<Integer> hs=new HashSet<>();
        hs.add(arr[0]);
        for(int i=1;i<arr.length;i++){
            if(hs.contains(arr[i]+x) || hs.contains(arr[i]-x)) return true;
            hs.add(arr[i]);
            
        }
        return false;
        
    }

    int majorityElement(int arr[]) {
        // code here
        int count=0;
        int element=-1;
        int n=arr.length;
        for(int e:arr){
            if(count==0){
                element=e;count++;
            }
            else if(element==e){
                count++;
            }
            else{//element!=e
                count--;
            }
        }
        count=0;
        for(int e:arr){
            if(e==element){
                count++;
            }
        }
        if(count>n/2)return element;
        else return -1;
        
    }
    int countTriplets(int sum, int arr[]) {
        // code here
        int n=arr.length;
        Arrays.sort(arr);
        int count=0;
        int i=0;
        while(i<n-2){
            int j=i+1;
            int k=n-1;
            while(j<k){
                if(arr[i]+arr[j]+arr[k]<sum){
                    count+=k-j;
                    j++;
                
                    
                }
                else{
                    k--;                                                                                                                                                                                                                                                                                                                                                                                  
                }
                
            }
            i++;
        }
        return count;
        
    }
    static long findCost(int nums[],int cost[],int target){
        long resultCost=0;

        for(int i=0;i<nums.length;i++){
             long operation = Math.abs(nums[i] - target);
            resultCost+=operation*cost[i];
        }
        return resultCost;
    }
    public long minCost(int[] nums, int[] cost) {
        // long minCost=Long.MAX_VALUE;
        // for(int i=0;i<nums.length;i++){
        //     long currCost=0;
        //     for(int j=0;j<nums.length;j++){
        //         long operation=Math.abs(nums[i]-nums[j]);
        //          currCost+=operation*cost[j];
                

        //     }
        //     minCost=Math.min(currCost,minCost);
        // }
        // return minCost;


        long minCost=Long.MAX_VALUE;
        int left=Arrays.stream(nums).min().getAsInt();
        int right=Arrays.stream(nums).max().getAsInt();
        while(left<=right){
            int mid=left+(right-left)/2;
            long cost1=findCost(nums,cost,mid);
            long cost2=findCost(nums,cost,mid+1);

            minCost = Math.min(minCost, Math.min(cost1, cost2));

            if(cost1<cost2){
                right=mid-1;
            }
            else{
                left=mid+1;
                
            }



        }
        return minCost;
    }

    public boolean check(int[] nums) {
        int n=nums.length;
        int count=0;
        for(int i=0;i<n;i++){
            if(nums[i]>nums[(i+1)%n]){
                count++;
            }
            if(count>1) return false;


        }
        return true;

        
    }



    public ArrayList<Double> getMedian(int[] arr) {
        // code here
        //using insertionSort
        // ArrayList<Double> result=new ArrayList<>();
        // result.add((double)arr[0]);
        // for(int i=1;i<arr.length;i++){
        //     int j=i-1;
        //     int element=arr[i];
        //     while(j>=0 && arr[j]>element){
        //         arr[j+1]=arr[j];
        //         j--;
        //     }
        //     arr[j+1]=element;
        //     int length=i+1;
        //     int mid=length/2;
        //     if(length%2==0){
        //         result.add(((double)arr[mid-1]+arr[mid])/2);
                
                
        //     }
        //     else{
        //         result.add((double)arr[mid]);
                
        //     }
            
        // }
        // return result;
        
        //using Heap(PQ)
        
       PriorityQueue<Integer> minH = new PriorityQueue<>(); // min heap
        PriorityQueue<Integer> maxH =
                new PriorityQueue<>(Collections.reverseOrder()); // max heap

        ArrayList<Double> result = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {

            // insertion
            if (maxH.isEmpty() || arr[i] <= maxH.peek()) {
                maxH.add(arr[i]);
            } else {
                minH.add(arr[i]);
            }

            // balancing
            if (maxH.size() > minH.size() + 1) {
                minH.add(maxH.poll());
            }

            if (minH.size() > maxH.size()) {
                maxH.add(minH.poll());
            }

            // median
            double median;

            if (maxH.size() == minH.size()) {
                median = (maxH.peek() + minH.peek()) / 2.0;
            } else {
                median = (double) maxH.peek();
            }

            result.add(median);
        }

        return result;
        
        
        
    }


      
    public static void main(String[] args) {
        int arr[]={1,21,30,4,5};
        

        
    }
    
}
