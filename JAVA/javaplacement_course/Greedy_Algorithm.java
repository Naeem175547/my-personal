import java.util.*;
import java.util.function.DoubleUnaryOperator;
public class Greedy_Algorithm{
    private static final int Math = 0;
    public static void n_Activitis(int[] start,int[] end){
        //end time is already sort
        int maxAct=0;
        ArrayList<Integer> ans=new ArrayList<>();
        //1st activity
        maxAct++;
        ans.add(0);
        int last_end=end[0];
        for(int i=1;i<start.length;i++){
            if(start[i]>=last_end){
                maxAct++;
                ans.add(i);
                last_end=end[i];
            }
        }
        System.out.println("MAX ACTIVITIES "+ maxAct);    
        for(int i=0;i<ans.size();i++){
            System.out.print("A" + ans.get(i)+" ");
        }

        }
        //with end sorting 
        public static void bysorting_n_Activitis(int[] start,int[] end){
        int activities[][]=new int[start.length][3];
        for(int i=0;i<start.length;i++){
            activities[i][0]=i;
            activities[i][1]=start[i];
            activities[i][2]=end[i];
        }
        Arrays.sort(activities,Comparator.comparingDouble(o->o[2]));

        int maxAct=0;
        ArrayList<Integer> ans=new ArrayList<>();
        //1st activity
        maxAct++;
        ans.add(activities[0][0]);
        int last_end=activities[0][2];
        for(int i=1;i<start.length;i++){
            if(activities[i][1]>=last_end){
                maxAct++;
                ans.add(activities[i][0]);
                last_end=activities[i][2];
            }
        }
        System.out.println("MAX ACTIVITIES "+ maxAct);    
        for(int i=0;i<ans.size();i++){
            System.out.print("A" + ans.get(i)+" ");
        }

        }
        public static void fractional_knapsack(){
            int value[]={60,100,120};
            int weight[]={10,20,30};
            int W=50;
            double ratio[][]=new double[value.length][2];
            for(int i=0;i<value.length;i++){
                ratio[i][0]=i;
                ratio[i][1]=value[i]/(double)weight[i];

            }
            Arrays.sort(ratio,Comparator.comparingDouble(o->o[1]));
            for(int i=0;i<ratio.length;i++){
                for(int j=0;j<ratio[0].length;j++){
                    System.out.print(ratio[i][j]+" ");
        
                }
                System.out.println();
            }

            int capacity=W;
            int final_value=0;
            for(int i=ratio.length-1;i>=0;i--){ //we need decending order
                int idx=(int)ratio[i][0];
                if(capacity>=weight[idx]){
                    final_value +=value[idx];
                    capacity -= weight[idx];

                }
                else{
                    //include fractional item
                    final_value += (ratio[i][1]*capacity);
                    capacity=0;
                    break;
                }

            }
            System.out.println("Final value="+final_value);
            
            
            

        }
        //min  absolute difference pair
        static void min_absolute_pair_difference(){
            int A[]={1,2,3};
            int B[]={2,1,3};
            Arrays.sort(A);
            Arrays.sort(B);
            int minDiff=0;
            for(int i=0;i<A.length;i++){
                minDiff +=(A[i]-B[i]);
                
            }
            System.out.println("min absolute diff of pairs ="+ minDiff);
            
            
        }


    
    
    public static void main(String[] args) {
    //fractional_knapsack();
    min_absolute_pair_difference();
        
    }
    
}