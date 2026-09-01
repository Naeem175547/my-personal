import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class propertiesclass {
    public static void main(String[] args) {
        // // Retrieve all system properties
        // Properties p = System.getProperties();

        // // Iterate through the properties and print the key-value pairs
        // for (var entry : p.entrySet()) {
        // System.out.println(entry.getKey() + " = " + entry.getValue());
        // }

        Properties p = new Properties();
        // setting properties
        p.setProperty("databs.url", "databse url details");// staring key and string value
        p.setProperty("databse.username,", "rooot");
        p.setProperty("database.password", "password");
        // savin to file
        try (FileOutputStream fos = new FileOutputStream("config.properties")) {// file name
            p.store(fos, "databsh configruation");
            System.out.println("propeties saved succesfully");

        } catch (IOException e) {
            e.printStackTrace();
        }

        // loading propetis from file

        Properties p1 = new Properties();
        try (FileInputStream fin = new FileInputStream("config.properties")) {
            System.out.println("loading properties");
            p1.load(fin);

            p1.forEach((key, value) -> System.out.println(key + "=" + value));

            System.out.println(p.getProperty("databs.url"));

        } catch (IOException e) {

        }
    }
}