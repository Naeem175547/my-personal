
import java.util.ArrayList;
import java.util.List;

public class question {
    static Node insert(Node root,int val){
        if(root==null){
            return new Node(val);
        }
        if(root.data>val){
            root.left=insert(root.left, val);
        }
        else{
            root.right=insert(root.right, val);
        }
        return root;
    }
    static Node  insert2(Node root,int val){
        if(root==null){
            return  new Node(val);
        }
        Node temp=root;
        Node prev=null;
        while(temp!=null ){
            if(temp.data>val){
                prev=temp;
                 temp=temp.left;
            }
            else{
                prev=temp;
                 temp=temp.right;
            }
        }
        if(prev.data>val){
            prev.left=new Node(val);

        }
        else{
            prev.right=new Node(val);
        }
        return root;
        
    
        
    }

    //search
    static boolean searchINBST(Node root,int key){
        if(root==null){
            return false;
        }
        if(root.data==key){
            return true;
        }
        if(root.data>key){
            return searchINBST(root.left, key);
        }
        else{
            return searchINBST(root.left, key);
        }
    }
    //search in BSt
    static Node  delete(Node root,int key){
        if(root==null){
            return null;
        }
        if(root.data>key){
           root.left =delete(root.left, key);
        }
        else if(root.data<key){
            root.right=delete(root.right, key);

        }
        else{//nochild
            if(root.left==null && root.right==null){
                return null;
            }
            //one child
            if(root.left==null){
                return root.right;
            }
            if(root.right==null){
                return root.left;
            }
            //tow child
            Node IOS=findIOS(root.right);
            root.data=IOS.data;
            root.right=delete(root.right, IOS.data);

        }
        return root;
    }
    static Node findIOS(Node root){
        while(root.left!=null){
            root=root.left;
        }
        return root;
    }
    
    //printINRANge

    static void printINRange(Node root,int k1,int k2){
        if(root==null){
            return;
        }
        if(root.data>=k1 && root.data<=k2){
            printINRange(root.left, k1, k2);
            System.out.print(root.data+" ");
            printINRange(root.right, k1, k2);
        }
        else if(root.data<k1){
            printINRange(root.right, k1, k2);
        }
        else{
            printINRange(root.left, k1, k2);
        }
        
    }
    static void RootToLeafPaths(Node root,List<Integer> l){
        if(root==null){
            return;
        }
        l.add(root.data);
        if(root.left==null && root.right==null){
           System.out.println(l);
          
        }
        RootToLeafPaths(root.left, l);
        RootToLeafPaths(root.right, l);
        l.remove(l.size()-1);

    }

    static Node mirrorImage(Node root){
        if(root==null){
            return null;
        }
        Node ls=mirrorImage(root.left);
        Node rs=mirrorImage(root.right);
        root.left=rs;
        root.right=ls;
        return root;
        

    }
    //validate BSt

    static boolean validateBST1(Node root){
        if(root==null){
            return true;
        }
        if (root.left != null && root.data <= root.left.data) {
            return false;
        }
    
        // Check if the right child exists and if the current node's data is greater than the right child's data
        if (root.right != null && root.data >= root.right.data) {
            return false;
        }
       
        boolean ls=validateBST1(root.left);
        boolean rs=validateBST1(root.right);
        return ls&&rs;
       
    }
    //
    static boolean validateBST12(Node root,Node min,Node max){
        if(root==null){
            return true;
        }
        if(min!=null && root.data<min.data){
            return false;

        }
        if(max!=null && root.data>max.data){
            return false;
        }
        boolean ls=validateBST12(root.left, min, root);
        boolean rs=validateBST12(root.right, root, max);
        return ls&& rs;
    }

    static void print(Node root){
       
        if(root==null){
            return;
        }
        
        print(root.left);
        System.out.print(root.data+" ");
        print(root.right);
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
    //mergetow bst
    static void getInorder(Node root,ArrayList<Integer> arr){
        if(root==null){
            return;
        }
        getInorder(root.left,arr);
        arr.add(root.data);
        getInorder(root.right, arr);
    }
    static  Node createBST(ArrayList<Integer> arr,int si,int ei){
        if(si>ei){
            return  null;
        }
        int mid=(si+ei)/2;
        Node root=new Node(arr.get(mid));
        root.left=createBST(arr, si, mid-1);
        root.right=createBST(arr, mid+1, ei);
        return root;
      
    }

    static Node mergeBSTs(Node root1,Node root2){
        ArrayList<Integer> arr1=new ArrayList<>();
        getInorder(root1, arr1);

        ArrayList<Integer> arr2=new ArrayList<>();
        getInorder(root2, arr2);
        int i=0,j=0;
        ArrayList<Integer> finalArr=new ArrayList<>();
        while(i<arr1.size() && j<arr2.size()){
            if(arr1.get(i)<=arr2.get(j)){
                finalArr.add(arr1.get(i));
                i++;
            }
            else{
                finalArr.add(arr2.get(j));
                j++;
            }

        }
        while(i<arr1.size()){
            finalArr.add(arr1.get(i));
            i++;
        }

        while(j<arr2.size()){
            finalArr.add(arr2.get(j));
            j++;
        }

        return createBST(finalArr,0,finalArr.size()-1);

        
        



    }

    public static void main(String[] args) {
        Node head=null;
        head=insert(head, 8);
        head=insert(head, 5);
        head=insert(head, 10);
        head=insert(head, 3);
        head=insert2(head, 6);
        head=insert(head, 11);
        head=insert(head, 14);
        print(head);
        System.out.println(searchINBST(head, 6));
        Node head2=null;
        head2=insert(head2, 0);
        head2=insert(head2, 20);
        head2=insert(head2, 7);
        head2=insert(head2, 40);
        
        // head=delete(head, 3);
        // head=delete(head, 6);
        // head=delete(head, 2);
        // print(head);
        // printINRange(head, 3, 6);
        // RootToLeafPaths(head, new ArrayList<>());
        // System.out.println();
        // head=mirrorImage(head);
        // print(head);
        // System.out.println(validateBST1(head));
        // System.out.println(validateBST12(head, null, null));
        inOrder(head);
        System.out.println();
        inOrder(head2);

        Node root=mergeBSTs(head, head2);
        System.out.println();
        inOrder(root);

        


        
    }
    
}

class Node{
    int data;
    Node left;
    Node right;
    Node(int data){
        this.data=data;
        this.left=null;
        this.right=null; 
    }
}
