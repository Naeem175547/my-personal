

public class Tries {
    static  private class Node{
        Node children[];
        boolean eof;//by default false
        char element;//optinal

        public Node(char c) {
            children=new Node[26];
            eof=false;
            this.element=c;
            
        }
       
    }
   static  private Node head=new Node('-');
    static void insert(String word){
        Node curr=head;
        for(int i=0;i<word.length();i++){
            int idx=word.charAt(i)-'a';
            if(curr.children[idx]==null){
                curr.children[idx]=new Node(word.charAt(idx));
                
            }
            curr=curr.children[idx];
        }
        curr.eof=true;
    }
    static boolean search(String word){
        Node curr=head;
        for(int i=0;i<word.length();i++){
            int idx=word.charAt(i)-'a';
            if(curr.children[idx]==null){
                return false;
            }
            curr=curr.children[idx];
        }
        return curr.eof==true;
    }
    static boolean wordBreak(String key){
        if(key.length()==0){
            return true;
        }
        for(int i=1;i<=key.length();i++){
            if(search(key.substring(0,i)) && wordBreak(key.substring(i))){
                return true;
            }

        }
        return false;
    }
    public static void main(String[] args) {
        String words[]={"the","a","there","any","three"};
        for(int i=0;i<words.length;i++){
            insert(words[i]);
            
        }
        System.out.println(search("any"));
        System.out.println(wordBreak("theanythree"));
        
    }

    

    
}
