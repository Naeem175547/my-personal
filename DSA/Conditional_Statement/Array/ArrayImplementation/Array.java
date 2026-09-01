public class Array {
    public static void main(String[] args) {
        array arr=new array(5);
    }
    
}
class array{
    int arr[];
    int length;
    int size;
    array(int size){
        this.size=size;
        arr=new int[size];
        length=1;
    }
    void insert(int index,int data){
        if(length>=size){
            System.out.println("array is fulled");
            return;

        }
        if(length==0){
            arr[0]=data;
            length++;
            return;
        }
        for(int i=size-1-1;i>=index-1;i--){
            arr[i+1]=arr[i];



        }
        arr[index]=data;
        length++;
    }
    void print(){
        // for(int x:arr){
        //     System.out.print(x);
        // }
        for(int i=0;i<length;i++){
            System.out.println(i+"=="+arr[i]);

        }
    }
}
