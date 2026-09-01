public class stack_with_array {
    static class Stack{
        int[] arr;
        int i=-1;
        public Stack(int size){
            arr=new int[size];

        }
        public void push(int data){
            if(i==arr.length){
                System.out.println("stack is overflow");
                return;
            }
            i++;
            arr[i]=data;
            
            
        }
        public int pop(){
            if(i<0){
                System.out.println("stack is underflow");
                return -1;
            }
            int val=arr[i];
            i--;
            return val;
        }
        public void peek(){
            if(i>=0)
            System.out.println(arr[i]);
            else
                System.out.println("stack is underflow");
                
        }
        public boolean isEmpty(){
            if(i<0){
                return true;

            }else{
                return false;
            }
        }
          
    }
    public static void main(String[] args) {
        Stack s=new Stack(5);
        s.push(2);;
        s.push(4);
        s.peek();
        
    }
    
}
