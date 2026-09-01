import javax.management.MBeanOperationInfo;
import javax.swing.SpinnerDateModel;
import javax.swing.plaf.FontUIResource;

public class string {
    public static void displcemnetf(String s){
        int x=0;
        int y=0;
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='E'){
                x++;
            }
            else if(s.charAt(i)=='W'){
                x--;
            }
            else if(s.charAt(i)=='N'){
                y++;
            }
            else if(s.charAt(i)=='S'){
                y--;
            }
        }
        int X=(x-0)*(x-0);
        int Y=(y-0)*(y-0);
        System.out.println(Math.sqrt((X+Y)));
    }
    public static void main(String[] args) {
        String str="ENEENESENNN";
        displcemnetf(str);
}
    
}
