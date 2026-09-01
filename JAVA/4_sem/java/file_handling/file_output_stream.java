import java.io.FileOutputStream;

public class file_output_stream {
    public static void main(String[] args) throws Exception {
        FileOutputStream fout = new FileOutputStream("new.txt", false);
        // fout.write('c');
        byte[] arr = { 14, 13, 97, 98, 99, 1, 3 };
        // fout.write(arr);
        fout.write(97);
        fout.write(100);
        fout.write(arr);
        fout.write('\n');
        byte b[] = { 97, 97, 2, 32, 23, 23, 43, 23, 23 };
        fout.write(b);
        fout.write('\n');

        String s = "Imran khan";
        char[] ca = s.toCharArray();
        for (int i = 0; i < ca.length; i++) {
            fout.write(ca[i]);
        }

        fout.close();
    }

}
