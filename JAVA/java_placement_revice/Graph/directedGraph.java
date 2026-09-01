import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class directedGraph {
    static class Edge{
        int s;
        int d;
        int w;
        Edge(int s,int d){
            this.s=s;
            this.d=d;

        }
    }
    static void createGraph(ArrayList<Edge>[] graph){
        for(int i=0;i<graph.length;i++){
            graph[i]=new ArrayList<>();

        }
        // graph[0].add(new Edge(0, 2));
        // graph[1].add(new Edge(1,0));
        // graph[2].add(new Edge(2, 3));
        // graph[3].add(new Edge(3, 0));
        graph[0].add(new Edge(0, 1));
        graph[0].add(new Edge(0, 2));

        graph[1].add(new Edge(1, 3));
        graph[2].add(new Edge(2, 3));


        


        
    }
    static boolean isCycle(ArrayList<Edge>[] graph){
    boolean vis[]=new boolean[graph.length];
    boolean stack[]=new boolean[graph.length];
    for(int i=0;i<graph.length;i++){
        if(!vis[i]){
            if(isCycleUtil(graph,vis,stack,i)){
                return true;
            }
        }
    }
    return false;
}
static boolean isCycleUtil(ArrayList<Edge>[] graph,boolean vis[],boolean[] s,int curr){
    vis[curr]=true;
    s[curr]=true;
    for(int i=0;i<graph[curr].size();i++){
        Edge e=graph[curr].get(i);
        if(s[e.d]){
            return true;
        }
        if(!vis[e.d] && isCycleUtil(graph, vis, s, e.d)){
            return true;
        }
    }
    s[curr]=false;
    return false;


}

static void topSort(ArrayList<Edge> graph[]){
    boolean vis[]=new boolean[graph.length];
    Stack<Integer> s=new Stack<>();
    for(int i=0;i<graph.length;i++){
        if(!vis[i]){
            topSortUtil(graph,vis,s,i);
        }
    }
    while(!s.isEmpty()){
        System.out.print(s.pop()+" ");
    }

}

static void topSortUtil(ArrayList<Edge>[] graph,boolean vis[],Stack<Integer> s,int curr){
    vis[curr]=true;
    for(int i=0;i<graph[curr].size();i++){
        Edge e=graph[curr].get(i);
        if(!vis[e.d]){
            topSortUtil(graph, vis, s, e.d);

        }

    }
    s.push(curr);

}
static void calcIndedg(ArrayList<Edge> graph[],int indeg[]){
    for(int i=0;i<graph.length;i++){
        int v=i;
        for(int j=0;j<graph[v].size();j++){
            Edge e=graph[v].get(j);
            indeg[e.d]++;
        }
    }
}
public static void topSort_BSf(ArrayList<Edge> graph[]){
    int indeg[]=new int[graph.length];
    calcIndedg(graph, indeg);
    Queue<Integer> q=new LinkedList<>();

    for(int i=0;i<indeg.length;i++){
        if(indeg[i]==0){
            q.add(i);
        }
    }

    //bfs
    while(!q.isEmpty()){
        int curr=q.remove();
        System.out.print(curr+" ");

        for(int i=0;i<graph[curr].size();i++){
            Edge e=graph[curr].get(i);
            indeg[e.d]--;
            if(indeg[e.d]==0){
                q.add(e.d);
            }
        }
    }
    System.out.println();
}
//exponential
public static void printAllPath(ArrayList<Edge> graph[],int src,int dest,String path){
    if(src==dest){
        System.out.println(path+dest);
        return;
    }
    for(int i=0;i<graph[src].size();i++){
        Edge e=graph[src].get(i);
        printAllPath(graph, e.d, dest, path+src);
    }
}





    
    
    public static void main(String[] args) {
        int V=4;
        ArrayList<Edge> graph[]=new ArrayList[V];
        createGraph(graph);
        System.out.println(isCycle(graph));
        topSort(graph);
        System.out.println();
        topSort_BSf(graph);
        printAllPath(graph, 0,3,"" );
        

        
    }
}
