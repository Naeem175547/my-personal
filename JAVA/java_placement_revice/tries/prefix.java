

public class prefix {
    static class Node{
        Node children[];
        boolean eof;
        int freq;
        Node(){
            children=new Node[26];
            for(int i=0;i<children.length;i++){
                children[i]=null;
                
            }
            this.eof=false;
            this.freq=1;
        }
    }
    static Node head=new Node();
    static void insert(String word){
        Node curr=head;
        for(int i=0;i<word.length();i++){
            int idx=word.charAt(i)-'a';
            if(curr.children[idx]==null){
                curr.children[idx]=new Node();
            }
            else{
                curr.children[idx].freq++;
            }
            curr=curr.children[idx];
        }
    }
    static String findPrefix(String word){
        Node curr=head;
        StringBuffer sb=new StringBuffer();
        for(int i=0;i<word.length();i++){
            int idx=word.charAt(i)-'a';
            
            if(curr.children[idx]==null){
                break;
            }
            sb.append(word.charAt(i));
            if(curr.children[idx].freq==1){
                break;
            }
            curr=curr.children[idx];
            // if(curr.children[idx].freq>1){
            //     sb.append(word.charAt(i));
            //     curr=curr.children[idx];
            // }else{
            //     sb.append(word.charAt(i));
            //     break;

            // }
        }
        return sb.toString();
    }
    public static void main(String[] args) {
        String arr[]={"zebra","dog","duck","dove"};
        for(int i=0;i<arr.length;i++){
            insert(arr[i]);
        }

        for(int i=0;i<arr.length;i++){
            String str=findPrefix(arr[i]);
            System.out.print(str+" ");
        }
        

        
    }
    
}
