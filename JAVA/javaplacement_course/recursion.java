
public class recursion {
    //print number 1 to n
    public static void print_1_to_n(int n){
        if(n==0)
        return;
        print_1_to_n(n-1);
        System.out.println(n);
    }
    //print number n to 1
    public static void print_n_to_1(int n){
        if(n==0){
        return;
        }
        System.out.println(n);
        print_n_to_1(n-1);
        
    }
    //factorial a number n
    public static int factorial(int n){
        if(n==1)
        return 1;
        int a=factorial(n-1);
        int b=n*a;
        return b;
       // return n * factorial(n-1);
    }
    //sum of first n natural number
    public static int sum(int n){
        if(n==1)
        return 1;
        return n + sum(n-1);
        
    }
    //fibonacci series
    public static void fibonacci(int n){
        
    }
    //array is sort or not
    public static boolean array_sort(int arr[],int i){
        if(i==arr.length-1){
            return true;

        }
        /*if(arr[i]>arr[i+1]){
            return false;


        }
        return array_sort(arr, i+1);
        */
        return arr[i]<=arr[i+1] && array_sort(arr, i+1);
    }
    //first occurence
    public static int first_occurence(int arr[],int i,int key){
        if(i==arr.length){
            return -1;
        }
        if(arr[i]==key){
            return i;
        }
        return first_occurence(arr, i+1, key);
    }
    //last occurence
    public static int last_occurence(int arr[],int i,int key){
        if(i==arr.length){
            return -1;
        }
        int isfound=last_occurence(arr, i+1, key);
        if(isfound==-1 && arr[i]==key){
            isfound=i;
        }
        return isfound;
        
        
    }
    public static int pow(int x,int n){
        if(n==1)
        return x;
        return x*pow(x, n-1);
        
    }
    public static int pow_1(int x,int n){
        if(n==0){
            return 1;
        }
        int halfPowerSq=pow_1(x,n/2)*pow_1(x, n/2);
        if(n%2!=0){
            halfPowerSq=x*halfPowerSq;
        }
        return halfPowerSq;
    }
    public static int pow_2(int x,int n){
        if(n==0){
            return 1;
        }
        int halfPower=pow_1(x,n/2);
        int halfPowerSq=halfPower*halfPower;
        if(n%2!=0){
            halfPowerSq=x*halfPowerSq;
        }
        return halfPowerSq;
    }
    public static  int tillingproblem(int n){
        if(n==0 || n==1)
        return 1;
        // kaam
        //verticle
        int fnmn=tillingproblem(n-1);
        //horizontal
        int fnmn1=tillingproblem(n-2);
        return fnmn +fnmn1;

    }
    //remove dublicate my code
    
    // remove dublicate 
    public static void remove_dublicate(String str,int i,StringBuilder newstr,Boolean map[]){
        if(i==str.length()){
            System.out.println(newstr);
            return;
        }
        char c=str.charAt(i);
        if(map[c-'a']==true){
            remove_dublicate(str, i+1, newstr, map);

        }
        else{
            map[c-'a']=true;
            remove_dublicate(str, i+1, newstr.append(c), map);
        }
    }
    //friend pairing problem
    public static int friend_pairing(int n){
        if(n==1||n==2){
            return n;
        }
        return friend_pairing(n-1) + (n-1)*factorial(n-2);
    }
    //print all binary string of size n without consecutive
    public static void print_binary_string(int n,int lastplace,String str){
        if(n==0){
            System.out.println(str);
            return;
        }
        print_binary_string(n-1,0, str+"0");
        if(lastplace==0){
            print_binary_string(n-1, 1, str+"1");
        }
    }

    

    
  
    public static void main(String[] args) {
       // print_n_to_1(5);
       //System.out.println(factorial(4));  
      // System.out.println(sum(5));      
      int arr[]={2,3,1,2,5,1,2};
      //System.out.println(array_sort(arr, 0));
     // System.out.println("value is find index no=="+first_occurence(arr, 0, 1));
    //  System.out.println("value is find index no=="+last_occurence(arr, 0, 1));
     // System.out.println(pow_2(4, 3));
    // remove_dublicate("imrannkkan", 0, new StringBuilder(""), new Boolean[26]);
    print_binary_string(3, 0, "");
    
   
    }
    
}
