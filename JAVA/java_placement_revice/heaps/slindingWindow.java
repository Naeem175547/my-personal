import java.util.PriorityQueue;
import java.util.Queue;

public class slindingWindow {
    static class  detail implements Comparable<detail>{
        int data;
        int idx;

        public detail(int data,int idx) {
            this.data=data;
            this.idx=idx;
        }      
        
        public int compareTo(detail d){
            return d.data-this.data;
        }
    }
    public static void main(String[] args) {
        int []arr={1,2,3,4,5,-7,7,8,9,10};
        int k=3;
        Queue<detail> q=new PriorityQueue<>();
        int res[]=new int[arr.length-3+1];
        for(int i=0;i<k;i++){
            q.add(new detail(arr[i], i));
        }
        res[0]=q.peek().data;

        for(int i=k;i<arr.length;i++){
            while(q.peek().idx <=(i-k)){
                q.remove();
            }
            q.add(new detail(arr[i], i));
            res[i-k+1]=q.peek().data;


        }
        //print result
        for(int i=0;i<res.length;i++){
            System.out.print(res[i]+ " ");
        }
        System.out.println();




    }
    
}
