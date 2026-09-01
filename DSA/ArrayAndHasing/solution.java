import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class solution {
    public static boolean isAnagram(String s, String t) {
        // char arr[]=s.toCharArray();
        // Arrays.sort(arr);
        // s=new String(arr);
        // arr=t.toCharArray();
        // //  s = String.valueOf(arr);
        // Arrays.sort(arr);
        // t=String.valueOf(arr);
        // if(s.equals(t)){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        if(s.length()!=t.length()){
            return false;
        }
        int count[]=new int[26];
        s=s.toLowerCase();
        t=t.toLowerCase();
        for(int i=0;i<t.length();i++){
            count[t.charAt(i)-'a']++;
        }
        for(int i=0;i<s.length();i++){
            count[s.charAt(i)-'a']--;
        }
        for(int i=0;i<26;i++){
            if(count[i]!=0){
                return false;

            }


        }

        return true;
        //another use map

        
    }
    public boolean containsDuplicate(int[] nums) {
        // HashMap<Integer,Integer> hm=new HashMap<>();
        // for(int i=0;i<nums.length;i++){
        //     hm.put(nums[i],hm.getOrDefault(nums[i],0)+1);
        // }
        // // hm.forEach((key,value)->{
        // //     if(value>1){
        // //         return true;//we can not return form landa fun
        // //     }

        // // });
        // for(Integer value:hm.values()){
        //     if(value>1){
        //         return true;
        //     }
        // }
        // return false;

        //another method
        
        HashSet<Integer> set = new HashSet<>();

        for(int num : nums){
            if(set.contains(num)){
                return true;
            }
            set.add(num);
        }

        return false;


        
    }
    public int firstUniqChar(String s) {
        // first method and best
        // int[] freq = new int[26];

        // for(char c : s.toCharArray()){
        //     freq[c - 'a']++;
        // }

        // for(int i=0;i<s.length();i++){
        //     if(freq[s.charAt(i) - 'a'] == 1){
        //         return i;
        //     }
        // }

        // return -1;
       /* for(int i=0;i<s.length();i++){
            int j;
            int k;
            for(k=0;k<i;k++){
               if(s.charAt(i)==s.charAt(k)){
                break;

               }
            }
            for(j=i+1;j<s.length();j++){
                if(s.charAt(i)==s.charAt(j)){
                    break;
                }
            }
            if(k==i && j==s.length()){
                return i;

            }
            
        }
        return -1;
        */

        Map<Character,Integer> map=new HashMap<>();
        for(int i=0;i<s.length();i++){
            map.put(s.charAt(i),map.getOrDefault(s.charAt(i),0)+1);          


        }
        for(int i=0;i<s.length();i++){
            if(map.get(s.charAt(i))==1){
                return i;
            }
        }
        
        System.out.println(map);
        return -1;
        
        
    }



    public static void main(String[] args) {
        
    }
    
}
