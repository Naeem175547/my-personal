public class bitManipulation {
    static void isOddOrEven(int n){
        int bitMask=1;
        if((n&bitMask)==0)

        {
            System.out.println("even");

        }
        else{
            System.out.println("Odd");
        }
    }
    static void getBit(int n,int i){
        int bitmast=1<<i;
        if((n&bitmast)==0){
            System.out.println(0);
        }
        else{
            System.out.println(1);
        }
    }
    static void setBit(int n,int i){
        int bitmask=1<<i;
        bitmask=n|bitmask;
        System.out.println(bitmask);
    }
    static void clearBit(int n,int i){
        int bitMask=1<<i;
        bitMask=~bitMask;
        bitMask=bitMask&n;
        System.out.println(bitMask);
    }
    static void updateItBit(int n,int i,int newbit){
        // if(newbit==0){
        //      clearBit(n, i);;
        // }
        // else{
        //     setBit(n, i);
        // }
        //another logic
        //clear first
        int bitmask=~(1<<i);
        n=n&bitmask;
        int bitmask2=newbit<<i;
        n=n|bitmask2;
        System.out.println(n);

    }
    static void clearIRange(int n,int i){
        int bitmask=~(0) <<(i+1);
        n=n&bitmask;
        System.out.println(n);

    }
    static void clear_Bits_range(int n,int i,int j){
        //first method
        // int a=(~0)<<(j+1);
        // int b=~0<<(i);
        // b=~b;
        // a=a|b;//this is the bitmask which i requires
        // n=n&a;
        // System.out.println(n);
        //another method

        int a=~0<<j+1;
        int b=(1<<i)-1;
        int bitmask=a|b;
        n=n&bitmask;
        System.out.println(n);
    }
    static void setBitsRange(int n,int i,int j){
        int a=(1<<(j+1))-1;
       int b=(~0)<<i;
        int bitmask=a&b;
        System.out.println(n|bitmask);

    }
    static void countSetBits(int n){
        int bitmask=1;
        int count=0;
        while(n>0){
            if((n&bitmask)==1){
            count++;
        }
        n=n>>1;
        }
        System.out.println(count);
    }
    static void fastExpontation(int x,int y){
        int ans=1;
        while(y>0){
            if((y&1)==1){
                ans=ans*x;

            }
            x=x*x;
            y=y>>1;
        }
        System.out.println(ans);


    }
    public static void main(String[] args) {
        // isOddOrEven(5);
        // getBit(5, 1);
        // setBit(10, 2);
        // clearBit(14, 2);
        // updateItBit(10, 1, 0);
        // clearIRange(15, 3);
        // clear_Bits_range(31, 1, 3);
        // countSetBits(5);
        // fastExpontation(5, 2);
        // setBitsRange(65, 1  , 4);
        


        
    }
    
}
