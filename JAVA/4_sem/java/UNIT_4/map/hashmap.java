import java.util.*;

public class hashmap {
    public static void main(String[] args) {
        // Map<Integer, Integer> hm = new HashMap<>();
        // Map<Integer, Integer> hm = new LinkedHashMap<>();
        // Map<Integer, Integer> hm = new TreeMap<>();
        // hm.put(1, 100);
        // hm.put(20, 100);
        // hm.put(3, 12);
        // System.out.println(hm);
        // System.out.println(hm.size());
        // Set s = hm.entrySet();
        // // System.out.println(s.getKey());
        // // // for (Object sObject : s) {
        // // // System.out.println(sObject);

        // // //
        // // hm.replace(1, 1000000);

        // // Iterator itr = s.iterator();
        // // while (itr.hasNext()) {
        // // System.out.println(itr.next());
        // // }

        Map<Integer, Integer> m = new LinkedHashMap<>();
        m.put(1, 10);
        m.put(2, 20);
        m.put(3, 40);

        System.out.println(m);
        System.out.println(m.get(3));
        System.out.println(m.size());
        System.out.println(m.entrySet());
        System.out.println(m.keySet());
        System.out.println(m.remove(2));
        m.replace(1, 100);
        System.out.println(m.containsKey(3));
        System.out.println(m.containsValue(100));

        Iterator itr = m.entrySet().iterator();
        while (itr.hasNext()) {
            Map.Entry entry = (Map.Entry) itr.next();
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
        System.out.println();

        for (var x : m.entrySet()) {
            System.out.println(x.getKey() + " " + x.getValue());

        }
        System.out.println("working");
        m.forEach((key, value) -> System.out.println(key + " " + value));
        // for (var x : m.keySet()) {
        // System.out.println(x + " " + m.get(x));
        // }

    }

}
