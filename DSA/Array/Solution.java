import java.util.*;

public class Solution {
    static public int[] twoSum(int[] nums, int target) {
        int n=nums.length;
        int arr[]=new int[2];
        for(int i=0;i<n-1;i++){
            for(int j=1+i;j<n;j++){
                if(nums[i]+nums[j]==target){
                    arr[0]=i;
                    arr[1]=j;
                    return arr;

                }
            }

        }
        return arr;
        
    }
    public static int[] twoSum2(int[] numbers, int target) {
        int n=numbers.length;
        int i=0;
        int j=n-1;
        int arr[]=new int[2];
        while(i<j){
            if(numbers[i]+numbers[j]==target){
                arr[0]=i+1;
                arr[1]=j+1;
                return arr;

            }
            if(numbers[i]+numbers[j]<target){
                i++;
            }
            else{
                j--;
            }

        }
        return arr;
        
    }
    public List<List<Integer>> threeSum(int[] nums) {
        //brute force
//     Set<List<Integer>> temp = new HashSet<>();
//     int n=nums.length;
//     for(int i=0;i<n-1-1;i++){
//         for(int j=1+i;j<n-1;j++){
//             for(int k=1+j;k<n;k++){
//                 if(nums[i]+nums[j]+nums[k]==0){
//                     List<Integer> l=new ArrayList<>();
//                     l.add(nums[i]);
//                     l.add(nums[j]);
//                     l.add(nums[k]);
//                     Collections.sort(l);
//                     temp.add(l);
//                 }

//             }
//         }
        
//     }
// return new ArrayList<>(temp);
//2 pointer approach
List<List<Integer>> result=new ArrayList<>();
        List<Integer> list;
        Arrays.sort(nums);
        int n=nums.length;
        for(int i=0;i<n;i++){
            while(i>0 && i<n && nums[i]==nums[i-1]){
                i++;
            }
            int j=i+1;int k=n-1;
            while(j<k){
                int sum=nums[i]+nums[j]+nums[k];
                if(sum==0){
                    list=new ArrayList<>();
                    list.add(nums[i]);
                    list.add(nums[j]);
                    list.add(nums[k]);
                    result.add(list);

                    k--;
                    j++;
                    while(j<k && nums[j-1]==nums[j]){
                        j++;
                    }


                }
                else if(sum>0){
                    k--;
                }
                else {//sum<0
                j++;

                }
            }
        }
        return result;
        
    }

    
    public static int[] sortedSquares(int[] nums) {
        int n=nums.length;
        int left=0;
        int right=n-1;
        int arr[]=new int[n];
        for(int i=n-1;i>=0;i--){
            if(nums[left]*nums[left]<=nums[right]*nums[right]){
                arr[i]=nums[right]*nums[right];
                right--;
            }
            else{
                arr[i]=nums[left]*nums[left];
                left++;
            }
        }
        return arr;
        
    }
    public static void sortColors(int[] nums) {
        // Arrays.sort(nums);//simply sort first method
        int low=0;int high=nums.length-1;int m=0;
        while(m<=high){
            if(nums[m]==0){
                int temp=nums[m];
                nums[m]=nums[low];
                nums[low]=temp;
                low++;
                m++;


            }
            else if(nums[m]==1){
                m++;
            }
            else{//nums[m]==2
            int temp=nums[m];
            nums[m]=nums[high];
            nums[high]=temp;
            high--;
                
            }
        }

        
        
    }
    public static String reverseWords(String s) {
        s=s.trim();
        String str[]=s.split("\\s+");
        StringBuilder sb=new StringBuilder();
        for(int i=str.length-1;i>=1;i--){
            sb.append(str[i]+" ");

            
        }
        sb.append(str[0]);
        return sb.toString();
        
    }
    public static List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> result=new ArrayList<>();
        List<Integer> list;
        Arrays.sort(nums);
        for(int i=0;i<nums.length;i++){
            if(i>0 && nums[i]==nums[i-1]){
                continue;
            }
            for(int j=1+i;j<nums.length;j++){
                if(j>i+1 && nums[j]==nums[j-1]){
                    continue;
                }
                int k=j+1;int end=nums.length-1;
                while(k<end){
                    long sum=(long)nums[i]+nums[j]+nums[k]+nums[end];
                    if(sum==target){
                        list=new ArrayList<>();
                        list.add(nums[i]);
                        list.add(nums[j]);
                        list.add(nums[k]);
                        list.add(nums[end]);
                        result.add(list);
                        k++;
                        end--;
                        while(k<end && nums[k]==nums[k-1]){
                            k++;
                        }
                        // while(k<end && nums[end]==nums[end+1]){
                        //     end--;
                        // }


                    }
                    else if(sum<target){
                        k++;
                    }
                    else{
                        end--;
                    }
                }


            }
        }
        return result;
    }
     public static void moveZeroes(int[] nums) {
        // for(int i=0;i<nums.length;i++){
        //     for(int j=0;j<nums.length-i-1;j++){
        //         if(nums[j]==0){
        //             int temp=nums[j];
        //             nums[j]=nums[j+1];
        //             nums[j+1]=temp;
        //         }
        //     }
        // }
        //2nd way
        // int i=0;int j=0;
        // while(j<nums.length){
        //     if(nums[j]!=0){
        //         nums[i]=nums[j];
        //         i++;
        //         j++;

        //     }
        //     else{
        //         j++;
        //     }
        // }
        // while(i<nums.length){
        //     nums[i++]=0;
        // }
        int i=0;int j=0;
        while(j<nums.length){
            if(nums[j]!=0){
                int temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
                
                i++;
                j++;

            }
            else{
                j++;
            }
        }
        
        
    }
    public static int maxSubArray(int[] nums) {
        int sum=0;
        int MaxSubarray=Integer.MIN_VALUE;
        for(int i=0;i<nums.length;i++){
            sum+=nums[i];
            MaxSubarray=Math.max(MaxSubarray,sum);
            if(sum<0){
                sum=0;
            }
        }
        return MaxSubarray;
        
    }
    public static int findMinDiff(ArrayList<Integer> arr, int m) {
        // your code here
        int mind=Integer.MAX_VALUE;
        Collections.sort(arr);
        for(int i=0;i<arr.size()-m+1;i++){
            int min=arr.get(i);
            int max=arr.get(i+m-1);
            mind=Math.min(mind,max-min);
        }
        return mind;
        
        
        
    }
    public static  int search(int[] nums, int target) {
        int st=0;
        int end=nums.length-1;
        while(st<=end){
            int mid=st+(end-st)/2;
            if(nums[mid]==target){
                return mid;
            }
            if(nums[st]<=nums[mid]){//left part is sorted
            if(nums[st]<=target && target<=nums[mid]){
                end=mid-1;
            }
            else{
                st=mid+1;
            }
            }
            else{//right part is sorted
            if(nums[mid]<=target && target<=nums[end]){
                st=mid+1;
            }
            else{
                end=mid-1;
            }


            }


        }
        return -1;
        
    }
    public void nextPermutation(int[] nums) {
        int pivot = -1;

        // find pivot
        for (int i = nums.length - 2; i >= 0; i--) {
            if (nums[i] < nums[i + 1]) {
                pivot = i;
                break;
            }
        }

        // if no pivot
        if (pivot == -1) {
            reverse(nums, 0, nums.length - 1);
            return;
        }

        // find next greater element
        for (int i = nums.length - 1; i > pivot; i--) {
            if (nums[i] > nums[pivot]) {
                int temp = nums[i];
                nums[i] = nums[pivot];
                nums[pivot] = temp;
                break;
            }
        }

        // reverse suffix
        reverse(nums, pivot + 1, nums.length - 1);
    }

    void reverse(int[] nums, int st, int end) {
        while (st < end) {
            int temp = nums[st];
            nums[st] = nums[end];
            nums[end] = temp;
            st++;
            end--;
        }
    }
    public int maxProfit(int[] prices) {
        int buyShare=prices[0];
        int MaxProfit=0;
        for(int i=1;i<prices.length;i++){
            if(buyShare<prices[i]){
                int profit=prices[i]-buyShare;
                MaxProfit=Math.max(MaxProfit,profit);

            }
            else{
                buyShare=prices[i];

            }

        }
        return MaxProfit;
        
    }
    
    // DO NOT MODIFY THE LIST. IT IS READ ONLY
    public ArrayList<Integer> repeatedNumber(final List<Integer> A) {
        // Map<Integer,Integer> map=new HashMap<>();
        // ArrayList<Integer> result=new ArrayList<>();
        // for(int i=0;i<A.size();i++){
        //     map.put(A.get(i),map.getOrDefault(A.get(i),0)+1);
        // }
        // int missing=-1;
        // int repeating=-1;
        // for(int key=1;key<=A.size();key++){
            
        //     if(map.get(key)!=null && map.get(key)==2){
        //         repeating=key;
        //     }
        //     if(map.get(key)==null){
        //        missing=key;
        //     }
        //     if(repeating !=-1 && missing!=-1){
        //         break;
        //     }
            
        // }
        // result.add(repeating);
        // result.add(missing);
        // return result;
        
        
        
        // int n=A.size();
        // long sum=0;
        // long sqSum=0;
        // for(int i=0;i<A.size();i++){
        //     int value=A.get(i);
        //     sum+=value;
        //     sqSum+=(long)value*value;//int operation int =int 
        // }
        // long expectedsum=(n*(n+1))/2;
        // long Sqexectedsum=(n*(n+1)*(2*n+1))/6;
        // long diff=sum-expectedsum;//x-y
        // long Sqdiff=sqSum-Sqexectedsum;//(x+y)(x-y)
        // long sumAB=Sqdiff/diff;//x+y=
        // long repeated=(diff+sumAB)/2;//x
        // long missing=sumAB-repeated;
        // ArrayList<Integer> result = new ArrayList<>();
        // result.add((int)repeated);
        // result.add((int)missing);

        // return result;
        
        
          long n = A.size();
        int xr = 0;

        for(int i = 0; i < n; i++){
            xr = xr ^ A.get(i);
            xr = xr ^ (i + 1);
        }

        // finding rightmost set bit
//         int bitno = 0; 
// while(true){
//     if((xr & (1 << bitno)) != 0){
//         break;
//     }
//     bitno++;
// }
    //if we use above logic then it give bitno then we will have to find bimask but below give bitmask 
    //and  above If something goes wrong (for example xr becomes 0), the loop will run forever.
        int bitmask = xr & (-xr);

        int zero = 0;
        int one = 0;

        for(int i = 0; i < n; i++){
            if((A.get(i) & bitmask) != 0){
                // part of 1 club
                one = one ^ A.get(i);
            }
            else{
                // part of 0 club
                zero = zero ^ A.get(i);
            }
        }

        for(int i = 1; i <= n; i++){
            if((i & bitmask) != 0){
                // part of 1 club
                one = one ^ i;
            }
            else{
                // part of 0 club
                zero = zero ^ i;
            }
        }

        ArrayList<Integer> result = new ArrayList<>();

        int count = 0;
        for(int x : A){
            if(x == zero) count++;
        }

        if(count == 2){
            result.add(zero);
            result.add(one);
        }
        else{
            result.add(one);
            result.add(zero);
        }

        return result;

        
        
        
        
    }
    
     public int cntSubarrays(int[] arr, int k) {
        // code here
        int count=0;
        int prefixsum=0;
        Map<Integer,Integer> map=new HashMap<>();
        map.put(0,1);//this will handle when sum-k=0
        for(int i=0;i<arr.length;i++){
            prefixsum+=arr[i];
            int diff=prefixsum-k;
            if(map.containsKey(diff)){
                count+=map.get(diff);
            }
            map.put(prefixsum,map.getOrDefault(prefixsum,0)+1);
        }
        return count;
        
    }
    public int maxProduct(int[] nums) {
        // int n=nums.length;
        // int largestProduct=Integer.MIN_VALUE;
        // for(int i=0;i<n;i++){
        //     for(int j=i;j<n;j++){
        //         int product=1;
        //         for(int k=i;k<=j;k++){
        //             // System.out.print(nums[k]);
        //             product*=nums[k];

        //         }
        //         // System.out.println();
        //         largestProduct=Math.max(product,largestProduct);
        //     }

        // }
        // return largestProduct;
        //2nd method
        int n=nums.length;
        int leftProduct=1;
        int rightProduct=1;
        int maxProduct=Integer.MIN_VALUE;
        for(int i=0;i<n;i++){
            leftProduct *=nums[i];
            rightProduct *=nums[n-i-1];
            maxProduct=Math.max(leftProduct,rightProduct);
            if(leftProduct==0){
                leftProduct=1;
            }
            if(rightProduct==0){
                rightProduct=1;
            }
        }
        return maxProduct;

        
        
    }

    public int findMin(int[] nums) {
        int n=nums.length;
        int lp=0;
        int rp=n-1;
        int ans=Integer.MAX_VALUE;
        while(lp<=rp){
            int mid=lp+(rp-lp)/2;
            if(nums[lp]<=nums[mid]){
                ans=Math.min(ans,nums[lp]);
                lp=mid+1;


            }
            else{
                ans=Math.min(ans,nums[mid]);
                rp=mid-1;

            }
        }
        
        return ans;
        // //second approach
        //  int l = 0, r = nums.length - 1;

        // while(l < r){
        //     int mid = l + (r - l) / 2;

        //     if(nums[mid] > nums[r]){
        //         l = mid + 1;
        //     } 
        //     else{
        //         r = mid;
        //     }
        // }

        // return nums[l];
    }

