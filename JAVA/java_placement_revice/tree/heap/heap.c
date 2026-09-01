#include<stdio.h>
#define N 5
int arr[N];
int idx=-1;
//min heap
void insertInMinHeap(int data){
    if(idx>=N-1){
        printf("head is full\n");
        return;
    }
    idx++;
    arr[idx]=data;
    int curr=idx;
    int parent=(curr-1)/2;
    while(curr>0 && arr[curr]<arr[parent]){
        
        int temp=arr[curr];
        arr[curr]=arr[parent];
        arr[parent]=temp;
        
       
        curr=parent;
        parent=(curr-1)/2;     

        
    }
    
}
int removeInMinHeap(){
    if(idx==-1){
        printf("heap is empty\n");
        return -1;

    }
    // int data=arr[0];
    // int temp=arr[0];
    // arr[0]=arr[idx];
    // arr[idx]=temp;
    // or
    int data=arr[0];
    arr[0]=arr[idx];
    idx--;
    heapify(0);
    
    return data;
}
void heapify(int root){
    int lc=2*root+1;
    int rc=2*root+2;
    int minIdx=root;
    if(lc<=idx && arr[lc]<arr[minIdx]){
        minIdx=lc;

    }
    if(rc<=idx && arr[rc]<arr[minIdx]){
        minIdx=rc;

        
    }
    if(minIdx!=root){
        int temp=arr[root];
        arr[root]=arr[minIdx];
        arr[minIdx]=temp;
        heapify(minIdx);
    }
}
int main(){
    insertInMinHeap(1);
    insertInMinHeap(2);
    insertInMinHeap(4);
    insertInMinHeap(5);
    insertInMinHeap(30);
    // insertInMinHeap(100);
    printf("%d\n",removeInMinHeap());
    printf("%d\n",removeInMinHeap());
    printf("%d\n",removeInMinHeap());
    printf("%d\n",removeInMinHeap());
    printf("%d\n",removeInMinHeap());



}

// ✅ Why macros don’t need address?

// Because macros are not functions.
// They are text replacements done by the preprocessor before compilation.