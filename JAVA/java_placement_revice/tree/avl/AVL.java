
public class AVL {
    static class Node{
        int data,height;
        Node left,right;
        Node(int data){
            this.data=data;
            height=1;
        }
    }
    public static Node root;
    public static int height(Node root){
        if(root==null){
            return 0;
        }
        return root.height;
    }
    static  int max(int a,int b){
        return a>b?a:b;
    }
    static int getBalance(Node root){
        if(root==null){
            return 0;
        }
        return height(root.left)-height(root.right);
    }

    //left rotate
    static Node rightRotate(Node root){
        Node lc=root.left;
        Node lcr=lc.right;
        //perform rotatin
        lc.right=root;
        root.left=lcr;

        //update heigth
        root.height=max(height(root.left),height(root.right))+1;
        lc.height=max(height(lc.left),height(lc.right))+1;
        return lc;
        
        



    }
    static Node leftRotate(Node root){
        Node rc=root.right;//right child
        Node rcl=rc.left;//left child of right child

        //perfrom rotation
        rc.left=root;
        root.right=rcl;
        //
        root.height=max(height(root.left),height(root.right))+1;
        rc.height=max(height(rc.left),height(rc.right))+1;
        return  rc;
    }
    //Insert
    public static Node insert(Node root,int key){
        if(root==null){
            return new Node(key);
        }
        if(key<root.data){
            root.left=insert(root.left, key);
        }
        else if(key>root.data){
            root.right=insert(root.right, key);
        }
        else{
            return root;//this will not allow dublicate
        }

        //update root height
        root.height=1+Math.max(height(root.left),height(root.right));
        int bf=getBalance(root);
        //LL case
        if(bf>1 && key<root.left.data){
            return rightRotate(root);          


        }
        //rr case
        else if(bf<-1 && key>root.right.data ){
            return leftRotate(root);
        }
        //lr case
        else if(bf>1 && key>root.left.data){
            root.left=leftRotate(root.left);
            return rightRotate(root);

            
            
        }
        //rl case
        else if(bf<-1 && key<root.right.data){
            root.right=rightRotate(root.right);
            return leftRotate(root);

        }
        return root;

        }

    public static void main(String[] args) {

        root=insert(root,10);
        root=insert(root,20);
        
    }
    
}
