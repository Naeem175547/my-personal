import java.util.*;
public class Question {
     static void pushAtBottom(Stack s,int data){
            if(s.isEmpty()){
                s.push(data);
                return;

            }
            int val=(int)s.pop();
            pushAtBottom(s,data);
            s.push(val);
        }
    static void reverseStack(Stack s){
        if(s.isEmpty()){
            return;
        }
        int val=(int)s.pop();
        reverseStack(s);
        pushAtBottom(s, val);
    }

    static void stockSpan(int arr[]){
        Stack<Integer> s=new Stack<>();
        int span[]=new int[arr.length];
        span[0]=1;
        s.push(0);
        for(int i=1;i<arr.length;i++){
            while(!s.isEmpty() && arr[s.peek()]<=arr[i]){
                s.pop();
            }
            if(s.isEmpty()){
                span[i]=i+1;

            }
            else{
                span[i]=i-s.peek();

            }
            s.push(i);
        }


        for(int x:span){
            System.out.print(x+" ");
        }

    }

    static void nextGreaterRight(int arr[]){
        Stack<Integer> s=new Stack<>();
        int nextGreter[]=new int[arr.length];
        nextGreter[arr.length-1]=-1;
        s.add(arr[arr.length-1]);

        for(int i=arr.length-2;i>=0;i--){
            while(!s.isEmpty() && arr[i]>=s.peek()){
                s.pop();
            }
            if(s.isEmpty()){
                nextGreter[i]=-1;

            }
            else{
                nextGreter[i]=s.peek();

            }
            s.push(arr[i]);
        }

        for(int x:nextGreter){
            System.out.print(x+" ");
        }

    }

    static void maxAreaInHistogram(int heights[]){
        int n=heights.length;
        int nsl[]=new int[n];
        int nsr[]=new int[n];

        //finding next smaller left
        Stack<Integer> s=new Stack<>();
        nsl[0]=-1;
        s.add(0);
        for(int i=1;i<n;i++){
            while(!s.isEmpty() &&  heights[i]>=heights[s.peek()]){
                s.pop();
            }

            if(s.isEmpty()){
                nsl[i]=-1;

            }
            else{
                nsl[i]=s.peek();


            }
            s.push(i);

        }

         //finding next smaller right
         s=new Stack<>();
        nsr[n-1]=-1;
        s.add(n-1);
        for(int i=n-2;i>=0;i--){
            while(!s.isEmpty() &&  heights[i]>=heights[s.peek()]){
                s.pop();
            }

            if(s.isEmpty()){
                nsr[i]=-1;

            }
            else{
                nsr[i]=s.peek();


            }
            s.push(i);
        }

        //now 
        int maxArea=Integer.MAX_VALUE;
        for(int i=0;i<n;i++){
            int width=nsr[i]-nsl[i]-1;
            int hieght=heights[i];
            int area=width*hieght;
            maxArea=Math.max(maxArea, area);            
        }


        System.out.println(maxArea);
    } 

