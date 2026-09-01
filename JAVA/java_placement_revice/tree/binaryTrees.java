import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class binaryTrees{
    static class Node{
        int data;
         Node left;
         Node right;
         Node(int data){
            this.data=data;
            this.left=null;
            this.right=null;
         }
        }
         static class BtPreOrder{
            static int idx=-1;
            public static Node buildTree(int Nodes[]){
                idx++;
                if(Nodes[idx]==-1){
                    return null;

                }
                Node nn=new Node(Nodes[idx]);
                nn.left=buildTree(Nodes);
                nn.right=buildTree(Nodes);
                return nn;

            }
         
    }
    static class BtPostOrder{
        static int idx=-1;
        public static Node buildTree(int Nodes[]){
            idx++;
            if(Nodes[idx]==-1){
                return null;

            }
            Node nn=new Node(Nodes[idx]);
            nn.right=buildTree(Nodes);
            nn.left=buildTree(Nodes);            
            return nn;

        }
     
}

    static void preOrder(Node root){
        if(root==null){
            return;
        }
        System.out.print(root.data+" ");
        preOrder(root.left);
        preOrder(root.right);
    }
    static void InOrder(Node root){
        if(root==null){
            // System.out.println(-1);
            return;
        }
        InOrder(root.left);
        System.out.print(root.data+" ");
        InOrder(root.right);
    }
    static void postOrder(Node root){
        if(root==null){
            // System.out.println(-1);
            return;
        }
       
        postOrder(root.left);
        
        postOrder(root.right);
        System.out.print(root.data+" ");
    }
    public static void BFS(Node root){
        if(root==null){
            return;
        }
        Queue<Node> q=new LinkedList<>();
        q.add(root);
        q.add(null);
        while(!q.isEmpty()){
            Node curr=q.remove();
            if(curr==null){
                System.out.println();
                if(!q.isEmpty()){
                    q.add(null);

                }
                else{
                    break;
                }

            }
            else{
                System.out.print(curr.data+" ");
               if(curr.left!=null)
               q.add(curr.left);
               if(curr.right!=null)
               q.add(curr.right);
            }

            


        }



    }

    static int heightofTree(Node root){
        if(root==null){
            return 0;
        }
        int leftht=heightofTree(root.left);
        int rightht=heightofTree(root.right);
        return Math.max(leftht, leftht)+1;
    }

    //count of nodes
    static int countOfNode(Node root){
        if(root==null){
            return 0;
        }
        int lc=countOfNode(root.left);
        int rc=countOfNode(root.right);
        return lc+rc+1;

        
        
    }
    static int sumOfNode(Node root){
        if(root==null){
            return 0;
        }
        int ls=sumOfNode(root.left);
        int rs=sumOfNode(root.right);
        return ls+rs+root.data;

        
        
    }
    static int diameter(Node root){
        if(root==null){
            return 0;
        }
        int leftdiam=diameter(root.left);
        int leftht=heightofTree(root.left);
        int rightdiam=diameter(root.right);
        int rightht=heightofTree(root.right);
        int selfdiam=1+leftht+rightht;
        return Math.max(Math.max(leftdiam,rightdiam),selfdiam);
    }

    static class info{
        int diam;
        int ht;
        info(int d,int h){
            this.diam=d;
            this.ht=h;
        }

    }
    public static info diameter2(Node root){
        if(root==null){
            return new info(0, 0);
        }
        info leftinfo=diameter2(root.left);
        info rightinfo=diameter2(root.right);
        //maximum diameter

        int diam=Math.max(Math.max(leftinfo.diam,rightinfo.diam),leftinfo.ht+rightinfo.ht+1);
        int ht=Math.max(leftinfo.ht,rightinfo.ht)+1;
        return new info(diam, ht);
    }

    public static boolean isIdentical(Node node,Node subroot){
        if(node==null && subroot==null){
            return true;
        }
        else if(node==null || subroot==null || node.data!=subroot.data){
            return false;

        }
        if(!isIdentical(node.left, subroot.left)){
            return false;
        }
        if(!isIdentical(node.right, node.right)){
            return false;


        }
        return true;


    }
    public static boolean isIddentical1(Node node,Node subroot){ 
        if(node==null && subroot==null){
            return true;

        }
        if(node==null || subroot==null){
            return false;
        }
        if(node.data!=subroot.data){
            return false;
        }
        boolean l=isIddentical1(node.left, subroot.left);
        boolean r=isIddentical1(node.right, subroot.right);
        return (node.data==subroot.data) && l && r;


        // return l&& r;               
        // return (node.data==subroot.data) && isIddentical1(node.left, subroot.left) && isIddentical1(node.right, subroot.right);

    }

    public static boolean isSubtree(Node root,Node subroot){
        if(root==null){
            return false;
        }
        if(root.data==subroot.data){
            if(isIddentical1(root,subroot)){
                return true;
            }
        }
        boolean leftans=isSubtree(root.left, subroot);
        boolean rightans=isSubtree(root.right, subroot);
        return leftans || rightans;
        }

    //view
   static  class info2{
        Node node;
        int hd;
        info2(Node n,int hd){
            this.node=n;
            this.hd=hd;//horizontal distance
        }
    }
    public static void topView(Node root){
        Queue<info2> q=new LinkedList<>();
        HashMap<Integer,Integer> hm=new HashMap<>();
        q.add(new info2(root, 0));
        // q.add(null);in this we don,t need this
        int min=0,max=0;
        while(!q.isEmpty()){
            info2 curr=q.remove();
            if(!hm.containsKey(curr.hd)){
                hm.put(curr.hd,curr.node.data);
            }
            if(curr.node.left!=null){
                q.add(new info2(curr.node.left,curr.hd-1));
                min=Math.min(min,curr.hd-1);
            }
            if(curr.node.right!=null){
                q.add(new info2(curr.node.right,curr.hd+1));
                max=Math.max(max,curr.hd+1);
            }
            // if(curr==null){
            //     if(q.isEmpty()){
            //         break;
            //     }
            //     else{
            //         q.add(null);


            //     }

            // }
            // else{
            //     if(!hm.containsKey(curr.hd)){
            //         hm.put(curr.hd,curr.node.data);
            //     }
            //     if(curr.node.left!=null){
            //         q.add(new info2(curr.node.left,curr.hd-1));
            //         min=Math.min(min,curr.hd-1);
            //     }
            //     if(curr.node.right!=null){
            //         q.add(new info2(curr.node.right,curr.hd+1));
            //         max=Math.max(max,curr.hd+1);
            //     }
            // }
        }

        for(int i=min;i<=max;i++){
            System.out.print(hm.get(i)+" ");
        }
        System.out.println();


    }
    public static void bottomView(Node root){
        Queue<info2> q=new LinkedList<>();
        HashMap<Integer,Integer> hm=new HashMap<>();
        q.add(new info2(root, 0));
        
        int min=0,max=0;
        while(!q.isEmpty()){
            info2 curr=q.remove();
            
            if(curr==null){
                if(q.isEmpty()){
                    break;
                }
                else{
                    q.add(null);


                }

            }
            else{
                hm.put(curr.hd, curr.node.data);
                if(curr.node.left!=null){
                    q.add(new info2(curr.node.left,curr.hd-1));
                    min=Math.min(min,curr.hd-1);
                }
                if(curr.node.right!=null){
                    q.add(new info2(curr.node.right,curr.hd+1));
                    max=Math.max(max,curr.hd+1);
                }
            }
        }

        for(int i=min;i<=max;i++){
            System.out.print(hm.get(i)+" ");
        }
        System.out.println();


    }

    public static List<Integer> rightSideView(Node root) {
        if(root==null){
            return new LinkedList<>();
        }
        Queue<Node> q=new LinkedList<>();
        List<Integer> l=new LinkedList<>();
        q.add(root);
        q.add(null);
        Node last=null;
        while(!q.isEmpty()){
            Node curr=q.remove();
            if(curr==null){
                
                
                if(q.isEmpty()){
                    break;
                }
                else{
                    q.add(null);
                }

            }
            else{
                last=curr;
                if(curr.left!=null){
                    q.add(curr.left);

                }
                if(curr.right!=null){
                    q.add(curr.right);
                }



            }
        }
        return l;
        
    }
    public void rightview2(Node curr,List<Integer> result,int level){
        if(curr==null){
            return;
        }
        if(level==result.size()){
            result.add(curr.data);
        }
        rightview2(curr.right,result,level+1);
        rightview2(curr.left,result,level+1);
    }
    //lowest(leastt) common ancestor
    static  boolean path(Node root,int n,ArrayList<Integer> pathn){
        if(root==null){
            return false;
        }
        pathn.add(root.data);
        if(root.data==n){
            return true;

        }
        boolean ls=path(root.left, n, pathn);
        boolean rs=path(root.right, n, pathn);

        //first way
        if(ls==false && rs==false){
            pathn.remove(pathn.size()-1);
            return false;
        }
        return true;

        //second way

        // if(ls || rs){
        //     return true;
        // }
        // pathn.remove(pathn.size()-1);
        // return false;






    }
    static int LCA(Node root,int n1,int n2){
        ArrayList<Integer> path1=new ArrayList<>();
        ArrayList<Integer> path2=new ArrayList<>();
        path(root,n1,path2); 
        path(root,n2,path1);
        System.out.println(path1);
        System.out.println(path2);
        
        //first way
        // int i=0;
        // int common=-1;
        // while(i<path1.size() && i<path2.size()){
        //     if(path1.get(i)==path2.get(i)){
        //         common=path1.get(i);
        //     }
        //     i++;

        // }
        // return common;

        // second way
        // int i=0;
    //     int common=-1;
    //     while(i<path1.size()){
    //         if(path1.get(i)==path2.get(i)){
    //             common=path1.get(i);
    //         }
    //         i++;

    //     }
    //     return common;       

        
    // }
    
        //third way
        // int i=0;
        // int common=-1;
        // for(;i<path1.size() && i<path2.size();i++){
        //     if(path1.get(i)==path2.get(i)){
        //         common=path1.get(i);
        //     }
        //     

        // }
        // return common;
        // }


        //forth way
        int i=0;
        
        for(;i<path1.size() && i<path2.size();i++){
            if(path1.get(i)!=path2.get(i)){
                break;
            }
            

        }
        return path1.get(i-1);
        
        


    }

    //second approach

    static Node LCA2(Node root,int n1,int n2){
        if(root==null){
            return null;
        }
        if(root.data==n1 || root.data==n2){
            return root;
        }

        Node ls=LCA2(root.left, n1, n2);
        Node rs=LCA2(root.right, n1, n2);
        if(ls==null){
            return rs;
        }
        if(rs==null){
            return ls;
        }
        return  root;



    
    }
    //min distance between two node
    static int distance(Node root,int n){
        if(root==null){
            return -1;
        }
        if(root.data==n){
            return 0;
        }
        int ld=distance(root.left, n);
        int rd=distance(root.right, n);
        if(ld==-1 && rd==-1){
            return -1;
        }
        //  if(ld==-1){//we can check else if only beacasuse it will alos work as else work as functin return fromwhere
        //     return rd+1;
        // }
        // else{
        //     return  ld+1;
        // }
        //above and this both same
        int max=Math.max(ld, rd);
        return max+1;



        }
        static int minDist(Node root,int n1,int n2){
            Node r=LCA2(root, n1, n2);
            int dist1=distance(r,n1);
            int dist2=distance(r,n2);
            return dist1+dist2;
        }

        static int kthAncestor(Node root,int n,int k){
            if(root==null){
                return  -1;
            }
            if(root.data==n){
                return 0;
            }
            int ld=kthAncestor(root.left,n,k);
            int rd=kthAncestor(root.right, n,k);
            if(ld==-1 && rd==-1){
                return -1;
            }
            //  if(ld==-1){//we can check else if only beacasuse it will alos work as else work as functin return fromwhere
                //    if(rd+1==k){
                //     System.out.println(root.data);
                //    }
            //     return rd+1;
            // }
            // else{
                // if(ld+1==k){
                //     System.out.println(root.data);
                //    }
            //     return  ld+1;
            // }
            //above and this both same
            int max=Math.max(ld, rd);
            if(max+1==k){
                System.out.println(root.data);
            }
            return max+1;


        }
        //transform to sum
        static int tToSum(Node root){
            if(root==null){
                return 0;
            }
            int lts=tToSum(root.left);
            int rts=tToSum(root.right);
            int data=root.data;
            int rootleft=root.left==null?0:root.left.data;
            int rootright=root.right==null?0:root.right.data;
            root.data=rootleft+rootright+lts+rts;
            return data;

        }

        






    public static void main(String[] args) {
        int nodes[]={1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1};
        BtPreOrder bt=new BtPreOrder();
        Node root=bt.buildTree(nodes);
        BtPostOrder bt2=new BtPostOrder();
        Node root2=bt2.buildTree(nodes);
        // System.out.println(root.data);
        // preOrder(root);
        // System.out.println();
        // InOrder(root);
        // // preOrder(root2);
        // System.out.println();
        // postOrder(root);
        // System.out.println();
        // System.out.println();
        // BFS(root);
        // System.out.println();
        // BFS(root2);
        // System.out.println();
        // System.out.println(heightofTree(root));
        // System.out.println(countOfNode(root));
        // System.out.println(sumOfNode(root));
        // System.out.println(diameter(root));
        // info temp=diameter2(root);
        // System.out.println(temp.diam);

        // System.out.println();

        // System.out.println(isSubtree(root, root2));
        // topView(root);

        // bottomView(root);

        // System.out.println(LCA(root, 4, 5));
        // System.out.println(LCA2(root, 4, 5).data);
        // System.out.println(minDist(root, 4, 5));
        // kthAncestor(root, 4, 1);
        // tToSum(root);
        // preOrder(root);
        System.out.println(rightSideView(root));


        
    }
}