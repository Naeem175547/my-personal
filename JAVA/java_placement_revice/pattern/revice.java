
import java.util.Scanner;

public class revice {
    static void pattern(int n){
       for(int i=1;i<=n;i++){
        boolean temp=true;
        for(int j=1;j<=n-i;j++){
            System.out.print(" ");
        }
        for(int j=1;j<=2*i-1;j++){
            if(temp){
                System.out.print(i);
                temp=!temp;
            }
            else{
                System.out.print(" ");
                temp=!temp;
            }
            
        }
        System.out.println();
    }
        
      
       
       
    }
    static void fun(int n){
        int bn=0;
        int pow=0;
        while(n!=0){//if 
            int remainder=n%2;
            bn=bn+(int)Math.pow(10, pow)*remainder;
            pow++;
            n=n/2;

        }
        System.out.println(bn);

       

    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("pleae enter the numbr ");
        int n=sc.nextInt();
        pattern(n);

        
     



        
        
    }
    
}
