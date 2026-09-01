public class patterns{
    static void halfPyramid(int n){
        char a=65;
        for(int i=0;i<n;i++){
            for(int j=0;j<=i;j++){
                System.out.print(a+++" ");

            }
            System.out.println();
        }
        // for(int i=0;i<n;i++){
        //     int j=0;
        //     while(j<=i){
        //         System.out.print("*");
        //         j++;
        //     }
        //     System.out.println();
        // }
    }
    static void HollowRectangle(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(i==0 || i==n-1 || j==0|| j==n-1){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
    static void invertedRotatedHalfPyramid(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<n-1-i;j++){
                System.out.print(" ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    static void invertedHalfPyramidWithNo(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<n-i;j++){
                System.out.print(j+1+" ");
            }
            System.out.println();
        }
    }
    static void zeroOneTriangle(int n){
        int x;
        for(int i=1;i<=n;i++){
            if(i%2==0){
                x=0;

            }
            else{
                x=1;
            }
            for(int j=1;j<=i;j++){
                System.out.print(x);
                x=Math.abs(x-1);
            }
            System.out.println();
        }
    }
    public static void butterflyPattern(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            for(int j=0;j<=2*n-2*(i+1);j++){
                System.out.print(" ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n;i>=0;i--){
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            for(int j=0;j<=2*n-2*(i+1);j++){
                System.out.print(" ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        
    }
    public static void diamondPattern(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=2*i-1;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n;i>=0;i--){
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=2*i-1;j++){
                System.out.print("*");
            }
            System.out.println();
        }

    }
    public static void palindromicPattern(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            for(int j=i;j>=2;j--){
                System.out.print(j);

            }
            for(int j=1;j<=i;j++){
                System.out.print(j);
            }
            System.out.println();
        }

    }
    static void noPyramid(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=2*i-1;j++){
                if(j%2==1){
                    System.out.print(i);
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        
    }
    public static void main(String[] args) {
        // halfPyramid(5);
        // HollowRectangle(5);
        // invertedRotatedHalfPyramid(5);
        // invertedHalfPyramidWithNo(5);
        // zeroOneTriangle(5);
        // butterflyPattern(4);
        // diamondPattern(4);
        // palindromicPattern(5);
        noPyramid(5);

        
    }
}