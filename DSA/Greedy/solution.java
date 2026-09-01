import java.util.*;

public class solution{
    
        public boolean canJump(int[] nums) {
        int target=nums.length-1;
        for(int i=nums.length-1;i>=0;i--){
            if(nums[i]+i>=target){
                target=i;
            }
            
        }
        if(target==0){
            return true;
        }
        else{
            return false;
        }
    }
   
    public int jump2(int[] nums) {
        int lastjump=0;
        int coverage=0;
        int countjump=0;
        int n=nums.length;
        int destination=nums.length-1;
        if(n==1){
            return 0;
        }

        for(int i=0;i<n;i++){
            coverage=Math.max(coverage,nums[i]+i);
            if(i==lastjump){
                lastjump=coverage;
                countjump++;
                if(lastjump>=destination){
                    return countjump;
                }

            }            


        }
        return countjump;
        
    }

    
        
    
        public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(g);
       
        int contentChildren=0;
        int i=0;//for hunger;
        int j=0;//for cookie
        while(i<g.length && j<s.length){
            if(g[i]<=s[j]){
                contentChildren++;
                i++;
                j++;
            }
            else{
                j++;
            }
        }
    
        return contentChildren;
    }
    
    public List<Integer> partitionLabels(String s) {
        // Map<Character,Integer> map=new HashMap<>();
        // for(int i=s.length()-1;i>=0;i--){
        //     if(map.get(s.charAt(i))==null){
        //         map.put(s.charAt(i),i);

        //     }
        // }
        // List<Integer> result=new ArrayList<>();
        // int range=-1;
        // int start=0;
        // for(int i=0;i<s.length();i++){
        //     int lastoccur=map.get(s.charAt(i));
            
        //     if(lastoccur>range){
        //         range=lastoccur;
        //     }
        //     if(range==i){
                
        //         int size=range-start+1;
        //         result.add(size);
        //         start=i+1;
                
        //     }


        // }
        // return result;

        int n = s.length();
        HashMap<Character, Integer> map = new HashMap<>();
        // Store last occurrence of every character
        for (int i = n - 1; i >= 0; i--) {
            char ch = s.charAt(i);
            if (!map.containsKey(ch)) {
                map.put(ch, i);
            }
        }

        List<Integer> result = new ArrayList<>();
        int i = 0;
        while (i < n) {
            int rangeStart = i;
            int rangeEnd = map.get(s.charAt(i));
            for (int j = rangeStart; j <= rangeEnd; j++) {
                char curr = s.charAt(j);
                rangeEnd = Math.max(rangeEnd, map.get(curr));
            }
            result.add(rangeEnd - rangeStart + 1);
            i = rangeEnd + 1;
        }

        return result;
    }


    public static void main(String[] args) {
        
    }
}