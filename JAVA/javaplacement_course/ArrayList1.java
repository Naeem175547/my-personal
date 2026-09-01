import java.util.*;
public class ArrayList1{
    public static void reverse(ArrayList<Integer> x){
        for(int i=x.size()-1;i>=0;i--){
            System.out.print(x.get(i)+" ");

        }
    }
    //find maximum
    public static void find_max(ArrayList<Integer> x){
        int max=Integer.MIN_VALUE;
        for(int i=0;i<x.size();i++){
            if(max<x.get(i)){
                max=x.get(i);
            }
            //max=Math.max(max, x.get(i));
        }
        System.out.println("maximum value is "+max);
        

    }
    //swap 2 number
    public static void swap(ArrayList<Integer> x,int i,int y){
        int temp=x.get(i);
        x.set(i,x.get(y));
        x.set(y,temp);
    }
    public static void main(String[] args) {
        ArrayList<ArrayList<Integer>> dlist=new ArrayList<>();
        ArrayList<Integer> list=new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(23);
        dlist.add(list) ;
        
        ArrayList<Integer> list1=new ArrayList<>();
        list1.add(10);
        list1.add(20);
        list1.add(30);
        dlist.add(list1);

        //System.out.println(list.get(2));
        //list.remove(1);
        //list.set(2,10);
        //System.out.println(list.contains(1));
       // list.add(2,10);
      // reverse(list);
     // find_max(list);
     //swap
     //Collections.sort(list);//we can also implement baisc sorting method
    // Collections.sort(list,Collections.reverseOrder());
     //System.out.println(list);
     System.out.println(dlist);

      

       
        
       
    }
    
}
