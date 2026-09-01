public class patten {
    public static void invertedhalfpramid(int n){
        for(int i=0;i<4;i++){
            for(int j=0;j<n-1-i;j++){
                System.out.print(" ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();

        }
    }
    public static void inverted_half_pramid_no(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n-i+1;j++){
                System.out.print(j);
            }
            System.out.println();
        }
        
    }
    public static void butterfly(int n){
        //1st half
        for(int i=1;i<=n;i++){
            //star==i
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            for(int j=1;j<=2*(n-i);j++){
                System.out.print(" ");
            }
            //star==i
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();

        }
        //second half
        for(int i=n;i>=1;i--){
            //star==i
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            for(int j=1;j<=2*(n-i);j++){
                System.out.print(" ");
            }
            //star==i
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();

        }
    }
    public static void solidrhombus(int n){
        for(int i=1;i<=n;i++){
            //space
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            //star
            for(int j=1;j<=4;j++){
                System.out.print("*");

            }
            System.out.println();
        }
    }
    public static void hollow_rhombus(int n){
        for(int i=1;i<=n;i++){
            //space
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            //star
            for(int j=1;j<=n;j++){
                if(i==1 || i==n || j==1 || j==n)
                System.out.print("*");
                else
                System.out.print(" ");

            }
            System.out.println();
        }
    }
   
    
    
    public static void main(String[] args) {
        invertedhalfpramid(5);
        inverted_half_pramid_no(5);
        butterfly(5);
        solidrhombus(5);
        hollow_rhombus(5);
        
        
    }
}
