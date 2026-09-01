import java.util.*;
public class leetcode {
    public static void main(String[] args) {
        
    }
    
}



//  * Definition for singly-linked list.
  public class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
  }
 
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
       Queue<ListNode> q = new PriorityQueue<>((a, b) -> a.val - b.val);
       
        ListNode head=new ListNode(-1);
        ListNode main=head;
        for(int i=0;i<lists.length;i++){
            ListNode temp=lists[i];
            while(temp!=null){
                q.add(temp);

                temp=temp.next;
            }
        }
      

        while(!q.isEmpty()){
            head.next=q.remove();
            head=head.next;
            head.next=null;

            
        }
        return main.next;
        
    }
}