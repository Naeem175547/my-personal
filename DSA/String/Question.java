import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

public class Question {
    static void palindrome(String str){
      int i=0;
      int j=str.length()-1;
      while(i<str.length()/2){
        if(str.charAt(i)!=str.charAt(j))
        {
            System.out.println("not plindrome......");
            return;


        }
        i++;
        j--;


      }
      System.out.println("palindrome.....");
    }
    static void getShortestPath(String str){
        int x=0;
        int y=0;
        for(int i=0;i<str.length();i++){
            if(str.charAt(i)=='E'){
                x++;
            }
            else if(str.charAt(i)=='W'){
                x--;
            }
            else if(str.charAt(i)=='N'){
                y++;
            }
            else if(str.charAt(i)=='S'){
                y--;
            }

        }
        float dist=x*x+y*y;
        dist=(float)Math.sqrt(dist);
        System.out.println(dist);
    }
    static void largestString(){
        String fruits[]={"imran","khan","shayan","Uella"};
        String largest=fruits[0];
        for(int i=1;i<fruits.length;i++){
            // if(largest.compareToIgnoreCase(fruits[i])<0){
            //     largest=fruits[i];

            // }
            if(largest.length()<fruits[i].length()){
                largest=fruits[i];
            }
        }
        System.out.println(largest);
    }
    static void UpperCaseOfFirstWord(String str){
       StringBuilder sb=new StringBuilder();
       char ch=str.charAt(0);
       ch=Character.toUpperCase(ch);
       sb.append(ch);
       for(int i=1;i<str.length();i++){
        if(str.charAt(i)==' ' && i<str.length()-1){
            sb.append(str.charAt(i));
            i++;
            sb.append((char)Character.toUpperCase(str.charAt(i)));
        
        }
        else{
            sb.append(str.charAt(i));
        }
       }
       System.out.println(sb.toString());
    }
    static void compressString(String str){
        StringBuilder sb=new StringBuilder();
        for(int i=0;i<str.length();i++){
            int x=1;//count
            while(i<str.length()-1 && str.charAt(i)==str.charAt(i+1)){
                x++;
                i++;

                
            }
            sb.append(str.charAt(i));
            if(x>1){
                sb.append(x);
            }


        }
        System.out.println(sb.toString());
    }
    public String longestCommonPrefix(String[] strs) {
        int minl=Integer.MAX_VALUE;
        for(int i=0;i<strs.length;i++){
            String str=strs[i];
            minl=Math.min(minl,str.length());
        }
    
        int i=0;
        while(i<minl){
            for(String str:strs){
                if(strs[0].charAt(i)!=str.charAt(i)){
                    return strs[0].substring(0,i);
                }
            }
            i++;
        }
       return strs[0].substring(0,i);
    }
public int romanToInt(String s) {
        Map<Character,Integer> map=new HashMap<>();
        map.put('I',1);
        map.put('V',5);
        map.put('X',10);
        map.put('L',50);
        map.put('C',100);
        map.put('D',500);
        map.put('M',1000);
        int n=s.length();
        int sum=0;
        int i=0;

        while(i<n){
            if(i<n-1 && map.get(s.charAt(i))<map.get(s.charAt(i+1))){
                sum+=map.get(s.charAt(i+1))-map.get((s.charAt(i)));
                i+=2;
            }
            else{
                sum+=map.get(s.charAt(i));
                i++;
            }
        }
        return sum;
    }
    //apna college
    boolean isChar(char c){
        // for(int i=97;i<=122;i++){
        //     if(c==i){
        //         return true;


        //     }
        // }
        // for(int i=48;i<=57;i++){
        //     if(c==i){
        //         return true;
        //     }
        // }
        // return false;
        //2nd type
        // return Character.isLetterOrDigit(c);
        // return String.valueOf(c).matches("^[a-z0-9]");
        //3 method
        boolean isdigit=c>=48 && c<=57;
        boolean isletter=c>=97 && c<=122;
        if(isdigit || isletter){
            return true;
        }
        return false;



    }
    public boolean isAnagram(String s, String t) {
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

        
    }
//group anagram
    String getFreqStr(String str){
        char[] freqarr=new char[26];
        for(int i=0;i<str.length();i++){
            freqarr[str.charAt(i)-'a']++;
         }
         StringBuilder sb=new StringBuilder();
         for(int i=0;i<26;i++){
            if(freqarr[i]!=0){
                sb.append('a'+i);
                sb.append(freqarr[i]);


            }
         }
         return sb.toString();
    }
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String,List<String>> map=new HashMap<>();
        for(int i=0;i<strs.length;i++){
            String freqStr=getFreqStr(strs[i]);
            if(map.containsKey(freqStr)){
                map.get(freqStr).add(strs[i]);

            }
            else{
                ArrayList<String> list=new ArrayList<>();
                list.add(strs[i]);
                map.put(freqStr,list);

            }
        }
        System.out.println(map.values());
        
