import  java.util.Stack;
public class findElements {
   static  void NestGreaterRight(int []arr){
        int nextgreater[]=new int[arr.length];
        Stack<Integer> s=new Stack<>();
        for(int i=arr.length-1;i>=0;i--){
            while(!s.isEmpty() && arr[i]>=arr[s.peek()]){
                s.pop();

            }
            if(s.isEmpty()){
                nextgreater[i]=-1;
                s.push(i);
            }else{
                nextgreater[i]=arr[s.peek()];
                s.push(i);
            }
        }
        print(nextgreater);
    }
    static  void NestGreaterLeft(int []arr){
        int prevgreater[]=new int[arr.length];
        Stack<Integer> s=new Stack<>();
        for(int i=0;i<arr.length;i++){
            while(!s.isEmpty() && arr[i]>=arr[s.peek()]){
                s.pop();

            }
            if(s.isEmpty()){
                prevgreater[i]=-1;
                s.push(i);
            }else{
                prevgreater[i]=arr[s.peek()];
                s.push(i);
            }
        }
        print(prevgreater);
    }
    static void NestSmallRight(int []arr){
        Stack<Integer> s=new Stack<>();
        int []nextsmall=new int[arr.length];
        for(int i=arr.length-1;i>=0;i--){
            while(!s.isEmpty() && arr[i]<=arr[s.peek()]){
                s.pop();
            }
            if(s.isEmpty()){
                nextsmall[i]=-1;
                s.push(i);
            }
            else{
                nextsmall[i]=arr[s.peek()];
                s.push(i);
            }

        }
        print(nextsmall);

        

    }
    static void NestSmallleft(int arr[]){
        Stack<Integer> s=new Stack<>();
        int []prevnext=new int[arr.length];
        for(int i=0;i<arr.length;i++){
            boolean flag=false;
            for(int j=i-1;j>=0;j--){
                if(arr[i]>arr[j]){
                    prevnext[i]=arr[j];
                    flag=true;
                    break;
                }


            }
            if(flag==false){
                prevnext[i]=-1;
            }


        }
        print(prevnext);
    }
   static  void print(int []arr){
        for (int i : arr) {
            System.out.print(i+" ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int []arr={6,8,0,1,3};
        NestGreaterRight(arr);
        NestGreaterLeft(arr);
        NestSmallRight(arr);
        NestSmallleft(arr);
        
    }

    
}
