
import java.util.Scanner;

public class Question {
    static void  shiftString(){
        Scanner sc=new Scanner(System.in);
        int key=sc.nextInt();//it leave\n in the 
        String str=sc.nextLine();
        str=sc.nextLine();               
        if(key<=0){
            System.out.println("Invalid input");
            return;
        }


        StringBuilder sb=new StringBuilder();
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            if(ch>='A' && ch<='Z'){
                char newchar=(char)(((ch-'A'+key)%26)+'A');
                sb.append(newchar);

            }
            else if(ch>='a' && ch<='z'){
                char newchar=(char)(((ch-'a'+key)%26)+'a');
                sb.append(newchar);
            }
            else if(ch>='0' && ch<='9'){
                char newchar=(char)(((ch-'0'+key)%10)+'0');
                sb.append(newchar);

            }
            else{
                sb.append(ch);
            }
        }
        System.out.println(sb);
    }
    static void maximumPointEarnBYCorner(){
        int arr[]={3,2,1,3,2,9,1,1};
        Scanner sc=new Scanner(System.in);
        int k=sc.nextInt();
        int MaxSum=Integer.MIN_VALUE;
        int sum=0;
        for(int i=0;i<k;i++){
            sum+=arr[i];
        }
        MaxSum=Math.max(MaxSum,sum);
        int right=arr.length-1;
        for(int i=k-1;i>=0;i--){
            sum=sum-arr[i];
            sum=sum+arr[right];
            MaxSum=Math.max(MaxSum, sum);
            right--;
        }
        System.out.println(MaxSum);

    }
    public static void main(String[] args) {
       Scanner sc=new Scanner(System.in);
    //    String name=sc.next();
    //    System.out.println(name);
    // shiftString();
    maximumPointEarnBYCorner();
    

    }
    
}
