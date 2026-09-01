import java.util.ArrayList;

public class Heap {
    //heap sort for acending order
    static void heapify(int arr[],int i,int size){
        int lc=2*i+1;
        int rc=2*i+2;
        int maxId=i;
        if(lc<size && arr[maxId] < arr[lc]) {
            maxId=lc;

        }
        if(rc<size && arr[maxId] < arr[rc]) {
            maxId=rc;

        }
        if(i!=maxId){
            int temp=arr[i];
            arr[i]=arr[maxId];
            arr[maxId]=temp;
            heapify(arr, maxId,size);

        }


    }
    static void HeapSort(int arr[]){
        int size=arr.length;
        //step1-build maxHeap
        for(int i=size/2-1;i>=0;i--){
            heapify(arr,i,size);
        }

        //step 2-push largest at end

        for(int i=size-1;i>0;i--){
            //swap largest first with last
            int temp=arr[0];
            arr[0]=arr[i];
            arr[i]=temp;
            heapify(arr, 0, i);
        }
                                         
    }

    //heap sort for decending order
    static void heapify2(int arr[],int i,int size){
        int lc=2*i+1;
        int rc=2*i+2;
        int maxId=i;
        if(lc<size && arr[maxId] > arr[lc]) {
            maxId=lc;

        }
        if(rc<size && arr[maxId] > arr[rc]) {
            maxId=rc;

        }
        if(i!=maxId){
            int temp=arr[i];
            arr[i]=arr[maxId];
            arr[maxId]=temp;
            heapify2(arr, maxId,size);

        }


    }
    static void HeapSort2(int arr[]){
        int size=arr.length;
        //step1-build maxHeap
        for(int i=size/2-1;i>=0;i--){
            heapify2(arr,i,size);
        }

        //step 2-push largest at end

        for(int i=size-1;i>0;i--){
            //swap largest first with last
            int temp=arr[0];
            arr[0]=arr[i];
            arr[i]=temp;
            heapify2(arr, 0, i);
        }






    }
   static  void print(int arr[]){
        System.out.println();
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }
   
    public static void main(String[] args) {
        MaxHeap mh=new MaxHeap();
        mh.insert(2);
        mh.insert(3);
        mh.insert(4);
        mh.insert(5);
        mh.insert(10);
        mh.insert(1);
        mh.print();
        // System.out.println(mh.heap);

        int arr[]={2,1,4,29,0,3,3};
        print(arr);
        HeapSort(arr);
        print(arr);
        HeapSort2(arr);
        print(arr);


        

        
    }
    
    
    
    
}

class minHeap{
       ArrayList<Integer> heap=new ArrayList<>();
         void insert(int data){
            heap.add(data);
            int currIdx=heap.size()-1;//added element
            int parentIdx=(currIdx-1)/2;//currIdx's parentIdx index
            while(currIdx>0 && heap.get(parentIdx)>heap.get(currIdx)){//this is called upheapify we can make as we make heapify for down to up
                int temp=heap.get(parentIdx);
                heap.set(parentIdx, heap.get(currIdx));
                heap.set(currIdx,temp);
                currIdx=parentIdx;
                parentIdx=(currIdx-1)/2;
            }
        }
        void heapify(int idx){
            int lc=2*idx+1;
            int rc=2*idx+2;
            int minIdx=idx;
            if(lc<heap.size() && heap.get(minIdx)>heap.get(lc)){
                minIdx=lc;
            }
            if(rc<heap.size() && heap.get(minIdx)>heap.get(rc)){
                minIdx=rc;
            }
            if(idx!=minIdx){
            int temp=heap.get(minIdx);
            heap.set(minIdx,heap.get(idx));
            heap.set(idx,temp);
            heapify(minIdx);
            }
        }
        int remove(){
            int data=heap.get(0);
            //swap
            int temp=heap.get(0);
            heap.set(0,heap.get(heap.size()-1));
            heap.set(heap.size()-1,temp);
            heap.remove(heap.size()-1);
            heapify(0);
            return data;

    

        }
        int peek(){
            return heap.size()!=0?heap.get(0):-1;
        }
        void print(){
            while(!heap.isEmpty()){
                System.out.println(peek());
                remove();
            }
        }
}
class MaxHeap{
    private ArrayList<Integer> heap=new ArrayList<>();
    void insert(int data){
        heap.add(data);
        int currIdx=heap.size()-1;
        int parentIdx=(currIdx-1)/2;
        while(currIdx>0 && heap.get(currIdx)>heap.get(parentIdx)){
            int temp=heap.get(parentIdx);
            heap.set(parentIdx, heap.get(currIdx));
            heap.set(currIdx,temp);
            currIdx=parentIdx;
            parentIdx=(currIdx-1)/2;
        }
        
    }
    void heapify(int idx){
        int lc=2*idx+1;
        int rc=2*idx+2;
        int maxIdx=idx;
        if(lc<heap.size() && heap.get(maxIdx)<heap.get(lc)){
            maxIdx=lc;
        }
        if(rc<heap.size() && heap.get(maxIdx)<heap.get(rc)){
            maxIdx=rc;
        }
        if(idx!=maxIdx){
        int temp=heap.get(maxIdx);
        heap.set(maxIdx,heap.get(idx));
        heap.set(idx,temp);
        heapify(maxIdx);
        }
    }
    int remove(){
        int data=heap.get(0);
         
        int temp=heap.get(0);
        heap.set(0, heap.get(heap.size()-1));
        heap.set(heap.size()-1,temp);
        heap.remove(heap.size()-1);
        heapify(0);
        return data;

    }
    int peek(){
        return heap.size()!=0?heap.get(0):-1;
    }
    void print(){
        System.out.println(heap);
        while(!heap.isEmpty()){
            System.out.println(peek());
            remove();
        }
    }
}

