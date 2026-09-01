
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
public class question {
    static class job{
        int idx;
        int profit;
        int deadine;
        job(int idx,int profit,int deadine){
            this.idx=idx;
            this.profit=profit;
            this.deadine=deadine;
        }
    }
    static void jobSequencingProblem(int jobs[][]){
        ArrayList<job> l=new ArrayList<>();
        for(int i=0;i<jobs.length;i++){
            l.add(new job(i, jobs[i][1], jobs[i][0]));
        }

        Collections.sort(l,(ob1,obj2)->obj2.profit-ob1.profit);
        
        ArrayList<Integer> seq=new ArrayList<>();
        int profit=0;
        int time=0;
        for(int i=0;i<jobs.length;i++){
            job curr=l.get(i);
            if(time<curr.deadine){
                
                seq.add(curr.idx);
                time++;
                profit+=curr.profit;


            }
        }

        for(int i=0;i<seq.size();i++){
            System.out.println("A"+seq.get(i));
        }

        System.out.println("Count = "+seq.size());
        System.out.println("profit = "+profit);



    }
   static void MaxLengthChainOfPairs(int pairs[][]){
    int sPairs[][]=new int[pairs.length][3];
    for(int i=0;i<pairs.length;i++){
        sPairs[i][0]=i;
        sPairs[i][1]=pairs[i][0];
        sPairs[i][2]=pairs[i][1];

    }

    Arrays.sort(sPairs,Comparator.comparingDouble(a->a[2]));
    int count=0;
    ArrayList<Integer> a=new ArrayList<>();
    int last=sPairs[0][2];//first pair last value
    a.add(sPairs[0][0]);
    count++;
    for(int i=1;i<sPairs.length;i++){
        if(sPairs[i][1]>=last){
            count++;
            a.add(sPairs[i][0]);
            last=sPairs[i][2];
            

        }

    }

    for(int i=0;i<a.size();i++){
        System.out.println("A"+a.get(i) );
    }

    System.out.println("Max count"+count);

    
    }
  static   void indianCoin(int denomination[],int val){
        int count=0;
        Arrays.sort(denomination);
        int amt=val;
        for(int i=denomination.length-1;i>=0;i--){
            if(denomination[i]<=amt){
                while(denomination[i]<=amt){
                    count++;
                    amt-=denomination[i];
                }
            }


        }
        System.out.println("max no of coins note="+count);

    }
    public static void main(String[] args) {
        int[][] pairs={
            {5,24},{39,60},{5,28},{27,40},{50,90}
        };
        int[] arr={1,2,5,10,20,50,100,500,2000};
        int[][] jobs={
            {4,20},{1,10},{1,40},{1,30}

        };
        // MaxLengthChainOfPairs(pairs);
        // indianCoin(arr, 500);
        jobSequencingProblem(jobs);

        
    }
    
}
