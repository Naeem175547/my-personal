import java.util.*;
public class ArrayList2{
    //brute force O(n*n)
    public static int storewater(ArrayList<Integer> ht){
        int maxWater=0;
        for(int i=0;i<ht.size();i++){
            for(int j=i+1;j<ht.size();j++){
                int height=Math.min(ht.get(i),ht.get(j));
                int width=j-i;
                int currWater=height*width;
                maxWater=Math.max(maxWater, currWater);
            }
        }
        return maxWater;
    }
    //2 pointer approach linear O(n)
    public static int storewater1(ArrayList<Integer> ht){
        int lp=0;//left pointer or index
        int rp=ht.size()-1;//right pointer or index
        int maxWater=0;
        while(lp<rp){
            //calculate water area
            int height=Math.min(ht.get(lp),ht.get(rp));
            int width=rp-lp;
            int currWater=width*height;
            maxWater=Math.max(maxWater, currWater);
            if(ht.get(lp)<ht.get(rp)){
                lp++;
            }
            else
            {
                rp--;

            }
        }
        return maxWater;
    }
    //Pair_sum_target
    public static void pair_sum1(ArrayList<Integer> x,int target){
        for(int i=0;i<x.size();i++){
            for(int j=i+1;j<x.size();j++){
                if((x.get(i) + x.get(j))==target){
                    System.out.println("Pair_sum founded");

                }
            }
        }
        
    }
    //with two ponter O(n) in sorted arraylist
    public static boolean pair_sum2(ArrayList<Integer> x,int target){
        int lp=0;
        int rp=x.size()-1;
        while(lp!=rp){
            //case
            if((x.get(lp)+x.get(rp))==target){
                return  true;
            }
            if((x.get(lp)+x.get(rp))<target)
            {
                lp++;
                

            }
            else{
                rp--;
            }
        }
        return false;
    }
    //sorted and rotated array
    public static boolean pair_sum3(ArrayList<Integer> list,int target){
        int n=list.size();
        int bp=-1;//break point
        //finding break point
        for(int i=0;i<list.size();i++){
            if(list.get(i)>list.get(i+1)){
                bp=i;
                break;
            }
        }
        int lp=bp+1;
        int rp=bp;
        while(lp!=rp){
            if(list.get(lp)+list.get(rp)==target){
                return true;
            }
            if(list.get(lp)+list.get(rp)<target){
                lp=(lp+1)%n;
            }else{
                rp=(n+rp-1)%n;
            }
        }
        return false;
    }
    
    public static void main(String[] args) {
        ArrayList<Integer> height=new ArrayList<>();
        height.add(5);
        height.add(6);
        
        height.add(2);
        height.add(4);
        height.add(3);
       
       // System.out.println(height);
    //   System.out.println(storewater1(height));
   // pair_sum1(height, 4);
   
   System.out.println(pair_sum3(height, 5));

    }
    
}
