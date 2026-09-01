import java.io.FileInputStream;

public class File_Input_Stream {
    static void print(byte[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");

        }
        System.out.println();
    }

    public static void main(String[] args) {

        try {
            FileInputStream fin = new FileInputStream("abcd.txt");
            // int a1 = fin.read();
            // int a2 = fin.read();
            // int a3 = fin.read();
            // fin.skip(5);
            // System.out.println((char) a1);
            // fin.mark(0);
            // // fin.reset();
            // System.out.println((char) a2);

            // byte[] b = new byte[4];
            // fin.read(b);
            // System.out.println(new String(b));

            // // fin.read(b);
            // System.out.println(fin.read());

            // int a = fin.read();
            // while (a != -1) {
            // System.out.print((char) a);
            // a = fin.read();
            // }

            int size = fin.available();
            byte[] arr = new byte[size];
            fin.read(arr);// if some value not in byte arr then by default value 0;
            String str = new String(arr);
            System.out.print(str);

            System.out.println(size);

            fin.close();

        } catch (Exception ee) {

        }

    }

}
