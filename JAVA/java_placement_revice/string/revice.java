
public class revice {
    static void fun(String str){
        StringBuilder sb=new StringBuilder();
       
        for(int i=0;i<str.length();i++){
            int count=1;
            while(i<str.length()-1 && str.charAt(i)==str.charAt(i+1)){
                count++;
                i++;
               
            }
            
            sb.append(str.charAt(i));
            if(count>1){
                sb.append(count);                


            }

            
            


            }
            System.out.println(sb);
            

        }




    
        

    public static void main(String[] args) {
        // String str = "imran";
        // System.out.println(str.length());
        // System.out.println(str.concat("kahn"));
        // System.out.println(str.startsWith(substring(0, 4)"i"));
        // System.out.println(str.);
        // System.out.println(str.toUpperCase());
        // System.out.println(str.toLowerCase());
        // System.out.println(str.indexOf("a"));
        // System.out.println(str.lastIndexOf("a"));
        // System.out.println(str.replace("a", "A"));
        // System.out.println(str);
        // System.out.println(str.trim());
        // char[] ch = str.toCharArray();
        // byte[] arr = str.getBytes();
        // print(ch);
        // print(arr);
        // String str1 = "imran";
        // String str2 = new String("imran");
        // String str3=str2;
        // System.out.println(str1 == str2);
        // System.out.println(str1.equals(str2));
        // System.out.println(str3==str2);

        // fun("EENNENNSSW");
        fun("aabbaaa");

    }

}
