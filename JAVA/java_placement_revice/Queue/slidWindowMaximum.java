import java.util.LinkedList;
import java.util.List;
public class slidWindowMaximum {
    public int[] maxSlidingWindow(int[] nums, int k) {
        List<Integer> l=new LinkedList<>();
        for(int i=0;i<=nums.length-k;i++){
            int max=Integer.MIN_VALUE;
            for(int j=i;j<k+i;j++){
                max=Math.max(max,nums[j]);


            }
            l.add(max);


        }
         int[] array = new int[l.size()];
    for (int i = 0; i < l.size(); i++) {
        array[i] = l.get(i); // Manually convert Integer to int
    }
    
    return array;

    
}
}


