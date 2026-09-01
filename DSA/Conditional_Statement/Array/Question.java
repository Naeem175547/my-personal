
public class Question {
    static int linearSearch(int x , int arr[]){
        for(int i=0;i<arr.length;i++){
            if(arr[i]==x){
                return i;
            }

        }
        return -1;
    }
    static void reverse(int arr[]){
        int n=arr.length;
        for(int i=0;i<(arr.length)/2;i++){
            int temp=arr[i];
            arr[i]=arr[n-1-i];
            arr[n-1-i]=temp;


        }
        

    }
    static void pair(int arr[]){
        for(int i=0;i<arr.length;i++){
            for(int j=1+i;j<arr.length;j++){
                System.out.print("("+arr[i]+","+arr[j]+')'+" ");
            }
            System.out.println();
        }
    }
    static void print(int arr[]){
        for(int x:arr){
            System.out.print(x+" ");

        }
        System.out.println();
    }
    static void printSubArray(int arr[]){
        int max=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            for(int j=0+i;j<arr.length;j++){
                int sum=0;
                for(int k=i;k<=j;k++){
                    
                    System.out.print(arr[k]+" ");
                    sum+=arr[k];


                }
                max=Math.max(max, sum);
                System.out.println();

            }
            System.out.println("next-------------------------");
            System.out.println("Maximum subarray"+max);

        }
    }
    static void MaxSubArray(int arr[]){//using kadan's
    int prefixArray[]=new int[arr.length];
    prefixArray[0]=arr[0];
    int maxSum=Integer.MIN_VALUE;
    for(int i=1;i<arr.length;i++){
        prefixArray[i]=prefixArray[i-1]+arr[i];


    }
    for(int i=0;i<arr.length;i++){
        int currSum=0;
        for(int j=i;j<arr.length;j++){
             currSum=i==0?prefixArray[j]:prefixArray[i]-prefixArray[i-1];

        }
        maxSum=Math.max(maxSum,currSum);
    }
    System.out.println(maxSum);

    }
    static void Kadans(int arr[]){
        int currSum=0;
        int maxSumArray=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            currSum+=arr[i];

            if(currSum<0){
                currSum=0;
            }
            maxSumArray=Math.max(maxSumArray, currSum);

        }

    }
    //Traping water
     static void trapingWater(int height[]){
        int trapingWater=0;
        int maxleftBoundary[]=new int[height.length];
        int maxRightBoundary[]=new int[height.length];
        maxleftBoundary[0]=height[0];
        for(int i=1;i<height.length;i++){
            maxleftBoundary[i]=Math.max(maxleftBoundary[i-1],height[i]);
        }
        maxRightBoundary[height.length-1]=height[height.length-1];
        for(int i=height.length-1-1;i>=0;i--){
            maxRightBoundary[i]=Math.max(maxRightBoundary[i+1],height[i]);
        }
        for(int i=0;i<height.length;i++){
            int leftMax=maxleftBoundary[i];
            int rightMax=maxRightBoundary[i];
            int waterLevel=Math.min(leftMax,rightMax)-height[i];
            waterLevel=waterLevel*1;
            trapingWater+=waterLevel;
        }
        System.out.println(trapingWater);
    }
     static void buyandSellStocks(int prices[]){
    
        int butyPrice=prices[0];
        int maxProfit=Integer.MIN_VALUE;
        int buyday=0;
        int sellday=0;
        for(int i=1;i<prices.length;i++){
            if(butyPrice<prices[i]){
                int profit=prices[i]-butyPrice;
                if(profit>maxProfit){
                    maxProfit=profit;
                    sellday=i;
                }


            }
            else{
                butyPrice=prices[i];
            }
        }
        System.out.println("if i buy at "+buyday+" day and sell at "+sellday+" day then i will get "+maxProfit+" max profit");
    }
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5};
        // print(arr);
        // reverse(arr);
        // print(arr);
        // pair(arr);
        // printSubArray(arr);
        // MaxSubArray(arr);
        // trapingWater(arr);
        buyandSellStocks(arr);

        

    }
    
}