        return new ArrayList<>(map.values());

        
    }


    public boolean isPalindrome(String s) {
        s=s.toLowerCase().trim();
        StringBuilder sb=new StringBuilder();
        for(int i=0;i<s.length();i++){
            if(isChar(s.charAt(i))){
                sb.append(s.charAt(i));


            }
        }
        s=sb.toString();
        System.out.println(s);
        int left=0;
        int right=s.length()-1;
        while(left<right){
            if(s.charAt(left)!=s.charAt(right)){
                return false;
                
            }
            left++;
            right--;

        }
        return true;
        
    }
    public boolean isValid(String s) {
        Stack<Character> st = new Stack<>();
        
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            
            // Push opening brackets
            if(ch == '(' || ch == '{' || ch == '[') {
                st.push(ch);
            }
            // Check closing brackets
            else {
                if(st.isEmpty()) return false; // Prevent empty stack peek
                
                if(ch == ')' && st.peek() != '(') return false;
                if(ch == '}' && st.peek() != '{') return false;
                if(ch == ']' && st.peek() != '[') return false;
                
                st.pop();
            }
        }
        
        return st.isEmpty(); // True if all brackets matched
    }


     public String removeConsecutiveCharacter(String s) {
        // code here
        StringBuilder sb=new StringBuilder();
        int i=0;
        while(i<s.length()){
            char ch=s.charAt(i);
            while(i<s.length()-1 && ch==s.charAt(i+1)){
                i++;
                
            }
            sb.append(ch);
            i++;
        }
        return sb.toString();
    }
    String printSequence(String S) {
        
        String[] str = {
            "2",    // A
            "22",   // B
            "222",  // C
            "3",    // D
            "33",   // E
            "333",  // F
            "4",    // G
            "44",   // H
            "444",  // I
            "5",    // J
            "55",   // K
            "555",  // L
            "6",    // M
            "66",   // N
            "666",  // O
            "7",    // P
            "77",   // Q
            "777",  // R
            "7777", // S
            "8",    // T
            "88",   // U
            "888",  // V
            "9",    // W
            "99",   // X
            "999",  // Y
            "9999"  // Z
        };

        StringBuilder ans = new StringBuilder();

        for (char ch : S.toCharArray()) {
            if (ch == ' ') {
                ans.append("0");
            } else {
                ans.append(str[ch - 'A']);
            }
        }

        return ans.toString();
    }

