import java.util.HashMap;
import java.util.HashSet;
public class question {
    static void MaxFrequency(int arr[]){
        HashMap<Integer,Integer> hm=new HashMap<>();
        for(int i=0;i<arr.length;i++){
            if(hm.containsKey(arr[i])){
                hm.put(arr[i], hm.get(arr[i])+1);
            }
            else{
                hm.put(arr[i], 1);
            }
        }
        // Set<Integer> s=hm.keySet();
        
        for(Integer key:hm.keySet()){
            if(hm.get(key)>arr.length/3){
                System.out.println("Key=" +key+"="+hm.get(key));
            }
        }

    }
   static  boolean validAnagram(String s1,String s2){
        if(s1.length()!=s2.length()){
            return false;
        }
        HashMap<Character,Integer> hm=new HashMap<>();
        for(int i=0;i<s1.length();i++){
            char ch=s1.charAt(i);
            hm.put(ch,hm.getOrDefault(ch, 0)+1);
        }
        for(int i=0;i<s2.length();i++){
            char ch=s2.charAt(i);
            if(!hm.containsKey(ch)){
                return false;
            }
            hm.put(ch, hm.get(ch)-1);
            if(hm.get(ch)==0){
                hm.remove(ch);
            }

        }
        // if(hm.isEmpty()){
        //     return true;
        // }
        // else{
        //     return false;
        // }

        return hm.isEmpty();
    }
    public static String getStart(HashMap<String,String> tickets){
        HashMap<String,String> revMap=new HashMap<>();
        for(String key:tickets.keySet()){
            revMap.put(tickets.get(key), key);
        }
        for(String key: tickets.keySet()){
            if(!revMap.containsKey(key)){
                return key;
            }

        }
        return null;


    }

    static void UANDI(int arr1[],int arr2[]){
        HashSet<Integer> hs=new HashSet<>();
        for(int i=0;i<arr1.length;i++){
            hs.add(arr1[i]);



        }
    for(int j=0;j<arr1.length;j++){
        hs.add(arr2[j]);        
       }
       System.out.println(hs+"size"+hs.size());

       //interection

        hs=new HashSet<>();
        int count=0;
        for(int i=0;i<arr1.length;i++){
            hs.add(arr1[i]);
        }
        System.out.println(hs);

        for(int j=0;j<arr2.length;j++){
            if(hs.contains(arr2[j])){
                count++;
               System.out.print(arr2[j]+" ");

            }
        }
        System.out.println();
        System.out.println(count);



        


    }
    


    static void FIFTickets(){
        HashMap<String,String> tickets=new HashMap<>();
        tickets.put("Chennai", "Bangluru");
        tickets.put("Munbai", "Dehli");
        tickets.put("Goa", "Chennai");
        tickets.put("Dehli", "Goa");
        String start=getStart(tickets);
        System.out.print(start);
        for(String key:tickets.keySet()){
            System.out.print("->"+tickets.get(start));
            start=tickets.get(start);
        }
        System.out.println();
    }


    public static void main(String[] args) {
        int arr[]={3,2,2,3,2,3,4,452,2,3,3,1,1};
        System.out.println("running");
        MaxFrequency(arr);
        // System.out.println(validAnagram("race","carr"));
        FIFTickets();
        int[] arr1={1,2,3,4,5};
        int[] arr2={6,7,8,3,2,5};
        UANDI(arr1, arr2);
        
    }
    
}
