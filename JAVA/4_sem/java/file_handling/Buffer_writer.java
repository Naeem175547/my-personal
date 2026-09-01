import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Buffer_writer {
    public static void main(String[] args) throws IOException {
        FileWriter fw = new FileWriter("abcd.txt");
        BufferedWriter bw = new BufferedWriter(fw);
        // fr.write("imran khan again");
        bw.write("imran khan agian  dong anything\n");
        bw.write("imran khan agian  dong anything\n");
        bw.write("imran khan agian  dong anything\n");
        bw.write("imran khan agian  dong anything \n");
        bw.close();
        FileReader fr = new FileReader("abcd.txt");
        BufferedReader br = new BufferedReader(fr);

        // char ch[] = new char[10];
        // br.read(ch);
        // System.out.println(new String(ch));
        // br.close();
        String rl = br.readLine();
        while (rl != null) {
            System.out.println(rl);
            rl = br.readLine();

        }

        br.close();

    }

}
