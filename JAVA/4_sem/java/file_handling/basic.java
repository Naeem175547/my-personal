import java.io.FileInputStream;
import java.io.IOException;

public class basic {
    static void print(byte[] arr) {
        System.out.println();
        for (int i = 0; i < arr.length; i++) {
            System.out.println((char) arr[i]);

        }
        System.out.println();
    }

    public static void main(String[] args) throws IOException {

        FileInputStream fin = new FileInputStream("abcd.txt");

        int a1 = fin.read();
        System.out.println(a1);
        System.out.println(fin.available());
        System.out.println(fin.read());
        byte b[] = new byte[5];
        fin.read(b);
        print(b);
        System.out.println(fin.available());
        System.out.println(fin.read());
        System.out.println(fin.skip(4));
        System.out.println(fin.read());
        System.out.println(fin.markSupported());
        fin.mark(10);
        System.out.println(fin.markSupported());
        System.out.println("marks");
        System.out.println(fin.available());
        System.out.println(fin.read());
        System.out.println(fin.read());
        System.out.println(fin.read());
        fin.reset();
        System.out.println(fin.available());
        System.out.println(fin.read());

        // int a1 = fin.read();
        // int a2 = fin.read();
        // int a3 = fin.read();
        // fin.skip(5);
        // System.out.println(a1);
        // byte[] b = new byte[4];
        // fin.read(b);
        // print(b);
        // System.out.println(a2);
        // System.out.println(a3);

    }

}
