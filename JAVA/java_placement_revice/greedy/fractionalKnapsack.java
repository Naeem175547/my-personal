
import java.util.Arrays;
import java.util.Comparator;


public class fractionalKnapsack {
    public static void main(String[] args) {
        int value[]={60,100,120};
        int weight[]={10,20,30};
        int w=50;//capacity


        double ratio[][]=new double[value.length][2];
        for(int i=0;i<value.length;i++){
            ratio[i][0]=i;
            ratio[i][1]=value[i]/(double)weight[i];
        }
        Arrays.sort(ratio,Comparator.comparingDouble(a->a[1]));

        int maxvalue=0;
        int capacity=w;
        for(int i=ratio.length-1;i>=0;i--){
            int idx=(int)ratio[i][0];
            if(capacity>=weight[idx]){
                maxvalue+=value[idx];
                capacity-=weight[idx];

            }
            else{
                maxvalue+=(capacity*ratio[i][1]);
                capacity=0;
                break;
            }

            
        }


        System.out.println("final value="+maxvalue);






        
    }
    
}
