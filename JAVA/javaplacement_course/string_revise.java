import java.util.*;

import javax.lang.model.util.ElementScanner14;
public class string_revise {
  public static boolean palindrome(String str){
    
    for(int i=0;i<str.length()/2;i++){
      if(str.charAt(i)!=str.charAt(str.length()-1-i)){
        return false;
      }
    }
    return true;
  }
  public static void get_short_path(String path){
    int x=0;int y=0;
    for(int i=0;i<path.length();i++){
      //now we are finding the directions
      if(path.charAt(i)=='E')
      x++;
      else if(path.charAt(i)=='W')
      x--;
      else if(path.charAt(i)=='N')
      y++;
      else
      y--;

    }
    float displacement=(float)Math.sqrt((x*x)+(y*y));
    System.out.println(displacement);


  }
  // 
  public static String first_letter_uppercase(String str){
    StringBuilder x=new StringBuilder();
    x.append(Character.toUpperCase(str.charAt(0)));
    for(int i=1;i<str.length();i++){
       if(str.charAt(i)==' ' && i<str.length()-1){
        x.append(str.charAt(i));
        i++;
        x.append(Character.toUpperCase(str.charAt(i)));
       }else
       x.append(str.charAt(i));

    }
    return x.toString();


  }
    
      public static void main(String[] args) {
       // Scanner sc=new Scanner(System.in);
        //String str=sc.nextLine();
       // String str1=new String("ahan"); 
       String str="EWNSSEEW imran khan";
       StringBuilder str1=new StringBuilder("EWNSSEEW");
      // get_short_path(str);
      System.out.println(first_letter_uppercase(str));
      System.out.println(str1);
    
}
}
