import java.util.Stack;
public class parenthesesQuestion {
    static boolean isValid(String str){
        if(str.length()==0){
            return true;
        }
        Stack<Character> s=new Stack<>();
        for(int i=0;i<str.length();i++){
           char ch=str.charAt(i);
           if(ch=='(' || ch=='{' || ch=='['){
            s.push(ch);
           }
           else{
            if(!s.isEmpty() && (( ch=='}' && s.peek()=='{') || (ch==')' && s.peek()=='(') || (ch==']' && s.peek()=='['))){
                s.pop();
            }
            else if(ch!=']' && ch!=')' && ch!='}'){
                continue;

            }
            else{
                return false;
            }

            
           }

        }
        if(s.isEmpty()){
            return  true;
        }
        else{
            return false;
        }


    }
static boolean isdublicateParentheses(String str){
    if(str.length()==0){
        return false;
    }
    Stack<Character> s=new Stack<>();
    for(int i=0;i<str.length();i++){
        char ch=str.charAt(i);
        if(ch!=')'){
            s.push(ch);

        }
        else{
            int count=0;
            while(!s.isEmpty() && s.peek()!='('){
                count++;
                s.pop();


            }
            if(count<1){
                return true;
            }
            s.pop();//pop '('

        }
    }
    return  false;


     
}
public static void main(String[] args) {
    System.out.println(isValid("([(aabdfd)])"));
    System.out.println(isdublicateParentheses("(((a))+(b))"));
    
}
    
}
