import java.io.File;

public class file_class {
    public static void main(String[] args) throws Exception {
        File f = new File("abcd1.txt");
        System.err.println(f.exists());
        System.out.println(f.getName());
        System.out.println(f.canExecute());
        System.out.println(f.canWrite());
        System.out.println(f.length());
        f.delete();

    }

}
