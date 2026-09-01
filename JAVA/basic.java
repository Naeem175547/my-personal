
import java.io.BufferedReader;
import java.io.InputStreamReader;


public class basic {
    public static void main(String[] args) throws  Exception{
        // Scanner sc=new Scanner(System.in);
        // System.out.println(sc.nextInt());

        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        String str=br.readLine();
        int num=Integer.parseInt(str);
        System.out.println(num);
    }

    
}
