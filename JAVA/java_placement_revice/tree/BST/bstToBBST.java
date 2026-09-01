
import java.util.ArrayList;



public class bstToBBST {
    
    static void getInorder(Node root,ArrayList<Integer> inorder){
        if(root==null){
            return;
        }
        getInorder(root.left, inorder);
        inorder.add(root.data);
        getInorder(root.right, inorder);

    }
    static Node createB_BST(ArrayList<Integer> inorder,int si,int ei){
        if(si>ei){
            return null;
        }
        int mid=(si+ei)/2;
        Node root=new Node(inorder.get(mid));
        root.left=createB_BST(inorder, si, mid-1);
        root.right=createB_BST(inorder, mid+1, ei);
        return root;
    }
    static  Node balanceBST(Node root){
        //inorder seq
        ArrayList<Integer> inorder=new ArrayList<>();
        getInorder(root, inorder);
        root=createB_BST(inorder, 0, inorder.size()-1);
        return root;
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
        Node root=new Node(8);
        root.left=new Node(6);
        root.left.left=new Node(5);
        root.left.left.left=new Node(3);

        root.right=new Node(10);
        root.right.right=new Node(11);
        root.right.right.right=new Node(12);

        preOrder(root);
        System.out.println();
        inOrder(root);

        //
        System.out.println();
        root=balanceBST(root);
        preOrder(root);
        System.out.println();
        inOrder(root);

        
    }

    
}
