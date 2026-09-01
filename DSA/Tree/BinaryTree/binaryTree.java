
import java.util.*;



public class binaryTree{
    static int idx=-1;
    public static Node BtPreOrder(int preOrder[]){
        idx++;     
        if(preOrder[idx]==-1){
            return null;
        }
        Node newNode=new Node(preOrder[idx]);  
        newNode.left=BtPreOrder(preOrder);
        newNode.right=BtPreOrder(preOrder);
        return newNode;

        
    }
    public static Node BtPostOrder(int postOrder[]){
        idx++;
        if(postOrder[idx]==-1){
            return null;
        }
        Node newNode=new Node(postOrder[idx]);
        newNode.left=BtPostOrder(postOrder);
        newNode.right=BtPostOrder(postOrder);
        return newNode; 
       }



       public static void BFS(Node root){
        if(root==null){
            return;
        }
        Queue<Node> q=new LinkedList<>();
        q.add(root);
        q.add(null);
        while(!q.isEmpty()){
            Node temp=q.poll();

            if(temp==null){
                System.out.println();
                if(q.isEmpty()) break;
                q.add(null);

            }
            else{
                System.out.print(temp.data+" ");
                if(temp.left!=null){
                    q.add(temp.left);

                }
                if(temp.right!=null)
                    q.add(temp.right);
            }


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

    
    static void inOrder(Node root){
        if(root==null){
            return;
        }
       
        preOrder(root.left);
         System.out.print(root.data+" ");
        preOrder(root.right);
    }
    static void postOrder(Node root){
        if(root==null){
            return;
        }        
        preOrder(root.left);
        preOrder(root.right);
        System.out.println(root.data+" ");
    }
    static int height(Node root){
        if(root==null){
            return 0;
        }
        int lh=height(root.left);
        int rh=height(root.right);
        return Math.max(lh, rh)+1;
    }
    static int count(Node root){
        if(root==null){
            return 0;
        }
        if(root.left==null && root.right==null){//this line will skip some funcall
            return 1;
        }
        int lc=count(root.left);
        int rc=count(root.right);
        return lc+rc+1;
    }
    static int sum(Node root){
        if(root==null){
            return 0;
        }       
        int lSum=sum(root.left);
        int rSum=sum(root.right);
        return lSum+rSum+root.data;
    }
    static int d=0;
    static int diameter1(Node root){
        if(root==null){
            return 0;
        }
        int lh=diameter1(root.left);
        int rh=diameter1(root.right);
        d=Math.max(d,lh+rh+1);
        return Math.max(lh,rh)+1;


    }
    static int diameter2(Node root){
        if(root==null){
            return 0;
        }
        int ld=diameter2(root.left);
        int rd=diameter2(root.right);
        int lh=height(root.left);
        int rh=height(root.right);
        int diam=lh+rh+1;
        return Math.max(diam,Math.max(ld,rd));
    }
    static Info diameter3(Node root){
        if(root==null){
            return new Info(0,0);
        }
        Info leftInfo=diameter3(root.left);
        Info rightInfo=diameter3(root.right);
        int diam=leftInfo.ht+rightInfo.ht+1;
        int ht=Math.max(leftInfo.ht,rightInfo.ht)+1;
        return new Info(Math.max(diam,Math.max(leftInfo.diam,rightInfo.diam)),ht);
    }
     public static boolean isSameTree(Node p, Node q) {
        if(p==null && q==null){
            return true;
        }
        if(p==null || q==null || p.data!=q.data){
            return false;
        }
        boolean left=isSameTree(p.left,q.left);
        boolean right=isSameTree(p.right,q.right);
        return left&&right;

        
    }
    public boolean isSubtree(Node root, Node subRoot) {
        if(isSameTree(root,subRoot)){
            return true;
        }
        if(root==null) return false;
        boolean left=isSubtree(root.left,subRoot);
        if(left) return true;//if found in left subtree then it will stop call from right side
        boolean right=isSubtree(root.right,subRoot);
        return  right;

        
    }
    static void topView(Node root){
        Map<Integer,Integer> map=new HashMap<>();
        Queue<Info2> q=new LinkedList<>();
        q.add(new Info2(root, 0));
        int min=0,max=0;
        while(!q.isEmpty()){
            Info2 pair=q.remove();
             Node node=pair.node;
            int ht=pair.ht;
            if(!map.containsKey(ht)){
                map.put(ht,node.data);
            }
            if(node.left!=null){
                q.add(new Info2(node.left, ht-1));
                min=Math.min(min,ht-1);

            }
            if(node.right!=null){
                q.add(new Info2(node.right, ht+1));
                max=Math.max(max,ht+1);

            }
          
            
        }

        for(int i=min;i<=max;i++){
            System.out.print(map.get(i)+" ");
        }


    }
   static void leftView(Node root){
        if(root==null) return;
        Queue<Node> q=new LinkedList<>();
        q.add(root);
        q.add(null);
        System.out.print(root.data+" ");
        while(!q.isEmpty()){

            Node temp=q.remove();
            if(temp==null){
                if(q.isEmpty()){
                    break;

                }
                else{
                    System.out.print(q.peek().data+" ");
                    q.add(null);
                    continue;

                }
            }
           
            if(temp.left!=null){
                q.add(temp.left);

            }
            if(temp.right!=null){
                q.add(temp.right);
            }
        }
        System.out.println();

    }
    static void rightView(Node root){
        if(root==null) return;
        Queue<Node> q=new LinkedList<>();
        q.add(root);
        q.add(null);
        int prev=0;

        while(!q.isEmpty()){

            Node temp=q.remove();                        
            if(temp==null){
                System.out.print(prev+" "); 
                if(q.isEmpty()){
                    break;

                }
                else{
                                       
                    q.add(null);
                    continue;

                }
            }
             prev=temp.data;         
           
            if(temp.left!=null){
                q.add(temp.left);

            }
            if(temp.right!=null){
                q.add(temp.right);
            }
        }
        System.out.println();

    }

   
    static boolean findPath(Node root, ArrayList<Node> path, Node node) {
        if (root == null) {
            return false;
        }
        path.add(root);
        // node found
        if (root == node) {
            return true;
        }
        boolean left = findPath(root.left, path, node);
        boolean right = findPath(root.right, path, node);
        // if node not found in both sides
        if (!left && !right) {
            path.remove(path.size() - 1);
        }
        return left || right;
    }

    public Node lowestCommonAncestor(Node root, Node p, Node q) {
        ArrayList<Node> list1 = new ArrayList<>();
        ArrayList<Node> list2 = new ArrayList<>();
        findPath(root, list1, p);
        findPath(root, list2, q);
        int i = 0;
        // find last common node
        while (i < list1.size() && i < list2.size()) {
            if (list1.get(i) != list2.get(i)) {
                break;
            }
            i++;
        }
        return list1.get(i - 1);
    }

    public Node lowestCommonAncestor2(Node root,Node p,Node q) {
        if(root==null){
            return null;
        }
        if(root.data==p.data || root.data==q.data){
            return root;
        }
       Node left=lowestCommonAncestor(root.left,p,q);
       Node right=lowestCommonAncestor(root.right,p,q);

        if(left==null){
            return right;
        }
        if(right==null){
            return left;
        }
        return root;

        
    }
    public static void main(String[] args) {
        int preOrder[]={1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1};
        Node head=BtPreOrder(preOrder);
        // preOrder(head);
        // BFS(head);
        // System.out.println(height(head));
        // System.out.println(count(head));
        // System.out.println(sum(head));
        // System.out.println();
        // diameter1(head);
        // System.out.println(d);
        // System.out.println(diameter2(head));
        // System.out.println(diameter3(head).diam);
        // topView(head);
        leftView(head);
        rightView(head);
        
    }
}

class Node{
    int data;
    Node left;
    Node right;
    public Node(int data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class Info{
    int diam;
    int ht;
    Info(int diam,int ht){
        this.diam=diam;
        this.ht=ht;
    }
}
class Info2{
    Node node;
    int ht;
    Info2(Node node,int ht){
        this.node=node;
        this.ht=ht;
    }
}