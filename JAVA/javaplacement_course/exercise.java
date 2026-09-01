public class exercise {
    static void d2b(int n){
        int x=n;
        int b_no=0;
        int pow=0;
        while(x>0){
            int rem=x%2;
            b_no=b_no+(rem*(int)Math.pow(10,pow));
            pow++;
            x=x/2;

        }
        System.out.println(b_no);
    }
    public static void main(String[] args) {
        d2b(10);
        
    }
    
}
