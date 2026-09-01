import java.io.FileReader;
import java.util.Properties;

public class properties_class {
    public static void main(String[] args) {
        // Properties prop = System.getProperties();
        // for (var entry : prop.entrySet()) {
        // var key = entry.getKey();
        // var v = entry.getValue();
        // System.out.println(key + " " + v);
        // }
        try {
            FileReader fr = new FileReader("p1.txt");
            Properties p = new Properties();
            p.load(fr);
            System.out.println(p.entrySet());
            for (var entry : p.entrySet()) {
                var key = entry.getKey();
                var v = entry.getValue();
                System.out.println(key + " " + v);
            }

        } catch (Exception ee) {

        }

    }

}
