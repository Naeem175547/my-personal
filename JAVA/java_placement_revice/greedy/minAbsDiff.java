
import java.util.Arrays;

public class minAbsDiff {
    public static void main(String[] args) {
        int a[]={5,2,1};
        int b[]={2,4,6};

        Arrays.sort(a);
        Arrays.sort(b);
        int minAbsDiff=0;
        for(int i=0;i<a.length;i++){
            minAbsDiff+=Math.abs(a[i]-b[i]);
        }
        System.out.println(minAbsDiff);

        
    }
    
}
