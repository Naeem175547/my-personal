
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;



public class nActivity {
    public static void main(String[] args) {
        // int start[]={1,2,0,5,8,5};
        // int end[]={2,4,6,7,9,9};

        // ArrayList<Integer>  l=new ArrayList<>();
        // int count=0;

        // l.add(0);
        // count++;
        // int lastPair=0;//index of last pair
        // for(int i=1;i<end.length;i++){
        //     if(start[i]>=end[lastPair]){
        //         count++;
        //         l.add(i);
        //         lastPair=i;
        //     }




        // }
        // System.out.println("max no of Activity"+count);
        // System.out.println(l);  

        int start[]={1,2,0,5,8,5};
        int end[]={2,4,6,7,9,9};

        int Activity[][]=new int[start.length][3];//instead of this we can also use priorityqueue and node
        for(int i=0;i<start.length;i++){
            Activity[i][0]=i;
            Activity[i][1]=start[i];
            Activity[i][2]=end[i];
        }     
        Arrays.sort(Activity, Comparator.comparingInt(a -> a[0]));


        //now
        int count=0;
        ArrayList<Integer> l=new ArrayList<>();

        l.add(Activity[0][0]);
        count=1;

        int last=Activity[0][2];
        for(int i=1;i<end.length;i++){
            if(Activity[i][1]>=last){
                count++;
                l.add(Activity[i][0]);
                last=Activity[i][2];
            }
            

        }

        System.out.println(count);
        for(int x:l){
            System.out.println("A"+x);
        }



    
        
    }
    


    
}