// Function to print duplicate characters with their count
    public static void printDuplicates(String s) {

        // // Hash map to store frequency of each character
        // HashMap<Character, Integer> freq = new HashMap<>();

        // // Count frequency of each character
        // for (char c : s.toCharArray()) {
        //     freq.put(c, freq.getOrDefault(c, 0) + 1);
        // }

        // // Traverse the map and print characters with count > 1
        // for (Map.Entry<Character, Integer> it : freq.entrySet()) {
        //     if (it.getValue() > 1) {
        //         System.out.print("['" + it.getKey() + "', " + it.getValue() + "], ");
        //     }
        // }


         // Convert string to character array
        char[] arr = s.toCharArray();

        // Sort the string to group same characters together
        Arrays.sort(arr);

        // Traverse the sorted string to count duplicates
        for (int i = 0; i < arr.length;) {

            int count = 1;

            // Count occurrences of current character
            while (i + count < arr.length && arr[i] == arr[i + count]) {
                count++;
            }

            // If count > 1, print the character and its count
            if (count > 1) {
                System.out.print("['" + arr[i] + "', " + count + "], ");
            }

            // Move to the next different character
            i += count;
        }
    }

    public int lengthOfLongestSubstring(String s) {
        Set<Character> set=new HashSet<>();
        int left=0;
        int right=0;
        int max=0;
        while(right<s.length()){
            if(set.contains(s.charAt(right))){
               
                while(set.contains(s.charAt(right))){
                    set.remove(s.charAt(left));
                    left++;
                }
                

            }
            else{
                set.add(s.charAt(right));
                max=Math.max(max,right-left+1);
                right++;
            }

        }
        return max;  //(n+n)=(n)
    }

    public int characterReplacement(String s, int k) {
        int count[]=new int[26];
        int maxFreq=0;
        int ws=0;//window size
        int left=0;//start
        int maxWindow=0;
        for(int right=0;right<s.length();right++){
            char ch=s.charAt(right);
            count[ch-'A']++;
            maxFreq=Math.max(maxFreq,count[ch-'A']);
            ws=right-left+1;
            int char_to_change=ws-maxFreq;
            if(char_to_change>k){
                count[s.charAt(left)-'A']--;
                left++;
            }
             ws=right-left+1;
            maxWindow=Math.max(maxWindow,ws);

        }
        return maxWindow;

        
    }



    public String longestPalindrome(String s) {
        int n=s.length();
        String LPS="";

        for(int i=0;i<n;i++){
            //for old length
            int left=i;
            int right=i;
            while(left>=0 && right<n && s.charAt(left)==s.charAt(right)){//for first char it must run
                left--;
                right++;
            }
            String palindrome=s.substring(left+1,right);
            if(LPS.length()<palindrome.length()){
                LPS=palindrome;
            }
            //for even length
             left=i-1;
             right=i;
            while(left>=0 && right<n && s.charAt(left)==s.charAt(right)){//for first char it must run
                left--;
                right++;
            }
             palindrome=s.substring(left+1,right);
            if(LPS.length()<palindrome.length()){
                LPS=palindrome;
            }


            

        }
        return LPS;
        
    }
    //count palindromes sunstring
    public int countSubstrings(String s) {
        int count=0;
        // ArrayList<String> list=new ArrayList<>();
        for(int i=0;i<s.length();i++){
            //for old length
            int right=i;
            int left=i;
            while(right<s.length() && left>=0 && s.charAt(left)==s.charAt(right)){
                count++;
                // list.add(s.substring(left,right+1));
                left--;
                right++;

            }

            //for even length
            
            left=i-1;
            right=i;
            while(right<s.length() && left>=0 && s.charAt(left)==s.charAt(right)){
                count++;
                // list.add(s.substring(left,right+1));
                left--;
                right++;

            }




        }
        // System.out.println(list);
        return count;

        
        
    }
    //we can make a fun for old lenth and even length we don't need to write code again and agina
       
    public int countSubstrings_(String s) {
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            count += palindromes(s, i, i);     // odd length
            count += palindromes(s, i - 1, i); // even length
        }

        return count;
    }

    public int palindromes(String s, int left, int right) {
        int count = 0;

        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            count++;
            left--;
            right++;
        }

        return count;
    }
//minWindow
public static String minWindow(String s, String p) {
        // code here
        int freqS[]=new int[256];
        int freqP[]=new int[256];
        for(char ch:p.toCharArray()){
            freqP[ch]++;
        }
        
        int left=0,right=0,minLen=Integer.MAX_VALUE,minStart=0;
        for(;right<s.length();right++){
            freqS[s.charAt(right)]++;
            while(contain(freqS,freqP)){
                if(right-left+1<minLen){
                    minLen=right-left+1;
                    minStart=left;
                }
                freqS[s.charAt(left++)]--;
                
            }
            
        }
        return minLen==Integer.MAX_VALUE?"":s.substring(minStart,minStart+minLen);
        
        
        
    }
    static boolean contain(int arrS[],int arrP[]){
        for(int i=0;i<256;i++){
            if(arrP[i]>arrS[i]){
                return false;
            }
        }
        return true;
    }

    int getLPSLength(String s) {
    //     int n = s.length();
    //     String result = "";
        
    //   int left=0;
    //   int right=n-1;
    //   while(left<n-1 && right>=1){
    //       String prefix=s.substring(0,left+1);
    //       String suffix=s.substring(right);
    //       if(prefix.equals(suffix)){
    //           result=prefix;
    //       }
    //       left++;
    //       right--;
    //   }
        
    //     return result.length();
    //2nd method
   
        int n = s.length();
        // loop is also working like left and right
        //this will start from longest prefix suffice and it find it immeditalty return len 
        for(int i = n - 1; i > 0; i--) {
            String prefix = s.substring(0, i);
            String suffix = s.substring(n - i);
            
            if(prefix.equals(suffix)) {
                return i;
            }
        }
        
        return 0;
    

    }
    //another mehod
    int getLPSLength2(String s) {
        int n = s.length();
        
        for(int i = n - 1; i> 0; i--) {
            if(isMatch(s, i)) {
                return i;
            }
        }
        return 0;
    }
    
    boolean isMatch(String s, int i) {
        int n = s.length();
        
        for(int temp = 0; temp < i; temp++) {
            if(s.charAt(temp) != s.charAt(n - i + temp)) {
                return false;
            }
        }
        return true;
    }


    
    public static void main(String[] args) {
        // palindrome("imrmi");
        // getShortestPath("WWNNE");
        // largestString();
        // UpperCaseOfFirstWord("hey , my name mohamad naeem");
        // compressString("Imraan haleemaa");
        

        
    }
    
}
