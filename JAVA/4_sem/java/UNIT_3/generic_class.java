public class generic_class {
    static <T> T[] generic_method(T[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
        return arr;
    }

    public static void main(String[] args) {
        MyCollection m = new MyCollection();// by defualt object type
        MyCollection<Integer> m1 = new MyCollection<Integer>();
        MyCollection<String> m2 = new MyCollection<String>();
        m.x = 10;
        System.out.println(m.x);
        m1.x = 100;
        m2.x = "imran kan";

        generic<Integer, String> s = new generic<Integer, String>(10, "khan");
        s.print("new value");

    }

}

class MyCollection<t> {
    t x;

}

class generic<T, S> {
    T x;
    S y;

    generic(T x, S y) {
        this.x = x;
        this.y = y;
    }

    <pi> void print(pi s) {
        System.out.println(x + " " + y);
        System.out.println(s);
    }

}
