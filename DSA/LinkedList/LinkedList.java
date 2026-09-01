import java.util.HashSet;

public class LinkedList{
    static class Node{
    int data;
    Node next;
    Node(int data){
        this.data=data;
    }
}
    Node head;
    Node tail;
    int size;
    LinkedList(){
        
        this.head=null;
        this.tail=null;
        size=0;
    }

    void addFirst(int data){
        Node newNode=new Node(data);
        if(head==null){
            head=tail=newNode;
        }
        else{
            newNode.next=head;
            head=newNode;
        }
        size++;

    }

    void addLast(int data){
        Node newNode=new Node(data);
        if(head==null){
            head=tail=newNode;
        }
        else{
            // //using head
            // Node temp=head;
            // while(temp.next!=null){
            //     temp=temp.next;
            // }
            // temp.next=newNode;
            // tail=newNode;

            //using only tell
            tail.next=newNode;
            tail=newNode;
        }
        size++;
    }
   

    void addAtIndex(int data,int idx){
        if(idx<0 || idx>size){
            System.out.println("index is out of bound...");
            return;

        }
        if(idx==0){
            addFirst(data);
            return;
        }
        if(idx==size){
            addLast(data);
            return;
        }
        Node newNode=new Node(data);
        Node temp=head;
        int i=0;
        while(i<idx-1){
            temp=temp.next;
            i++;

        }
        newNode.next=temp.next;
        temp.next=newNode;
        size++;
        

    }



    void traversal(){
        Node temp=head;
        if(head==null){
            System.out.println("LinkedList is Empty");
            return;
        }
        while(temp!=null){
            System.out.print(temp.data+" ");
            temp=temp.next;
        }
        System.out.println(" size is "+size);
    
    }

     //deletion method of linkedlist

    int removeFirst(){
        if(head==null){
            System.out.println("Linkedlist is empty");
            return -1;
        }
        int val=head.data;
        if(head.next==null){
            head=tail=null;
            size--;
            return val;
            
        }
         head=head.next;        
        size--;
        return val;

    }
    int removeLast(){
        if(head==null){
            System.out.println("Linkedlist is empty");
            return -1;
        }
        int val=-1;
        if(head.next==null){
             val=head.data;
            head=tail=null;
            size--;
            return val;
            
        }
        
        Node temp=head;
        while(temp.next!=tail){
            temp=temp.next;               

        }
        val=tail.data;
        temp.next=null;
        tail=temp;        
        size--;
        return val;

    }

    int removeAtIndex(int idx){
        if(head==null){
            System.out.println("Linkedlist is empty");
            return -1;
        }
        if(idx<0 || idx>=size){
            System.out.println("index out of bound");
            return-1;            

        }
        if(idx==0){
            return removeFirst();
        }
        int val=-1;
        Node temp=head;
        int i=0;
        while(i<idx-1){
            temp=temp.next;
            i++;
        }
        Node delNode=temp.next;
         val=delNode.data;
         if(delNode==tail){
            tail=temp;
         }

         temp.next=delNode.next;
         size--;
         return val;

    }

