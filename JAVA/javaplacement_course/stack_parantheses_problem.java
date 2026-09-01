import java.util.*;
public class stack_parantheses_problem {
    public static boolean is_valid_expression(String str){
        StackUsingArray<Character> s=new StackUsingArray();
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            if(ch=='(' || ch=='{' || ch=='['){
                s.push(ch);
            }
            else{
                if((s.peek()=='(' && ch==')')
                || (s.peek()=='{' && ch=='}')
                || (s.peek()=='[' && ch==']')
                ){
                    s.pop();
                }
                else{
                    return false;
                }

            }
        }
        if(s.isEmpty()){
            return true;
        }else{
            return false;
        }


    }
    // dublicate parentheses
    public static boolean isDublicate(String str){
        StackUsingArray<Character> s=new StackUsingArray<>();
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            //closing
            if(ch==')'){
                int count=0;
                while(!s.isEmpty() &&s.peek()!='('  ){
                    s.pop();
                    count++;

                }
                if(count<1){
                    return true;
                }else{
                    s.pop();
                }
            }
            else{
                s.push(ch);
            }
        }
        return false;
    }
    //max area in histogram(like bargraph)
    public static void max_Area(int arr[]){
        int max_area=0;
        int nsr[]=new int[arr.length];
        int nsl[]=new int[arr.length];
        //next small right
        StackUsingArray<Integer> s=new StackUsingArray<>();
        for(int i=arr.length-1;i>=0;i--){
            while(!s.isEmpty() && arr[i]<=arr[s.peek()]){
                s.pop();
            }
            if(s.isEmpty()){
                nsr[i]=arr.length;
            }else{
                nsr[i]=s.peek();

            }
            s.push(i);
        }
        //next small left
        s=new StackUsingArray<>();
        for(int i=0;i<arr.length;i++){
            while(!s.isEmpty() && arr[i]<=arr[s.peek()]){
                s.pop();
            }
            if(s.isEmpty()){
                nsl[i]=-1;
            }else{
                nsl[i]=s.peek();

            }
            s.push(i);
        }
        //current area=width*height
        //width=j-i-1;
        //height=curr height
        for(int i=0;i<arr.length;i++){
            int height=arr[i];
            int width=nsr[i]-nsl[i]-1;
            int currArea=height*width;
            max_area=Math.max(max_area, currArea);
        }
        System.out.println(max_area);

    }

    
    public static void main(String[] args) {
      /*   String str="())()";
       // System.out.println(is_valid_expression(str));
        System.out.println(isDublicate(str));
        */
        int arr[]=new int[]{2,1,5,6,2,3};
        max_Area(arr);
        
        
    }
    
}
