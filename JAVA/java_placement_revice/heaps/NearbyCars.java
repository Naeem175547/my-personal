
import java.util.PriorityQueue;

public class NearbyCars {
   static class Point implements Comparable<Point>{
        int x;
        int y;
        int idx;
        int dist;

        public Point(int x,int y,int idx,int  dist) {
            this.x=x;
            this.y=y;
            this.idx=idx;
            this.dist=dist;
        }

        public int compareTo(Point s2){
            if(this.dist>s2.dist){
                return  1;
            }
            else if(this.dist==s2.dist){
                return 0;
            }
            else{
                return -1;
            }
            // return this.dist-s2.dist;
        }
        
    }
    public static void main(String[] args) {
        int points[][]=new int[][]{
            {3,3},{5,-1},{2,4}
        };

        int k=2;
        PriorityQueue<Point> q=new PriorityQueue<>();
        for(int i=0;i<points.length;i++){
            int dist=(int)Math.sqrt(points[i][0]*points[i][0]+points[i][1]*points[i][1]);
            q.add(new Point(points[i][0],points[i][1],i,dist));
        }
        System.out.println(q);
        for(int i=0;i<k;i++){
            System.out.println("C"+q.remove().idx);
        }

        
    }
    
}
