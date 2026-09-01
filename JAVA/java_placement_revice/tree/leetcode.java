import  java.util.HashMap;
import java.util.Map;
public class leetcode {
    public static void main(String[] args) {
        
    }
    
}
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class TreeNode {
         int val;
         TreeNode left;
         TreeNode right;
         TreeNode() {}
         TreeNode(int val) { this.val = val; }
         TreeNode(int val, TreeNode left, TreeNode right) {
             this.val = val;
             this.left = left;
             this.right = right;
         }
     }
class Solution {
    int idx;
    Map<Integer,Integer> mp=new HashMap<>();
    TreeNode solve(int[] preorder,int[] inorder,int start,int end){
        if(start>end){
            return null;
        }
        int rootval=preorder[idx];
        TreeNode root=new TreeNode(rootval);
        // int i=start; //if(don't want to use map exatar memory then tc==O(n^2) sc=(1))
        // for(;i<=end;i++){
        //     if(inorder[i]==rootval){
        //         break;
        //     }
        // }

        int i=mp.get(rootval);

        idx++;
        root.left=solve(preorder,inorder,start,i-1);
        root.right=solve(preorder,inorder,i+1,end);
        return root;


    }
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        int size=preorder.length;
        idx=0;
        for(int i=0;i<inorder.length;i++){
            mp.put(inorder[i],i);
        }
        System.out.println(mp);
        return solve(preorder,inorder,0,size-1);

       
        
    }
}
