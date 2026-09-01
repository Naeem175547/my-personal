import java.util.Arrays;
import java.util.Comparator;

public class practice {
    public static void main(String[] args) {
        int start[]={1,3,0,5,8,5};
        int end[]={2,4,6,7,1,2};
        int activities[][]=new int[start.length][3];
        for(int i=0;i<start.length;i++){
            activities[i][0]=i;
            activities[i][1]=start[i];
            activities[i][2]=end[i];
        }
       Arrays.sort(activities,Comparator.comparingInt(o -> o[2]));
    
    for(int i=0;i<activities.length;i++){
        for(int j=0;j<activities[0].length;j++){
            System.out.print(activities[i][j]+" ");

        }
        System.out.println();
    }
    
    
}
}
