

public class BalancedBST{
    static  Node createB_BST(int arr[],int si,int ei){
        if(si>ei){
            return  null;
        }
        int mid=(si+ei)/2;
        Node root=new Node(arr[mid]);
        root.left=createB_BST(arr, si, mid-1);
        root.right=createB_BST(arr, mid+1, ei);
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
        int arr[]={3,4,5,7,8,9,11,12};
        Node root=createB_BST(arr, 0, arr.length-1);
        inOrder(root);
        System.out.println();
        preOrder(root);
        
    }
}