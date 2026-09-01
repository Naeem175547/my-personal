import java.util.ArrayList;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Stack;

public class implementation {
    static class Edge {
        int src;
        int dest;// destinatin;
        int w;

        Edge(int s, int d, int w) {
            this.src = s;
            this.dest = d;
            this.w = w;
        }
    }

    static void createGraph(ArrayList<Edge>[] graph) {
        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }
        // for 0 vertex //we can give index to vertices by our own
        graph[0].add(new Edge(0, 1, 5));

        // for 1 vertex
        graph[1].add(new Edge(1, 2, 1));
        graph[1].add(new Edge(1, 3, 3));
        graph[1].add(new Edge(1, 0, 5));

        // for 2 vertex
        graph[2].add(new Edge(2, 4, 2));
        graph[2].add(new Edge(2, 3, 1));
        graph[2].add(new Edge(2, 1, 1));

        // for 3 vertext
        graph[3].add(new Edge(3, 1, 3));
        graph[3].add(new Edge(3, 2, 1));

        // for 4 vertex

        graph[4].add(new Edge(4, 2, 2));

    }

    static void findNeighbors(ArrayList<Edge>[] graph, int i) {
        if (i >= graph.length) {
            System.out.println("not possibleṇ");
            return;
        }
        for (int j = 0; j < graph[i].size(); j++) {
            Edge e = graph[i].get(j);
            System.out.print(e.dest + " ");

        }
        System.out.println();

    }

    static void BFS(ArrayList<Edge>[] graph) {
        Queue<Integer> q = new LinkedList<>();
        boolean[] visited = new boolean[graph.length];
        q.add(0);// source
        while (!q.isEmpty()) {
            int curr = q.remove();
            if (!visited[curr]) {
                System.out.print(curr + " "); // we can only print index because we implement graph node index based

                visited[curr] = true;
                for (int i = 0; i < graph[curr].size(); i++) {
                    Edge e2 = graph[curr].get(i);
                    q.add(e2.dest);

                }
            }

        }
        System.out.println();

    }

    static void bfs_for_cc(ArrayList<Edge>[] graph){
        boolean[] visited = new boolean[graph.length];
       for(int i=0;i<graph.length;i++){
        if(!visited[i]){
            BFS_Util(graph, visited);
        }
       }

    }
 //do this for dfs also

    static void BFS_Util(ArrayList<Edge>[] graph,boolean visited[]) {
        Queue<Integer> q = new LinkedList<>();
        
        q.add(0);// source
        while (!q.isEmpty()) {
            int curr = q.remove();
            if (!visited[curr]) {
                System.out.print(curr + " "); // we can only print index because we implement graph node index based

                visited[curr] = true;
                for (int i = 0; i < graph[curr].size(); i++) {
                    Edge e2 = graph[curr].get(i);
                    if(!visited[e2.dest])
                    q.add(e2.dest);

                }
            }

        }
        System.out.println();

    }

    static void DFS(ArrayList<Edge>[] graph) {
        Stack<Integer> s = new Stack<>();
        boolean[] visited = new boolean[graph.length];
        s.add(0);// source
        while (!s.isEmpty()) {
            int curr = s.pop();
            if (!visited[curr]) {
                System.out.print(curr + " ");
                visited[curr] = true;
                for (int i = 0; i < graph[curr].size(); i++) {
                    Edge e = graph[curr].get(i);
                    s.add(e.dest);// we can here also can give condition that dest has visited or not

                }
            }

        }

    }

    static void DFS_Recursion(ArrayList<Edge>[] graph, boolean vis[], int curr) {
        System.out.print(curr + " ");
        vis[curr] = true;
        for (int i = 0; i < graph[curr].size(); i++) {
            Edge e = graph[curr].get(i);
            if (!vis[e.dest]) {
                DFS_Recursion(graph, vis, e.dest);
            }

        }

    }

    static boolean hasPath(ArrayList<Edge>[] graph, int curr, int des, boolean vis[]) {
        if (curr == des) {
            return true;
        }
        for (int i = 0; i < graph[curr].size(); i++) {
            Edge e = graph[curr].get(i);
            // if(!vis[e.dest]){
            // if(hasPath(graph, e.dest, des, vis)){
            // return true;
            // }

            // }
            // both same

            if (!vis[e.dest] && hasPath(graph, e.dest, des, vis)) {
                return true;
            }
        }
        return false;
    }

    //MST
    static class Pair implements Comparable<Pair>{
        int v;
        int cost;
        public Pair(int v,int c){
            this.v=v;
            this.cost=c;
        }
        @Override
        public int compareTo(Pair p2){
            return this.cost-p2.cost;
        }
    }
    public static void prims(ArrayList<Edge> graph[]){
        boolean vis[]=new boolean[graph.length];
        PriorityQueue<Pair> pq=new PriorityQueue<>();
        pq.add(new Pair(0, 0));
        int finalCost=0;//mstcost / total min weight

        while(!pq.isEmpty()){
            Pair curr=pq.remove();
            if(!vis[curr.v]){
                vis[curr.v]=true;
                finalCost+=curr.cost;
                for(int i=0;i<graph[curr.v].size();i++){
                    Edge e=graph[curr.v].get(i);
                    pq.add(new Pair(e.dest, e.w));
                }
            }
        }
        System.out.println("final(min cost of MST)="+finalCost);
    }

    public static void main(String[] args) {
        int V = 5;
        ArrayList<Edge>[] graph = new ArrayList[V];
        createGraph(graph);
        findNeighbors(graph, 2);
        BFS(graph);
        DFS(graph);
        DFS_Recursion(graph, new boolean[V], 0);
        System.out.println();
        bfs_for_cc(graph);
        prims(graph);

    }
}