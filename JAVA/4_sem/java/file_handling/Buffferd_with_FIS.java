import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Buffferd_with_FIS {
    public static void main(String[] args) throws Exception {
        FileInputStream fin = new FileInputStream("abcd.txt");
        InputStreamReader isr = new InputStreamReader(fin);
        BufferedReader fr = new BufferedReader(isr);
        System.out.println((char) fr.read());
        fr.close();
        FileOutputStream fos = new FileOutputStream("abcd.txt", true);
        OutputStreamWriter osr = new OutputStreamWriter(fos);
        BufferedWriter br = new BufferedWriter(osr);
        br.write("imra khan khan");
        br.close();

    }

}
