public class primeno_check {
     static void prime_No_chekc(int n){
        boolean x=true;
        for(int i=2;i<n-1;i++){
            if(n%2==0){
                x=false;
                
            }
        }
        if(x){
            System.out.println("Number is prime");
        }
        else{
            System.out.println("number is not prime");
        }
    }
    //second method
    static void prime_No_chekc2(int n){
        boolean x=true;
        for(int i=2;i<=(int)Math.sqrt(n);i++){
            if(n%2==0){
                x=false;
                
            }
        }
        if(x){
            System.out.println("Number is prime");
        }
        else{
            System.out.println("number is not prime");
        }
    }
    public static void main(String []args){
        prime_No_chekc2(4);
       
        
    }
    
}
