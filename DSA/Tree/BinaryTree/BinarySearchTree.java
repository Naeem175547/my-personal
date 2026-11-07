public class BinarySearchTree{
    class TreeNode{
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(){}
        TreeNode(int val){
            this.val=val;
            this.left=null;
            this.right=null;
        }
        TreeNode(int val,TreeNode left,TreeNode right){
            this.val=val;
            this.left=left;
            this.right=right;
        }

        public TreeNode insertIntoBST(TreeNode root, int val) {
        if(root==null){
            return new TreeNode(val);
        }
        if(root.val<val){
            root.right=insertIntoBST(root.right,val);
        }
        else{
          root.left=insertIntoBST(root.left,val);

        }
        return root;       
        
    }
    }
     static TreeNode findIS(TreeNode root){
        while(root.left!=null){
            root=root.left;
        }
        return root;
    }
    public TreeNode deleteNode(TreeNode root, int key) {
        if(root==null) return null;
        if(root.val<key){
            root.right=deleteNode(root.right,key);

        }
        else if(root.val>key){
            root.left=deleteNode(root.left,key);
        }
        else{
            if(root.left==null && root.right==null)
            return null;

            if(root.left==null)
            return root.right;

            if(root.right==null)
            return root.left;

            //case 3

            TreeNode IS=findIS(root.right);
            root.val=IS.val;
            root.right=deleteNode(root.right,IS.val);
           


        }
         return root;
        
    }
    public static void main(String args[]){


    }

}