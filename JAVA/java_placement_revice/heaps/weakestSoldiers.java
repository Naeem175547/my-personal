
import java.util.PriorityQueue;
import java.util.Queue;

public class weakestSoldiers {
    static class soldier implements  Comparable<soldier>{
        int idx;
        int count;
        public soldier(int idx,int count){
            this.idx=idx;
            this.count=count;
        }
        public int compareTo(soldier s2){
            if(this.count==s2.count){
                return this.idx-s2.idx;
            }
            else{
                return this.count-s2.count;
            }
            // return this.count-s2.count;
        }
    }
    public static void main(String[] args) {
        int crowd[][]={
            {1,0,0,0},
            {1,1,1,1},
            {1,0,0,0},
            {1,0,0,0}
        };
        int k=2;
        Queue<soldier> q=new PriorityQueue<>();

        for(int i=0;i<crowd.length;i++){
            int count=0;
            for(int j=0;j<crowd[0].length;j++){
                if(crowd[i][j]==1){
                    count++;
                }

            }
            q.add(new soldier(i, count));
            


        }
        for(int i=0;i<k;i++){
            System.out.println("R"+q.remove().idx);
        }

    }
    
}


// without using comparable 
// Queue<Soldier> q = new PriorityQueue<>(new Comparator<Soldier>() {
//     @Override
//     public int compare(Soldier s1, Soldier s2) {
//         // Compare by soldier count, then by index if counts are the same
//         if (s1.count == s2.count) {
//             return s1.idx - s2.idx; // Compare by index if counts are equal
//         } else {
//             return s1.count - s2.count; // Compare by soldier count
//         }
//     }
// });