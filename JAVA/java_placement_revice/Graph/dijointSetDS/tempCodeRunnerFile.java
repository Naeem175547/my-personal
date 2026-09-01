    }
    public static int find(int x){
        if(x==par[x]){//if element parent itself same elements
            return x;
        }
        return find(par[x]);
    }
    public static void union(int a,int b){
        int parA=find(a);
        int parB=find(b);
        if(rank[parA]==rank[parB]){
            par[parB]=parA;
            rank[parA]++;

        }
        else if(rank[parA]<rank[parB]){
            par[parA]=parB;
        }
        else{