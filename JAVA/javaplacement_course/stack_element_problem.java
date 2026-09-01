import java.util.*;
public class stack_element_problem {
    public static void next_greater_right_element(int []x){
        int nextgreater[]=new int[x.length];
        StackUsingArray<Integer> s=new StackUsingArray<>();
        for(int i=x.length-1;i>=0;i--){
            while(!s.isEmpty() && x[i]>=x[s.peek()]){//note this point very carfully
                s.pop();
                
            }
            // if else
            if(s.isEmpty()){
                
                nextgreater[i]=-1;
            }
            else{
                nextgreater[i]=x[s.peek()];
            }
            s.push(i);
          
            
        }
        print(nextgreater);
        }
        //next greater left element
        public static void next_greater_left_element(int []x){
            int nextgreater[]=new int[x.length];
            StackUsingArray<Integer> s=new StackUsingArray<>();
            for(int i=0;i<x.length;i++){
                while(!s.isEmpty() && x[i]>=x[s.peek()]){//note this point very carfully
                    s.pop();
                    
                }
                // if else
                if(s.isEmpty()){
                    
                    nextgreater[i]=-1;
                }
                else{
                    nextgreater[i]=x[s.peek()];
                }
                s.push(i);
               
                
            }
            print(nextgreater);
            }
            //next smaller right element
            public static void next_smaller_right_element(int []x){
                int nextgreater[]=new int[x.length];
                StackUsingArray<Integer> s=new StackUsingArray<>();
                for(int i=x.length-1;i>=0;i--){
                    while(!s.isEmpty() && x[s.peek()]>=x[i]){//note this point very carfully
                        s.pop();
                        
                    }
                    // if else
                    if(s.isEmpty()){
                        
                        nextgreater[i]=-1;
                    }
                    else{
                        nextgreater[i]=x[s.peek()];
                    }
                    s.push(i);
                   
                    
                }
                print(nextgreater);
    }

    // smaller  left element
    public static void next_smaller_left_element(int []x){
        int nextgreater[]=new int[x.length];
        StackUsingArray<Integer> s=new StackUsingArray<>();
        for(int i=0;i<x.length;i++){
            while(!s.isEmpty() && x[i]<=x[s.peek()]){//note this point very carfully
                s.pop();
                
            }
            // if else
            if(s.isEmpty()){
                
                nextgreater[i]=-1;
            }
            else{
                nextgreater[i]=x[s.peek()];
            }
            s.push(i);
           
            
        }
        print(nextgreater);
    }
    public static void print(int x[]){
        for(int i=0;i<x.length;i++){
            System.out.print(x[i]+" ");
        }
        System.out.println();
    }
    public static void main(String[] args) {
        int arr[]=new int[]{5,4,7,2,1};
       // next_greater_right_element(arr);
      //  next_greater_left_element(arr);
          next_smaller_right_element(arr);
          next_smaller_left_element(arr);
        
    }
    
}