static boolean pairInSortedRotated(int arr[], int target) {
        // Your code here
        int n=arr.length;
        int pivot=-1;
        for(int i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                pivot=i;
                break;
            }
        }
        
        if(pivot==-1){
            pivot=n-1;
        }
        int lp=(pivot+1)%n;
        int rp=pivot;
        while(lp!=rp){
            int sum=arr[lp]+arr[rp];
            if(sum==target){
                return true;
            }
            if(sum<target){
                lp=(lp+1)%n;
                
            }
            else{
                // rp=rp-1;
                // if(rp<0){
                //     rp=n-1;
                // }
                rp = (n + rp - 1) % n;
            }
        
        
    }
    return false;
}
 public int maxArea(int[] height) {
        int left=0;
        int right=height.length-1;
        int maxArea=0;
        while(left<right){
            int ht=Math.min(height[left],height[right]);
            int width=right-left;
            int area=ht*width;
            maxArea=Math.max(maxArea,area);
            if(height[left]<height[right]){
                left++;
            }
            else{
                right--;
            }



        }
        return maxArea;
    }

    public int kthSmallest(int[] arr, int k) {
        // Code here
        // Queue<Integer> pq=new PriorityQueue<>();
        // for(int i=0;i<arr.length;i++){
        //     pq.add(arr[i]);
            
        // }
        // int small=-1;
        // for(int i=0;i<k;i++){
        //     small=pq.remove();
            
        // }
        // return small;
        
        Queue<Integer> pq=new PriorityQueue<>(Collections.reverseOrder());
        for(int i=0;i<k;i++){
            pq.add(arr[i]);
        }
        for(int i=k;i<arr.length;i++){
            if(arr[i]<pq.peek()){
                pq.remove();
                pq.add(arr[i]);
                
            }
            
        }
        return pq.remove();
        
        
    }


    public ArrayList<Integer> getMinMax(int[] arr) {
        // code Here                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        int left=0;
        int right=arr.length-1;
        int min=Integer.MAX_VALUE;
        int max=Integer.MIN_VALUE;
        while(left<=right){
            if(arr[left]<arr[right]){
                min=Math.min(min,arr[left]);
                max=Math.max(max,arr[right]);
            }
            else{
                min=Math.min(min,arr[right]);
                max=Math.max(max,arr[left]);
                
            }
            left++;
            right--;
            
        }
        ArrayList<Integer> result=new ArrayList<>(Arrays.asList(min,max));
        return result;
    }
