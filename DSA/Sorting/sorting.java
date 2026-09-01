import java.util.Arrays;

public class sorting {
    static void bubbleSort(int arr[]){
        for(int i=0;i<arr.length-1;i++){
            Boolean swap=false;
            for(int j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    swap=true;

                }


            }
            if(!swap){
                System.out.println("further sorted ");
                return;

            }
        }

    }
    static void selectionSort(int arr[]){
        for(int i=0;i<arr.length-1;i++){
            int min=i;
            for(int j=i+1;j<arr.length;j++){
                if(arr[min]>arr[j]){
                    min=j;

                }

            }
            int temp=arr[min];
            arr[min]=arr[i];
            arr[i]=temp;
        }
    }
    static void insertionSort(int arr[]){
        for(int i=1;i<arr.length;i++){
            int prev=i-1;
            int data=arr[i];
            while(prev>=0 && arr[prev]>data){
                arr[prev+1]=arr[prev];
                prev--;

            }
            arr[++prev]=data;
            
        }
    }
    static void print(int arr[]){
        for(int x:arr){
            System.out.print(x+ " ");
        }
        System.out.println();
        
    }
    static void countSort(int arr[]){
        int largest=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            largest=Math.max(largest, arr[i]);
        }
        int count[]=new int[largest+1];
        for(int i=0;i<arr.length;i++){
            count[arr[i]]++;
        }
        int x=0;
        for(int i=0;i<count.length;i++){
            while(count[i]>0){
                arr[x++]=i;
                count[i]--;
            }
        }
    }
    static void countSort2(int arr[]) {

    int largest = Integer.MIN_VALUE;
    int min = Integer.MAX_VALUE;

    // Find min and max
    for (int i = 0; i < arr.length; i++) {
        largest = Math.max(largest, arr[i]);
        min = Math.min(min, arr[i]);
    }

    // Count array size based on range
    int count[] = new int[largest - min + 1];

    // Store frequency
    for (int i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // Prefix sum
     // Change count[i] so that count[i] now contains
     // actual position of this digit in output[]
    for (int i = 1; i < count.length; i++) {
        count[i] = count[i] + count[i - 1];
    }

    int output[] = new int[arr.length];

    // Build output array (stable sort)
    for (int i = arr.length - 1; i >= 0; i--) {

        output[count[arr[i] - min] - 1] = arr[i];

        count[arr[i] - min]--;
    }

    System.out.println(Arrays.toString(output));
}
//merge sort
static void merge(int arr[],int si,int mid,int ei){
    int temp[]=new int[ei-si+1];
    int i=si;
    int j=mid+1;
    int x=0;//for temp;
    while(i<=mid && j<=ei){
        if(arr[i]<=arr[j]){
            temp[x]=arr[i];
            i++;
        }
        else{
            temp[x]=arr[j];
            j++;
        }
        x++;
    }
    while(i<=mid){
        temp[x++]=arr[i++];

    }
    while(j<=ei){
        temp[x++]=arr[j++];
    }

    for(int e:temp){
        arr[si++]=e;
    }
}
static void mergeSort(int arr[],int si,int ei){
    if(si<ei){
        int mid=si+(ei-si)/2;
        mergeSort(arr, si, mid);
        mergeSort(arr, mid+1, ei);
        merge(arr,si,mid,ei);

    }
}

static int LomutoPartition(int arr[], int si, int ei) {

        int pivot = ei;

        int left = si - 1;
        int right = si;

        while (right < ei) {

            if (arr[right] <= arr[pivot]) {

                left++;

                int temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
            }

            right++;
        }

        int temp = arr[pivot];
        arr[pivot] = arr[left + 1];
        arr[left + 1] = temp;

        return left + 1;
    }
   static int hoarePartition(int arr[],int si,int ei){
    int pivot=arr[si];
    int i=si-1;
    int j=ei+1;
    while(i<j){
        do { 
            i++;
            
        } while (arr[i]<pivot);
        do { 
            j--;
        } while (arr[j]>pivot);

        if(i>=j){
            return j;
        }
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;

    }
    return -1;//this will never happen

   }

    static void quickSort(int arr[], int si, int ei) {

        if (si < ei) {
            // int pivot = LomutoPartition(arr, si, ei);
            int pivot=hoarePartition(arr, si, ei);
            quickSort(arr, si, pivot - 1);
            quickSort(arr, pivot + 1, ei);
        }
    }

    //radixSort
    static void countSortForRS(int arr[],int n,int place){
        int output[]=new int[n];
        int count[]=new int[10];//since we have to find count digits (0-9)
        int i;
        for( i=0;i<n;i++){
            count[(arr[i]/place)%10]++;
        }

        for(i=1;i<10;i++){
            count[i]+=count[i-1];
        }

        for(i=n-1;i>=0;i--){
            output[count[(arr[i]/place)%10]-1]=arr[i];
            count[(arr[i]/place)%10]--;
        }

        for(i=0;i<n;i++){
            arr[i]=output[i];
        }


    }
    static void readixSort(int arr[],int n){
        boolean isNegative=false;
        for(int i=0;i<n;i++){
            if(arr[i]<0){
                isNegative=true;
                break;
            }
        }
        
        int min=0;
        if(isNegative){
            min=Arrays.stream(arr).min().getAsInt();
            for(int i=0;i<n;i++){
                arr[i]-=min;//-(-) will be +
            }
        }
        int max=Arrays.stream(arr).max().getAsInt();

        for(int place=1;max/place>0;place*=10){
            countSortForRS(arr,n,place);

        }
        for(int i=0;i<n;i++){
            arr[i]+=min;//this will reduce min so original array achieves
        }

    }

    

public boolean permutationPairSum(int k, int[] arr1, int[] arr2) {
   int n=arr1.length;   
   // Your code goes here.
   Arrays.sort(arr1);
   Arrays.sort(arr2);
   for(int i=0;i<n/2;i++){
      int temp=arr2[i];
      arr2[i]=arr2[n-1-i];
      arr2[n-1-i]=temp;  
  
   }
   
   for(int i=0;i<n;i++){
       if(arr1[i]+arr2[i]<k){
        return false;
    }
   }
   return true;
        
}

 public static  void MergeArr(int arr1[],int arr2[]){
  int m=arr1.length;
  int n=arr2.length;
  int left=m-1;//for arr1
  int right=0;//for arr2
  while(left<m && right<n){
      if(arr1[left]>arr2[right]){
      int temp=arr1[left];
        arr1[left]=arr2[right];
        arr2[right]=temp;
        left--;
        right++;


    }
    else{
        break;
    }

  }
        Arrays.sort(arr1);
        Arrays.sort(arr2);
}


    static int mergeForIC(int arr[],int si,int mid,int ei){
        int temp[]=new int[ei-si+1];
        int i=si;
        int j=mid+1;
        int x=0;
        int count=0;
        while(i<=mid && j<=ei){
            if(arr[i]<=arr[j]){
                temp[x]=arr[i++];
            }
            else{
                count+=(mid-i+1);
                temp[x]=arr[j++];
            }
            x++;
        }
        while(i<=mid){
            temp[x++]=arr[i++];
        }
        while(j<=ei){
            temp[x++]=arr[j++];
        }
        for(int element:temp){
            arr[si++]=element;
        }
        return count;
        
    }
    static int mergeSortForIC(int arr[],int si,int ei){
        
        if(si<ei){
            int mid=si+(ei-si)/2;
            int leftCount=mergeSortForIC(arr,si,mid);
            int rightCount=mergeSortForIC(arr,mid+1,ei);
            int invCount= mergeForIC(arr,si,mid,ei);
            return leftCount+rightCount+invCount;
        }
        return 0;
    }
    static int inversionCount(int arr[]) {
        // Code Here
        // int n=arr.length;
        // int count=0;
        // for(int i=0;i<n-1;i++){
        //     for(int j=i+1;j<n;j++){
        //       if(arr[i]>arr[j]){
        //           count++;
        //       }
        //     }
            
        // }
        // return count;
        return mergeSortForIC(arr,0,arr.length-1);
        
        
        
    }
    public static void main(String[] args) {
        int arr[]={9,3,2,11,2,4};
        // print(arr);
        // bubbleSort(arr);
        // selectionSort(arr);
        // insertionSort(arr);
        // Arrays.sort(arr);
        // countSort(arr);
        // countSort2(arr);
        print(arr);

        // mergeSort(arr,0,arr.length-1);
        // quickSort(arr, 0,arr.length-1);
        readixSort(arr, arr.length);
        print(arr);


        
    }
    
}
