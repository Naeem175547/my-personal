import java.util.ArrayList;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;
public class advanceProblem {
    static class Edge{
        int s;
        int d;
        int w;

        public Edge(int s,int w,int d) {
            this.s=s;
            this.d=d;
            this.w=w;
        }
       
    }

    public static void createGraph(ArrayList<Edge> graph[]){
        for(int i=0;i<graph.length;i++){
            graph[i]=new ArrayList<>();
        }
        graph[0].add(new Edge(0, 2, 1));
        graph[0].add(new Edge(0,  4,2));
        
        graph[1].add(new Edge(1, -4,2));
        
        graph[2].add(new Edge(2, 2, 3));
        
        graph[3].add(new Edge(3, 4, 4));

        graph[4].add(new Edge(4, -1, 1));
    }


    static class Pair implements Comparable<Pair>{
    int n;
    int pathC;

        public Pair(int n,int pathC) {
            this.n=n;
            this.pathC=pathC;
        }
        public int compareTo(Pair e1){
            return this.pathC-e1.pathC;
        }
    
    }

public static void dijkstra(ArrayList<Edge>[] graph,int src){
    int dist[]=new int[graph.length];
    for(int i=0;i<graph.length;i++){
        if(i!=src){
            dist[i]=Integer.MAX_VALUE;//+infinity

        }
        
    }
    dist[0]=0;

    boolean visited[]=new boolean[graph.length];
    Queue<Pair> q=new PriorityQueue<>();
    q.add(new Pair(src,0));
    while(!q.isEmpty()){
        Pair curr=q.remove();
        if(!visited[curr.n]){
        visited[curr.n]=true;
        for(int i=0;i<graph[curr.n].size();i++){
            Edge e=graph[curr.n].get(i);
                int u=e.s;
                int v=e.d;
                int wt=e.w;
                if((dist[u]+wt)<dist[v]){
                    dist[v]=dist[u]+wt;
                    q.add(new Pair(v, dist[v]));

                }
        }

        }
        

    }
    for(int d:dist){
        System.out.print(d+" ");
    }

}

public static void bellmanFord(ArrayList<Edge>[] graph,int src){
    int dist[]=new int[graph.length];
    for(int i=0;i<graph.length;i++){
        if(i!=src){
            dist[i]=Integer.MAX_VALUE;
            
        }
    }
    int V=graph.length;
    for(int i=0;i<V-1;i++){
        for(int j=0;j<graph.length;j++){
            for(int k=0;k<graph[j].size();k++){
                Edge e=graph[j].get(k);
                int u=e.s;
                int v=e.d;
                int wt=e.w;

                if(dist[u]+wt<dist[v]){
                    dist[v]=dist[u]+wt;

                }
            }
        }

    }

    for(int x:dist){
        System.out.print(x+" ");
    }
}


    

static void createGraph_CF(int flights[][],ArrayList<Edge> graph[]){

    for(int i=0;i<graph.length;i++){
        graph[i]=new ArrayList<>();
    }
    for(int i=0;i<flights.length;i++){
        int src=flights[i][0];
        int dest=flights[i][1];
        int wt=flights[i][2];
        Edge e=new Edge(src, wt, dest);
        graph[src].add(e);
    }

}
static class Info{
    int v;
    int cost;
    int stops;
     Info(int v,int c,int s){
        this.v=v;
        this.cost=c;
        this.stops=s;
    }
}
public static int cheapestFlight(int n,int flights[][],int src,int dest,int k){
    ArrayList<Edge> graph[]=new ArrayList[n];
    createGraph_CF(flights, graph);
    int dist[]=new int[n];
    for(int i=0;i<n;i++){
        if(i!=src){
            dist[i]=Integer.MAX_VALUE;
        }
    }
    Queue<Info> q=new LinkedList<>();
    q.add(new Info(src, 0, 0));
    while(!q.isEmpty()){
        Info curr=q.remove();
        if(curr.stops>k){
            break;
        }
        for(int i=0;i<graph[curr.v].size();i++){
            Edge e=graph[curr.v].get(i);
            int u=e.s;
            int v=e.d;
            int wt=e.w;
            if(curr.cost+wt<dist[v] && curr.stops<=k){// dry run why not this (dist[u]!=Integer.MAX_VALUE && dist[u]+wt<dist[v] && curr.stops<=k)
                dist[v]=dist[u]+wt;
                q.add(new Info(v, dist[v], curr.stops+1));
            }
        }

    }

    //dist[dest]
    if(dist[dest]==Integer.MAX_VALUE){
        return -1;
    }
    else{
        return dist[dest];
    }
}


    public static void main(String[] args) {
        int V=5;
        ArrayList<Edge> graph[]=new ArrayList[V];
        createGraph(graph);
        dijkstra(graph, 0);
        System.out.println();
        bellmanFord(graph, 0);


        int n=4;
        int flights[][]={{0,1,100},{1,2,100},{2,0,100},{1,3,600},{2,3,200}};
        int src=0,dst=3,k=1;
       System.out.println( cheapestFlight(n, flights, src, dst, k));
    }
    
}
