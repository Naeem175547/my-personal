import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
class problem{
    static class Edge{
        int s;
        int d;
        // int w;//no need for the time being
        Edge(int s,int d){
            this.s=s;
            this.d=d;
        }


    }
    static void createGraph(ArrayList<Edge>[] graph){
        for(int i=0;i<graph.length;i++){
            graph[i]=new ArrayList<>();

        }

        //0vetice
        graph[0].add(new Edge(0, 1));
        graph[0].add(new Edge(0, 2));

        //1vertice
        graph[1].add(new Edge(1, 0));
        graph[1].add(new Edge(1, 3));
        
        //2 vertice
        graph[2].add(new Edge(2, 0));
        graph[2].add(new Edge(2, 4));

        //3vertice
        graph[3].add(new Edge(3, 1));
        // graph[3].add(new Edge(3, 0));


        //4vertice
        graph[4].add(new Edge(4, 2));

        //5 vertice 

        graph[5].add(new Edge(5, 6));
        graph[5].add(new Edge(5,7));
                //6 vertice
        graph[6].add(new Edge(6, 5));
        graph[6].add(new Edge(6, 7));

        //7 vertice
        graph[7].add(new Edge(7, 6));
        graph[7].add(new Edge(7, 5));


        
    }

    static void bfs_for_cc(ArrayList<Edge>[] graph){
        boolean[] visited = new boolean[graph.length];
       for(int i=0;i<graph.length;i++){
        if(!visited[i]){
            BFS_Util(graph, visited,i);
        }
       }

    }
 //do this for dfs also

    static void BFS_Util(ArrayList<Edge>[] graph,boolean visited[],int x) {
        Queue<Integer> q = new LinkedList<>();
        
        q.add(x);// source
        while (!q.isEmpty()) {
            int curr = q.remove();
            if (!visited[curr]) {
                System.out.print(curr + " "); // we can only print index because we implement graph node index based

                visited[curr] = true;
                for (int i = 0; i < graph[curr].size(); i++) {
                    Edge e2 = graph[curr].get(i);
                    q.add(e2.d);

                }
            }

        }
        

    }
static boolean detectCycle(ArrayList<Edge>[] graph){
    boolean vis[]=new boolean[graph.length];
    for(int i=0;i<graph.length;i++){
        if(!vis[i]){
            if(detectCycleUtil(graph,vis,i,-1)){
                return true;
            }
        }
    }
    return false;
}
static boolean detectCycleUtil(ArrayList<Edge>[] graph,boolean vis[],int curr,int parent){
    vis[curr]=true;
    for(int i=0;i<graph[curr].size();i++){
        Edge e=graph[curr].get(i);
        if(!vis[e.d]){
            if(detectCycleUtil(graph, vis, e.d, curr)){
                return true;
            }

        }
        else if (vis[e.d] && e.d!=parent) {
            return true;

            
        }
    }
    return false;


}

//bipartite
static boolean isBipartite(ArrayList<Edge> graph[]){
    int color[]=new int[graph.length];
    for(int i=0;i<color.length;i++){
        color[i]=-1;
    }
    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<graph.length;i++){
        if(color[i]==-1){
            q.add(i);
            color[i]=0;//yellow
            while(!q.isEmpty()){
                int curr=q.remove();
                for(int j=0;j<graph[curr].size();j++){
                    Edge e=graph[curr].get(j);
                    if(color[e.d]==-1){
                        int nextcol=color[curr]==0?1:0;
                        color[e.d]=nextcol;
                        q.add(e.d);


                    }
                    else if (color[e.d]==color[curr]) {
                        return true;
                        
                    }
                }
            }

        }

    }
    return false;

}
    

    
    public static void main(String[] args) {
        int V=8;
        ArrayList<Edge>[] graph=new ArrayList[V];
        createGraph(graph);
       
        System.out.println();
        bfs_for_cc(graph);
        System.out.println();
        System.out.println(detectCycle(graph));
        System.out.println(isBipartite(graph));

        
    }
}