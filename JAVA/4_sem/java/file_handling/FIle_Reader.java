import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FIle_Reader {
    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader("abcd.txt");
        System.out.println((char) fr.read());
        System.out.println();
        System.out.println((char) fr.read());

        char[] arr = new char[4];
        fr.read(arr);
        System.out.println(new String(arr));
        fr.close();
        FileWriter fw = new FileWriter("new.txt", true);
        fw.write("\nhey my name is\n");
        fw.write(97);

        fw.close();
    }

}
