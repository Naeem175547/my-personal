import java.util.*;

public class Hashset {
    public static void main(String[] args) {
        HashSet<String> hs = new HashSet<String>();
        HashSet<Integer> hsi = new HashSet<>();
        hs.add("imran");
        hs.add("shayan");
        hs.add("naeem");
        hs.add("imran");

        // System.err.println(hs);
        for (String s : hs) {
            System.out.println(s);
        }

        Iterator<String> itr = hs.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }
        hs.remove("naeem");
        System.out.println(hs);

        hsi.add(10);
        hsi.add(10);
        hsi.add(100);
        hsi.add(1932);
        hsi.add(0);
        System.out.println(hsi);

    }

}
