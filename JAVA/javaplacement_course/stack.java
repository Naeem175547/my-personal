public class stack {
    static void topic(String str[]){
        str[0]=str[0]+"imran";
        
    }
    static void print(String str[]){
        for(int i=0;i<str.length;i++){
            System.out.println(str[i]);
        }
        System.out.println();
    }
    public static void main(String[] args) {
        String[] str=new String[]{"imran"};
        print(str);
        topic(str);
        print(str);
        
    }
    
}