    void reverse(){
        Node prev=null;
        Node next=null;
        Node curr=head;
        while(curr!=null){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        tail=head;
        head=prev;
    }


    Node getMid(){
        Node slow=head;
        Node fast=head;
        while(fast!=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;

    }

    boolean isPalindrome(){
        Node mid=getMid();
        Node prev=null;
        Node next=null;
        Node curr=mid;
        while(curr!=null){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }

          Node left=head;
          Node right=prev;

          while(right!=null){//because right will have more element for this mid approach
            if(right.data!=left.data){
                return false;
            }
          }

          return true; 

    }

    void removeCycle(){
        Node slow=head;
        Node fast=head;
        boolean isCycle=false;
        while(fast.next!=null && fast!=null){
            slow=slow.next;
            fast=fast.next.next;
            if(slow==fast){
                isCycle=true;
                break;

            }
        }
        if(isCycle) return;

        slow=head;
        Node prev=fast;
        while(slow!=head){
            prev=fast;
            slow=slow.next;
            head=head.next;
        }
        prev.next=null;


    }

    int cycleNode(){
            Node slow=head;
        Node fast=head;
        boolean isCycle=false;
        while(fast.next!=null && fast!=null){
            slow=slow.next;
            fast=fast.next.next;
            if(slow==fast){
                isCycle=true;
                break;

            }
        }
        if(isCycle) return 0;

        int count=0;

        do { 
            count++;
            slow=slow.next;
            
        } while (slow!=fast);{}

        return count;    
    }


    Node getMid2(Node head){
        Node slow=head;
        Node fast=head.next;
        while(fast!=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;

    }


    Node mergeSort(Node head){
        if(head==null ||head.next==null){
            return head;
        }
        Node mid=getMid2(head);
        Node right=mid.next;
        mid.next=null;

        Node newLeft=mergeSort(head);
        Node newRight=mergeSort(right);
        return merge(newLeft,newRight);

    }

    Node merge(Node newLeft,Node newRight){
        Node dummy=new Node(-1);
        Node temp=dummy;
        Node head1=newLeft;
        Node head2=newRight;
        while(head1!=null && head2!=null){
            if(head1.data<=head2.data){
                temp.next=head1;
                head1=head1.next;
                temp=temp.next;
            }else{
                temp.next=head2;
                head2=head2.next;
                temp=temp.next;
            }
        }

        while(head1!=null){
            temp.next=head1;
            head1=head1.next;
            temp=temp.next;
            
        }

        while(head2!=null){
            temp.next=head2;
            head2=head2.next;
            temp=temp.next;
            
        }

        return  dummy.next;



    }

    void zigzag(){
        Node mid=getMid();
        Node prev=null;
        Node curr=mid.next;
        mid.next=null;
        Node next=null;
        while(curr!=null){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;

        }

        Node left=head;
        Node right=prev;
        Node nextL,nextR;

        while(left!=null && right!=null){
            nextL=left.next;
            left.next=right;
            nextR=right.next;
            right.next=nextL;
            left=nextL;
            right=nextR;

        }

    }

    public void deleteGivenNode(Node del_node) {
        // code here
        Node prev=null;
        Node temp=del_node;
        while(temp.next!=null){
            prev=temp;
            temp.data=temp.next.data;
            temp=temp.next;
            
            
        }
        prev.next=null;
        
    }
    public Node removeDuplicates(Node head) {
        // code here
        //first solutin
        // Node prev;
        // Node temp;
        // Node root=head;
        // while(root.next!=null){
        //     prev=root;
        //     temp=root.next;
        //     while(temp!=null){
        //         if(temp.data==root.data){
        //             prev.next=temp.next;
        //             temp=temp.next;
                    
        //         }
        //         else{
        //             prev=temp;
        //             temp=temp.next;
                    
        //         }
        //     }
        // }
        // return head;
        
        //second solution O(n)
        HashSet hs=new HashSet<>();
        Node prev=head;
        Node temp=head.next;
        hs.add(prev.data);
        while(temp!=null){
            if(hs.contains(temp.data)){
                prev.next=temp.next;
                temp=temp.next;
                
                
            }
            else{
                prev=temp;
                hs.add(temp.data);
                temp=temp.next;
            }
            
            
        }
        return head;
        
    }

    static Node sortList(Node head) {
        if (head == null || head.next == null) 
            return head; 

        // Create three dummy nodes to point to beginning of 
        // three linked lists. These dummy nodes are created to 
        // avoid null checks. 
        Node zeroD = new Node(0); 
        Node oneD = new Node(0); 
        Node twoD = new Node(0);

        // Initialize current pointers for three 
        // lists 
        Node zero = zeroD, one = oneD, two = twoD; 

        // Traverse list 
        Node curr = head; 
        while (curr != null) { 
            if (curr.data == 0) { 
              	
                // If the data of current node is 0, 
                // append it to pointer zero and update zero
                zero.next = curr; 
                zero = zero.next; 
            } 
            else if (curr.data == 1) { 
              	
                // If the data of current node is 1, 
                // append it to pointer one and update one
                one.next = curr; 
                one = one.next; 
            } 
            else { 
              	
                // If the data of current node is 2, 
                // append it to pointer two and update two
                two.next = curr; 
                two = two.next; 
            } 
            curr = curr.next; 
        } 

        // Combine the three lists
        zero.next = (oneD.next != null) ? (oneD.next) : (twoD.next); 
        one.next = twoD.next; 
        two.next = null; 
          
        // Updated head 
        head = zeroD.next; 

        return head; 
    }
    
    
    public Node removeNthFromEnd(Node head, int n) {
       int size=0;
       Node temp=head;
       while(temp!=null){
        size++;
        temp=temp.next;
       }

       int index=size-n;
       if(index==0){
        return head.next;
       }

       int i=0;
       temp=head;
       Node prev=temp;
       while(i<index){
        prev=temp;
        temp=temp.next;
        i++;
       }
       prev.next=temp.next;
       return head;
        
    }

    public Node intersectPoint(Node head1, Node head2) {
        // code here
        int size1=0;
        int size2=0;
        Node temp1=head1;
        Node temp2=head2;
        while(temp1!=null){
            size1++;
            temp1=temp1.next;
        }
        while(temp2!=null){
            size2++;
            temp2=temp2.next;
        }
        int diff=Math.abs(size1-size2);
        
        Node tempB;
        Node tempS;
        if(size1<size2){
            tempB=head2;
            tempS=head1;
        }
        else{
            tempB=head1;
            tempS=head2;
            
        }
        
        int i=1;
        while(i<=diff){
            tempB=tempB.next;
            i++;
        }
        
        while(true){
            if(tempB==tempS){
                return tempB;
            }
            tempB=tempB.next;
            tempS=tempS.next;
        }
        
    }

    /*
    Node temp;
    void flattenHelper1(Node head){
        if(head==null){
            return;
        }
        while(head!=null){
            temp.next = head;
            head.prev = temp;
            temp = temp.next;
            Node headNext = head.next;
            flattenHelper1(head.child);
            head.child = null;
            head = headNext;
        }
    }

    public Node flatten1(Node head) {
        if(head==null){
            return null;
        }
        Node newNode = new Node();
        temp = newNode;
        flattenHelper(head);
        newNode.next.prev = null;
        return newNode.next;
    }

    Node flattenHelper2(Node head, Node temp){
        if(head == null){
            return temp;
        }
        while(head != null){
            temp.next = head;
            head.prev = temp;
            temp = temp.next;
            Node headNext = head.next;//because pointer will update
            temp = flattenHelper2(head.child, temp);
            head.child = null;
            head = headNext;
        }
        return temp;
    }

    public Node flatten2(Node head) {

        if(head == null){
            return null;
        }

        Node newNode = new Node(-1);
        Node temp=newNode;
        flattenHelper2(head, temp);
        newNode.next.prev = null;
        return newNode.next;
    }
        */

    public Node zigZag(Node head) {
        // code here
        //let 1==<
        //let 0==>
        int turn=1;
        Node prev=null;
        Node temp=head;
        while(temp.next!=null){
            if(turn==1){
                if(temp.data>temp.next.data){
                    if(prev==null){
                        Node next=temp.next;
                        temp.next=next.next;
                        next.next=temp;
                        head=next;
                        temp=head;
                        
                    }
                    else{
                        Node next=temp.next;
                        temp.next=next.next;
                        next.next=temp;
                        prev.next=next;
                        temp=next;
                        
                    }
                    
                    
                }
                turn=0;
                prev=temp;
                temp=temp.next;
                
            }
            else{
                
                if(temp.data<temp.next.data){
                    if(prev==null){
                        Node next=temp.next;
                        temp.next=next.next;
                        next.next=temp;
                        head=next;
                        temp=head;
                        
                    }
                    else{
                        Node next=temp.next;
                        temp.next=next.next;
                        next.next=temp;
                        prev.next=next;
                        temp=next;
                        
                    }
                    
                    
                }
                turn=1;
                prev=temp;
                temp=temp.next;
                
                
            }
        }
        return head;
        
        
        
    }

    Node compute(Node head) {
        // code here
        Node prev=null;
        Node left=head;
        while(left.next!=null){
            Node right=left.next;
            boolean flag=false;
            while(right!=null){
                if(left.data<right.data){
                    flag=true;
                    break;
                    
                }
                right=right.next;
                
            }
            
            if(flag){
                if(prev==null){
                    head=head.next;
                    left=head;
                }
                else{
                    prev.next=left.next;
                    left=prev.next;
                }
                
            }
            else{
                prev=left;
                left=left.next;
            }
            
            
        }
        return head;

        //optimized solution
        //first reverse list 
        //then remove using max value 
        //then again reverse
        
    }


    Node divide(Node head) {
    Node evenlist = new Node(-1);
    Node oddlist = new Node(-1);
    Node even = evenlist;
    Node odd = oddlist;
    Node temp = head;
    while (temp != null) {
        if (temp.data % 2 == 0) {
            even.next = temp;
            even = even.next;

        } else {
            odd.next = temp;
            odd = odd.next;
        }
        temp = temp.next;
    }
    odd.next = null;
    even.next = oddlist.next;
    return evenlist.next;
}

public Node mergeKLists(Node[] lists) {
        if(lists.length==0){
            return null;
        }
        Node list=new Node(-1); 
        list.next=lists[0];        
       for(int i=1;i<lists.length;i++){
        Node first=list.next;
        Node temp=list;
        Node second=lists[i];
        while(first!=null && second!=null){
            if(first.data<=second.data){
                temp.next=first;
                temp=temp.next;
                first=first.next;               

            }
            else{
                temp.next=second;
                temp=temp.next;
                second=second.next;  

            }

        }

        while(first!=null){
            temp.next=first;
                temp=temp.next;
                first=first.next;
            
        }
        while(second!=null){
            temp.next=second;
                temp=temp.next;
                second=second.next; 

        }
        first=list.next;


       }
       return list.next;

        
    }


    static Node reverse(Node head){
        Node prev=null;
        Node next;
        Node curr=head;
        while(curr!=null){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        return prev;
        
    }
    public Node addTwoLists(Node head1, Node head2) {        // code here
        head1=reverse(head1);
        head2=reverse(head2);
        Node result=new Node(-1);
        Node temp=result;
        int carry=0;
        while(head1!=null || head2!=null){
            int sum=0+carry;            
            if(head1!=null){
                sum+=head1.data;
                head1=head1.next;
                
            }            
            if(head2!=null){
                sum+=head2.data;
                head2=head2.next;
                
            }            
            carry=sum/10;
            sum=sum%10;          
            temp.next=new Node(sum);
            temp=temp.next;
            
        }
        
        if(carry!=0){
            temp.next=new Node(carry);
        }
        result=reverse(result.next);
        
         //remove leading zero
        while(result != null && result.data == 0 && result.next != null){
            result = result.next;
        }

        return result;
        
        
    }


 

    static Node trim(Node head){
        while(head != null && head.data == 0 && head.next != null){
            head = head.next;
        }
        return head;
    }

    static int compare(Node a, Node b){
    // Count lengths first
    int lenA = 0, lenB = 0;
    Node ta = a, tb = b;
    while(ta != null){ lenA++; ta = ta.next; }
    while(tb != null){ lenB++; tb = tb.next; }

    // Longer list = larger number
    if(lenA != lenB) return lenA > lenB ? 1 : -1;

    // Same length → compare digit by digit
    while(a != null && b != null){
        if(a.data > b.data) return 1;
        if(a.data < b.data) return -1;
        a = a.next;
        b = b.next;
    }
    return 0;
}

    static Node subLinkedList(Node head1, Node head2) {

        head1 = trim(head1);
        head2 = trim(head2);

        if(compare(head1, head2) < 0){
            Node t = head1;
            head1 = head2;
            head2 = t;
        }

        head1 = reverse(head1);
        head2 = reverse(head2);

        Node dummy = new Node(-1);
        Node temp = dummy;

        int borrow = 0;

        while(head1 != null || head2 != null){
            int x = (head1 != null) ? head1.data : 0;
            int y = (head2 != null) ? head2.data : 0;
            if(head1 != null) head1 = head1.next;
            if(head2 != null) head2 = head2.next;
            int diff = x - borrow - y;
            if(diff < 0){
                diff += 10;
                borrow = 1;
            } else {
                borrow = 0;
            }

            temp.next = new Node(diff);
            temp = temp.next;
        }

        Node result = reverse(dummy.next);
        result = trim(result);

        return result;
    }

    //clone linked list with random pointer
    
    // public Node cloneLinkedList(Node head) {
    //     Node list = head;
    //     Node copy = new Node(-1);
    //     Node temp = copy;

    //     while (list != null) {
    //         temp.next = new Node(list.data);
    //         temp = temp.next;
    //         list = list.next;
    //     }

    //     copy = copy.next;
    //     temp = copy;
    //    Node originalList=head;
        
    //     while(originalList!=null){
    //         if(originalList.random==null){
    //             temp.random=null;
    //         }
    //         else{
    //             Node temp1=head;
    //             Node temp2=copy;
    //             while(temp1!=null){
    //                 if(temp1==originalList.random){
    //                     temp.random=temp2;
    //                     break;
                        
    //                 }
    //                 temp1=temp1.next;
    //                 temp2=temp2.next;
    //             }
                
    //         }
            
    //         originalList=originalList.next;
    //         temp=temp.next;
            
    //     }
    //     return copy;

       
    // }

     public long multiplyTwoLists(Node first, Node second) {
        // Code here
        long multiplicand=0;
        long multiplier=0;
        long mod = 1000000007;
        Node temp=first;
        while(temp!=null){
            
            multiplicand=(multiplicand*10+temp.data)%mod;
            temp=temp.next;
            
        }
        
        temp=second;
        while(temp!=null){
            multiplier=(multiplier*10+temp.data)%mod;
           temp=temp.next;
        }
        
        return (multiplicand*multiplier)%mod; 
        
        
    }










    

    public static void main(String[] args) {
        LinkedList l=new LinkedList();
        l.addFirst(10);
        l.addFirst(20);
        l.addLast(30);
        l.addLast(50);
        l.addAtIndex(40,2);
        l.removeFirst();
        l.removeLast();
        l.removeAtIndex(2);
        l.addLast(20);
        l.traversal();
        // l.reverse()
        l.zigzag();
        l.traversal();
        // System.out.println(l.isPalindrome());
        
    }
    
}

// Why non static class Works
// You wrote:
// class Node
// inside:
// class LinkedList
// So every Node object internally stores a hidden reference like:
// LinkedList this$0
// which points to the outer LinkedList object.
// Java automatically handles this.
// That is why this works:
// Node newNode = new Node(data);
// inside LinkedList.
// Problem
// Each node unnecessarily stores reference to the whole linked list object.
// Example:

// Node
//  ├── data
//  ├── next
//  └── reference to LinkedList object

// That extra reference wastes memory.
// With static
// static class Node

// Now node becomes independent:

// Node
//  ├── data
//  └── next

// No unnecessary outer reference.

// Cleaner and more efficient.