import java.io.BufferedReader;
import java.io.FileReader;

public class try_with_resources {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("abcd.txt"))) {
            System.out.println(br.readLine());

        } catch (Exception ee) {
            System.out.println(ee.getMessage());

        }
        System.out.println("");
    }

}
