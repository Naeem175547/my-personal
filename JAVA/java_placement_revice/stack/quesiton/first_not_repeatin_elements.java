

import  java.util.LinkedList;
import java.util.Queue;

public class first_not_repeatin_elements {
    static void non_repting_elemens(String s){
        int count[]=new int[26];
        Queue<Character> q=new LinkedList<>();
        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);
            q.add(ch);
            count[ch-'a']++;
            while(!q.isEmpty() && count[q.peek()-'a']>1){
                q.remove();
            }
             
            if(q.isEmpty()){
                System.out.println(-1+" ");
            }
            else{
                System.out.println(q.peek()+" ");
            }


    }}
    public static void main(String[] args) {
        String str="aaske";
        non_repting_elemens(str);
        
    }

    
}
