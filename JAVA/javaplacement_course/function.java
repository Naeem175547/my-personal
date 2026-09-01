public class function{
    public static void b2d(int n){
        int x=n;
        int p=0;
        int d=0;
        while(n!=0){
            int ld=n%10;
            d=d+(ld*(int)Math.pow(2, p));
            p++;
            n=n/10;

        }
        System.out.println("the value of " +x+ " is" +d );

    }
    public static void d2b(int n){
        int x=n;
        int p=0;
        int b=0;
        while(x!=0){
            int rem=x%2;
            b=b+(rem*(int)Math.pow(10, p));
            p++;
            x=x/2;

        }
        System.out.println("the value of " +n+ " is" + b );

    }
    public static void main(String[] args) {
        b2d(10010);
        d2b(18);

        
    }
}