// User function Template for Java


    public static long sumBetweenTwoKth(long A[], long N, long K1, long K2) {
        // Your code goes here
        PriorityQueue<Long> pq1=new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Long> pq2=new PriorityQueue<>(Collections.reverseOrder());
        //max heap for first k1minimum elements
        for(int i=0;i<K1;i++){
            pq1.add(A[i]);
        }
        for(int i=(int)K1;i<N;i++){
            if(pq1.peek()>A[i]){
                pq1.remove();
                pq1.add(A[i]);
                
            }
        }
        //max for first k2 minumum elements
        for(int i=0;i<K2-1;i++){
            pq2.add(A[i]);
        }
        for(int i=(int)K2-1;i<N;i++){//because we don't need add k2th element
            if(pq2.peek()>A[i]){
                pq2.remove();
                pq2.add(A[i]);
                
            }
        }
        
        long sum1=0;
        long sum2=0;
        for(int i=0;i<K1;i++){
            sum1+=pq1.remove();
            
        }
        for(int i=0;i<K2-1;i++){
            sum2+=pq2.remove();
        }
        
        return sum2-sum1;
    }

    public List<List<String>> groupAnagrams1(String[] strs) {//O(n*k*ongk))
        Map<String,List<String>> map=new HashMap<>();
        for(int i=0;i<strs.length;i++){
            char arr[]=strs[i].toCharArray();
            Arrays.sort(arr);
            
            String str=new String(arr);
            System.out.println(str);
            if(map.containsKey(str)){
                map.get(str).add(strs[i]);

            }
            else{
                ArrayList<String> list=new ArrayList<>();
                list.add(strs[i]);
                map.put(str,list);

            }
        }
        return new ArrayList<>(map.values());

        
    }
    String getFreqStr(String str){
        char[] freqarr=new char[26];
        for(int i=0;i<str.length();i++){
            freqarr[str.charAt(i)-'a']++;
         }
         StringBuilder sb=new StringBuilder();
         for(int i=0;i<26;i++){
            if(freqarr[i]!=0){
                sb.append('a'+i);
                sb.append(freqarr[i]);


            }
         }
         return sb.toString();
    }
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String,List<String>> map=new HashMap<>();
        for(int i=0;i<strs.length;i++){
            String freqStr=getFreqStr(strs[i]);
            if(map.containsKey(freqStr)){
                map.get(freqStr).add(strs[i]);

            }
            else{
                ArrayList<String> list=new ArrayList<>();
                list.add(strs[i]);
                map.put(freqStr,list);

            }
        }
        System.out.println(map.values());
        return new ArrayList<>(map.values());

        
    }
    public ArrayList<int[]> mergeOverlap(int[][] arr) {
        // Code here
        ArrayList<int[]> result=new ArrayList<>();
            Arrays.sort(arr,(a,b)->a[0]-b[0]);
            int start=arr[0][0];//start;
            int end=arr[0][1];//end
            int temp[];
            for(int i=1;i<arr.length;i++){
                if(arr[i][0]<=end){
                    end=Math.max(end,arr[i][1]);
                    
                }
                else{
                    temp=new int[]{start,end};
                    result.add(temp);
                    start=arr[i][0];
                    end=arr[i][1];
                    
                }
            }
            temp=new int[]{start,end};
            result.add(temp);
            return result;
    }
     public static int minMergeOperations(int[] arr) {
        int i = 0;
        int j = arr.length - 1;
        int operations = 0;

        while (i < j) {
            if (arr[i] == arr[j]) {
                i++;
                j--;
            } else if (arr[i] < arr[j]) {
                arr[i + 1] += arr[i]; // Merge arr[i] with arr[i+1]
                i++;
                operations++;
            } else {
                arr[j - 1] += arr[j]; // Merge arr[j] with arr[j-1]
                j--;
                operations++;
            }
        }

        return operations;
    }
    
    boolean checkBig(String str1,String str2){
        // return (str1+str2)>(str2+str1)
        if(((str1+str2).compareTo(str2+str1))<0){
            return true;

        }
        else{
            return false;

        }
    }
    public String largestNumber(int[] nums) {
        String str[]=new String[nums.length];
        for(int i=0;i<nums.length;i++){
             str[i]=Integer.toString(nums[i]);
            
        }
                 
        for(int i=1;i<str.length;i++){
           String temp=str[i];
            int index=i-1;
            while(index>=0 && checkBig(str[index],temp)){
                str[index+1]=str[index];
                index--;


            }
            str[index+1]=temp;
        }
        if(str[0].equals("0"))
        {
            return "0";
        }
        StringBuilder sb=new StringBuilder();
        

        for(String x:str){
        
            sb.append(x);

        }


        return sb.toString();
    }
    public int removeDuplicates(int[] nums) {
        int left=0;
        int right=1;
        int k=1;
        while(right<nums.length){
            if(nums[left]!=nums[right]){
                nums[++left]=nums[right];
                k++;
            }
            right++;
        }
        return k;//or return left++;
        
    }

    public int removeDuplicatesAboveTwice(int[] nums) {
        int left=0;
        int right=1;
        int freq=1;
        while(right<nums.length){
            if(nums[left]==nums[right]){
                if(freq<2){
                    nums[++left]=nums[right];
                    freq++;
                }
            }
            else{
                freq=1;
                nums[++left]=nums[right];
            }
            right++;
        }
       
        return left+1;

        // if(nums.length <= 2) {
        //     return nums.length;
        // }

        // int left = 2;

        // for(int right = 2; right < nums.length; right++) {

            // compare with element two positions behind
        //     if(nums[right] != nums[left - 2]) {

        //         nums[left] = nums[right];
        //         left++;
        //     }
        // }

        // return left;
    }

 




    public static void main(String[] args) {
        System.out.println("imran khan young");
        
    }
    
}
