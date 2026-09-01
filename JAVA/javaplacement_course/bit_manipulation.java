public class bit_manipulation {
    //let's start
    public static void odd_and_even(int n){
        int bitmask=1;
        if((n&bitmask)==0){
            System.out.println("Even");

        }
        else{
            System.out.println("Odd");
        }
    }
    //get bit
    public static void get_bit(int n,int i){
        int bitmask=1<<i;
        if((bitmask&n)==0)//hum directly isko condition m use nahi kr sakte
        System.out.println("bit is "+0);
        else
        System.out.println("bit is "+1);
    }
    //set bit
    public static void set_bit(int n,int i){
        int bitmask=1<<i;
        n=n|bitmask;
        System.out.println(n);
    }
    //clear bit
    public static int clear_bit(int n,int i){
        int bitmask=~(1<<i);
        n=n&bitmask;
        return n;//we can also return the value
    }
    //UPDATE bit
    //1st method
    public static void update_bit(int n,int i,int newbit){
        if(newbit==0){
            clear_bit(n, i);
        }else{
            set_bit(n, i);
        }

    }
    //2nd method
    public static void update_bit_2(int n,int i,int newbit){
        n=clear_bit(n, i);
        int bitmask=newbit<<i;
        System.out.println(bitmask|n);
        

    }
    //clear last i bit
    public static void clear_last_ith_bit(int n,int i){
        int bitmask=(-1)<<i;
        System.out.println(bitmask&n);
    }
//clear bit in range
    public static void clear_bit_range(int n,int i,int j){
        int a=(-1)<<(j+1);
        int b=1<<i-1;
        int bitmask=a|b;
        System.out.println(n&bitmask);
    }
    //check if  a no a power of 2 or not
    public static  boolean isPowerof_two(int n){
        return (n&(n-1))==0;
    }
    //count set bits in a number
    public static void count_set_bit(int n){
        int count=0;
        while(n>0){
            if((n&1)!=0)
            count++;
            n=n>>1;
        }
        System.out.println("total set bit is"+count);
    }
    //fast exponentiation
    public static void fast_dexponentiation(int a,int n){
        int ans=1;
        while(n>0){
            if((n&1)!=0){
                ans=ans*a;
            }
            a=a*a;
            n=n>>1;
        }
        System.out.println("Answer"+ans);
    }
    public static void main(String[] args) {
       // odd_and_even(5);
     //  get_bit(3,0);
     //set_bit(3, 2);
    // clear_bit(3, 0);
   // update_bit_2(3,0,0);

   //System.out.println(-1>>2);
 //  clear_last_ith_bit(10, 2);
 //clear_bit_range(10, 2, 3);
 //System.out.println(isPowerof_two(2));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
 //count_set_bit(10);
 //fast_dexponentiation(3, 5);

    }
}
    