    //first non repeating character in a stream
    static void firstNonReapeatingChar(String str){
        if(str.isEmpty()){
            System.out.println("string is empty");
            return;       
        
        }

        Queue<Character> q=new LinkedList<>();
        int freq[]=new int[26];
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            freq[ch-'a']++;
            q.add(ch);

            while(!q.isEmpty() && freq[q.peek()-'a']>1){
                q.remove();
            }
        }
        if(q.isEmpty()){
            System.out.println("no non reapeating character..");


        }
        else{

            System.out.println("non reapeating character is "+q.peek());
        }



    }

    void interLeaveTwoHalvesOfQueue(Queue<Integer> q){
        Queue<Integer> firstHalf=new LinkedList<>();
        int n=q.size();
        for(int i=0;i<n;i++){
            firstHalf.add(q.remove());
            
        }
        while(!firstHalf.isEmpty()){
            q.add(firstHalf.remove());
            q.add(q.remove());
        }
    }

     public int evaluatePostfix(String[] arr) {
        // code here
        Stack<Integer> s=new Stack<>();
        for(int i=0;i<arr.length;i++){
            String str=arr[i];
            if(str.equals("*") || str.equals("+") || str.equals("-") || str.equals("/") || str.equals("^"))
            {
                int second=s.pop();
                int first=s.pop();
                int result=0;
                if(str.equals("+")){
                    result=first+second;
                }
                else if(str.equals("*")){
                    result=first*second;
                }
                else if(str.equals("-")){
                    result=first-second;
                }
                else if(str.equals("/")){
                    result=(int)Math.floor((double)first/second);
                }
                
                else if(str.equals("^")){
                    result=(int)Math.pow(first,second);
                }
                s.push(result);
            }
            
            else{
                s.push(Integer.parseInt(str));
            }
        }
        return (int)s.pop();


    }

    void helperDeleteMid(Stack<Integer> s,int i,int hmp){
        if(i==hmp){
            s.pop();
            return;
        }
        int data=s.pop();
       helperDeleteMid(s,i+1,hmp);
        s.push(data);
        
        
    }
    // Function to delete middle element of a stack.
    public void deleteMid(Stack<Integer> s) {
        // code here
        int mid=(int)Math.floor((s.size()+1)/2);
        int hmp=s.size()-mid;
        helperDeleteMid(s,0,hmp);
        
        
    }

    static int priority(char ch) {
        switch (ch) {
            case '^':
                return 5;

            case '*':
            case '/':
                return 4;

            case '+':
            case '-':
                return 3;
        }
        return -1;
    }

    public static String infixToPostfix(String s) {
        int i = 0;
        int n = s.length();
        StringBuilder sb = new StringBuilder();
        Stack<Character> st = new Stack<>();
        while (i < n) {
            char ch = s.charAt(i);
            // Operand
            if ((ch >= 'A' && ch <= 'Z') ||
                (ch >= 'a' && ch <= 'z') ||
                (ch >= '0' && ch <= '9')) {

                sb.append(ch);
            }
            // Opening bracket
            else if (ch == '(') {
                st.push(ch);
            }
            // Closing bracket
            else if (ch == ')') {
                while (!st.isEmpty() && st.peek() != '(') {
                    sb.append(st.pop());
                }
                st.pop();
            }
            // Operator
            else {

                while (!st.isEmpty() &&      (
       priority(ch) < priority(st.peek()) ||
      (priority(ch) == priority(st.peek()) && ch != '^')
      )) {

    sb.append(st.pop());
}

                st.push(ch);
            }

            i++;
        }

        // Remaining operators
        while (!st.isEmpty()) {
            sb.append(st.pop());
        }

        return sb.toString();
    }

    static int priority1(char ch) {
        switch (ch) {

            case '^':
                return 5;

            case '*':
            case '/':
                return 4;

            case '+':
            case '-':
                return 3;
        }

        return -1;
    }

    public static String infixToPrefix(String s) {

        // Step 1: Reverse string
        StringBuilder rev = new StringBuilder(s);
        rev.reverse();

        // Step 2: Swap brackets
        for (int i = 0; i < rev.length(); i++) {
            if (rev.charAt(i) == '(') {
                rev.setCharAt(i, ')');
            }
            else if (rev.charAt(i) == ')') {
                rev.setCharAt(i, '(');
            }
        }
        // Step 3: Infix to Postfix
        StringBuilder sb = new StringBuilder();
        Stack<Character> st = new Stack<>();
        for (int i = 0; i < rev.length(); i++) {
            char ch = rev.charAt(i);
            // Operand
            if ((ch >= 'A' && ch <= 'Z') ||
                (ch >= 'a' && ch <= 'z') ||
                (ch >= '0' && ch <= '9')) {

                sb.append(ch);
            }
            // Opening bracket
            else if (ch == '(') {
                st.push(ch);
            }
            // Closing bracket
            else if (ch == ')') {
                while (!st.isEmpty() && st.peek() != '(') {
                    sb.append(st.pop());
                }

                st.pop();
            }

            // Operator
            else {
                while (!st.isEmpty() &&
                      (
                       priority1(ch) < priority1(st.peek()) ||
                      (priority1(ch) == priority1(st.peek()) && ch == '^')
                      )) {

                    sb.append(st.pop());
                }

                st.push(ch);
            }
        }

        while (!st.isEmpty()) {
            sb.append(st.pop());
        }

        // Step 4: Reverse postfix => prefix
        return sb.reverse().toString();
    }


   

    public int min(Stack<Integer> s) {
        if (s.size()==0)
            return -1;

        int min = s.get(0);

        for (int i = 1; i < s.size(); i++) {
            if (s.get(i) < min) {
                min = s.get(i);
            }
        }

        return min;
    }

     public boolean validateOp(int[] a, int[] b) {
        // code here
        int j=0;
        Stack<Integer> s=new Stack<>();
        if(a.length!=b.length){
            return false;
        }
        for(int i=0;i<a.length;i++){
            while(!s.isEmpty() && s.peek()==b[j]){
                s.pop();
                j++;
                
            }
                s.push(a[i]);
            
        }
        while(!s.isEmpty() && s.peek()==b[j]){
            j++;
            s.pop();
        }
        return s.isEmpty()==true;
        
        
        
    }


     void sort(Stack<Integer> st,int val){
        if (st.isEmpty() || st.peek() <= val) {
            st.push(val);
            return;
       }
        int data=st.pop();
        sort(st,val);
        st.push(data);
        
    }
    
    public void sortStack(Stack<Integer> st) {
        // code here
        if(st.size()==0){
            return;
        }
        int val=st.pop();
        sortStack(st);
        sort(st,val);
        
        
    }

     public int celebrity(int mat[][]) {
        // // code here
        // int celebrity=-1;
        // int n=mat.length;
        // for(int i=0;i<n;i++){
        //     boolean flag=true;
        //     for(int j=0;j<n;j++){
        //         if(i!=j && mat[i][j]==1){
        //             flag=false;
        //             break;
        //         }
        //     }
        //     if(flag){
        //         celebrity=i;
        //         break;
        //     }
        // }
        
        // if(celebrity==-1){
        //     return -1;
        // }
        
        // boolean flag=true;
        // for(int i=0;i<n;i++){
        //     if(i!=celebrity && mat[i][celebrity]!=1){
        //         flag=false;
        //         break;
        //     }
        // }
        
        // if(flag){
        //     return celebrity;
    
        // }
        
        // return -1;
        
        // using two pointer
        int n=mat.length;
        int top=0;
        int down=n-1;
        while(top<down){
            if(mat[top][down]==1){
                top=top+1;
            }
            else if(mat[down][top]==1){
                down=down-1;
            }
            else{
                top++;
                down--;
            }
        }
        
        if(top>down){
            return -1;
        }
        
        //otherwise both will be same
        for(int i=0;i<n;i++){
            if(i==top) continue;
            if(mat[top][i]==0 && mat[i][top]==1){
                continue;
            }
            else{
                return -1;
            }
        }
        
        return top;
        
        
        
        
    }

 







    public static void main(String[] args) {
      
        Stack<Integer> s=new Stack();
        int arr[]={100,80,60,70,60,85,100};
        s.push(10);
        s.push(20);
        s.push(30);
        // s.pop();
        // s.remove(1);
        // System.out.println(s);
        // pushAtBottom(s, 100);
        // System.out.println(s);
        // reverseStack(s);
        // System.out.println(s);
        // stockSpan(arr);
        // nextGreaterRight(arr);
        firstNonReapeatingChar("iainan");
        
        
    }
    
}
