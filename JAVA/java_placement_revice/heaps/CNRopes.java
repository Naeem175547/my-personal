
import java.util.PriorityQueue;

public class CNRopes {//connect n ropes
    public static void main(String[] args) {
        int ropes[]={2,3,3,4,6};
        PriorityQueue<Integer> p=new PriorityQueue<>();
        for(int i=0;i<ropes.length;i++){
            p.add(ropes[i]);
        }
        int cost=0;
        while(p.size()>1){
            int min1=p.remove();
            int min2=p.remove();
            int sum=min1+min2;
            cost+=sum;
            p.add(sum);

        }
        System.out.println(cost);
        
    }
    
}
