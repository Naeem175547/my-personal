public class binomical_cofficient {
    static int factorial(int n){
        System.out.println("interger function run");
        int f=1;
        for(int i=1;i<=n;i++){
            f=f*i;
        }
        return f;
    }
    static int factorial(float n){
        System.out.println(" float function run function run");
        int f=1;
        for(int i=1;i<=n;i++){
            f=f*i;
        }
        return f;
    }
    static int factorial(double n){
        System.out.println(" double function run function run");
        int f=1;
        for(int i=1;i<=n;i++){
            f=f*i;
        }
        return f;
    }
    public static void main(String[] args) {
        System.out.println(factorial(5.9));
        /*int b_c=(factorial(5))/(factorial(3)*factorial(5-2));
        System.out.println(b_c);*/
        
    }
    
}
