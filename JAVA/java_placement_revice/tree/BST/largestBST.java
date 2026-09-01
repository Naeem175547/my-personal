



public class largestBST {
    static  class info{
        boolean isBSt;
        int size;
        int min;
        int max;
        public info(boolean  b,int size,int min,int max) {
            this.isBSt=b;
            this.size=size;
            this.min=min;
            this.max=max;
        }
        
    }
    static int maxBSt=0;
    public static info lBst(Node root){
        if(root==null){
            return new info(true, 0, Integer.MAX_VALUE, Integer.MIN_VALUE);
        }
        info leftinfo=lBst(root.left);
        info rightinfo=lBst(root.right);
        int size=leftinfo.size+rightinfo.size+1;
        int min=Math.min(root.data,Math.min(leftinfo.min,rightinfo.min));
        int max=Math.max(root.data,Math.max(leftinfo.max,rightinfo.max) );
        if(root.data<leftinfo.max || root.data>rightinfo.min){
            return new info(false, size, min, max);
        }
        if(leftinfo.isBSt==true && rightinfo.isBSt==true){
            maxBSt=Math.max(maxBSt, size);
            return new info(true, size, min, max);
        }
        return new info(false, size, min, max);


        

    }
    static void inOrder(Node root){
        if(root==null){
            return;
        }
        inOrder(root.left);
        System.out.print(root.data+" ");
        inOrder(root.right);
    }
    static void preOrder(Node root){
        if(root==null){
            return;
        }
        System.out.print(root.data+" ");
        preOrder(root.left);
        
        preOrder(root.right);
    }
    public static void main(String[] args) {
        Node root=new Node(50);
        root.left=new Node(30);
        root.left.left=new Node(5);
        root.left.right=new Node(20);

        root.right=new Node(60);
        root.right.left=new Node(45);
        root.right.right=new Node(70);
        root.right.right.left=new Node(65);
        root.right.right.right=new Node(80);

        lBst(root);
        System.out.println(maxBSt);

       




        
    }
    
}

