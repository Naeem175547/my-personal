import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Scanner;

public class file_input_output_stream {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        System.out.println("Source FIle:;");
        String src = sc.nextLine();
        FileInputStream fin = new FileInputStream(src);
        int size = fin.available();
        byte[] arr = new byte[size];
        fin.read(arr);// data will be written on byte arr
        fin.close();
        System.out.println("destination file");
        String dns = sc.nextLine();
        FileOutputStream fout = new FileOutputStream(dns);
        fout.write(arr);
        fout.close();
        System.out.println("Done");

    }

}
