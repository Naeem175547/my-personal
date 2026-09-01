public class Question{
    static void isPrime(int x){
        // int i;
        // for(i=2;i<x;i++){
        //     if(x%i==0){
        //         System.out.println("not prime");
        //         break;

        //     }
        // }
        // if(i==x){
        //     System.out.println("prime");
        // }
       //another approaches
        int i;
        for(i=2;i*i<=x;i++){
            if(x%i==0){
                System.out.println("not prime");
                break;

            }
        }
        if(i==(int)Math.sqrt(x)+1){
            System.out.println("prime");
        }       



    }
    static void BinaryToDecimal(int x){
        // int val=0;
        // int pow=0;
        // while(x>0){
        //     int digit=x%10;
        //     val+=digit*Math.pow(2, pow++);
        //     x=x/10;

        // }
        // System.out.println(val);

        int val =0;
        int pow=0;
        while(x>0){
            int digit=x%10;
            if (digit != 0 && digit != 1) {
                System.out.println("Invalid binary number");
                return;
        }

            val+=digit*(1<<pow++);
            x=x/10;
        }
        System.out.println(val);
    }
    static void decToBin(int x){
        int binaryVal=0;
        int pow=0;
        while(x>0){
            int rem=x%2;
            binaryVal=binaryVal+rem*(int)Math.pow(10,pow++);

            x=x/2;
        }
        System.out.println(binaryVal);
    //     This works only for small numbers.

    //     For larger numbers, this may break because:

    //     Binary can exceed int limit

    //    Using Math.pow() is unnecessary

        //another appraoch
    //     StringBuilder binary = new StringBuilder();

       // while (x > 0) {
    //     binary.append(x % 2);
    //     x = x / 2;
    // }

     // System.out.println(binary.reverse());
    }
    public static void main(String arg[]){
        System.out.println("imran ");
        // isPrime(11);
        // BinaryToDecimal(110101);
        decToBin(10);
    }
}