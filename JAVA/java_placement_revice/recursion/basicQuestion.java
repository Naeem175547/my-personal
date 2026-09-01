public class basicQuestion {
    static void printNTo1(int n){
        if(n==0){
            return;
        }
       System.out.print(n+" ");
       printNTo1(n-1);
       System.out.println();
       System.out.print(n+" ");
       

    }
    static int factorial(int n){
        if(n==1){
            return 1;

        }
        int result=n*factorial(n-1);
        return result;
    }
    static int sumOfNaturalNumber(int n){
        if(n==1){
            return 1;

        }
        int result=n+sumOfNaturalNumber(n-1);
        return result;
    }
    static int nthfibbonachi(int n){
        if(n==0 || n==1){
            return n;
        }
        return nthfibbonachi(n-1) + nthfibbonachi(n-2);
    }
    static boolean  isSorted(int arr[],int i){
        if(i==arr.length-1){
            return true;
        }
        if(arr[i+1]<arr[i]){
            return false;

        }
        return isSorted(arr, i+1);
    }
    static int  firstOccurance(int arr[],int key,int i){
        if(i==arr.length){
            return -1;
        }
        if(arr[i]==key){
            return i;

        }
        return firstOccurance(arr,key, i+1);
    }
    static int  lastOccurance(int arr[],int key,int i){
        if(i==arr.length){
            return -1;
        }
        int isfound=lastOccurance(arr,key,i+1);
        if(isfound==-1 && arr[i]==key){
            isfound=i;
        }
        return isfound;
    }

    static int power(int x,int n){
        if(n==1){
            return x;
        }
        // return x*power(x, n-1);
        int a=power(x, n-1);
        int ans=x*a;
        return ans;
    }

    static int power2(int x,int n){
        if(n==1){
            return x;
        }
        // int halfpower=power2(x, n/2)*power2(x, n/2);
        int halfpower=power2(x, n/2);
        int halfpowersq=halfpower*halfpower;
        if(n%2!=0){
            halfpowersq=x*halfpowersq;
        }
        return halfpowersq;
    }
    static int tailing(int n){
        if(n==0 || n==1){
            return 1;
        }
        int fn1=tailing(n-1);
        int fn2=tailing(n-2);
        return fn1+fn2;

    }
    static void removeDublicate(String str,int idx,StringBuilder sb,boolean map[]){
        if(idx==str.length()){
            return;
        }
        char ch=str.charAt(idx);
        if(map[ch-'a']==true){
            removeDublicate(str, idx+1, sb, map);


        }
        else{
            map[ch-'a']=true;
            removeDublicate(str, idx+1, sb.append(ch), map);
        }
    }

    static void printbtStrings(int n,String str){
        if(n==0){
            System.out.println(str);
            return;
        }
        printbtStrings(n-1, str+"0");
        printbtStrings(n-1, str+"1");
        

    }
    static void printbtStringsWithoutconsecutiveon(int n,String str,char lastplace){
        if(n==0){
            System.out.println(str);
            return;
        }
        printbtStringsWithoutconsecutiveon(n-1,str+"0",'0');
        if(lastplace!='1')
        printbtStringsWithoutconsecutiveon(n-1,str+"1",'1');

        

    }
    static int printbtStringsWithoutconsecutiveon1(int n,String str,char lastplace){
        if(n==0){            
            return 1;
        }
        int i=printbtStringsWithoutconsecutiveon1(n-1,str+"0",'0');//we can remove str from code 
        int j=0;
        if(lastplace!='1')
         j=printbtStringsWithoutconsecutiveon1(n-1,str+"1",'1');
        
         return i+j;

        

    }
    static int friend_pairing(int n){
        if(n==1 || n==2){
            return  n;
        }
        return friend_pairing(n-1)+(n-1)*friend_pairing(n-2);

    }





    public static void main(String[] args) {
        int arr[]={1,2,83,2,5};
        // printNTo1(5);
        // System.out.println(factorial(5));
        System.out.println(sumOfNaturalNumber(5));
        System.out.println(nthfibbonachi(3));
        System.out.println(isSorted(arr, 0));
        System.out.println(firstOccurance(arr, 2, 0));
        System.out.println(lastOccurance(arr, 2, 0));
        System.out.println(power2(5, 3));
        System.out.println(tailing(3));
        StringBuilder sb=new StringBuilder();
        removeDublicate("apnacolleage", 0 , sb,new boolean[26]);
        System.out.println(sb);
        printbtStrings(3, "");
        System.out.println();
        printbtStringsWithoutconsecutiveon(3, "", '0');
        System.out.println(printbtStringsWithoutconsecutiveon1(3, "", '0'));
        System.out.println(friend_pairing(3));
        
    }
    
}
