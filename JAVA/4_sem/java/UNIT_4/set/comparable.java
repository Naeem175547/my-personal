import java.util.Comparator;
import java.util.TreeSet;

public class comparable {
    public static void main(String[] args) {
        A p1 = new A(1, "conputer", 2000);
        A p2 = new A(10, "iphone", 3000);
        A p3 = new A(2, "Android", 1000);
        // System.out.println(p1);
        // System.out.println(p1.Name());
        // System.out.println(p1.toString());
        // TreeSet<Products> lst = new TreeSet<>();
        TreeSet<A> lst = new TreeSet<>(new A_comparotr());
        lst.add(p1);
        lst.add(p2);
        lst.add(p3);
        System.out.println(lst);

    }

}

class Products implements Comparable<Products> {
    int pcode;
    String name;
    int price;

    Products(int pcode, String name, int price) {
        this.pcode = pcode;
        this.name = name;
        this.price = price;
    }

    @Override
    public String toString() {
        return pcode + ":" + name + ":" + price;
    }

    // public int compareTo(Object a) {// object type referce variable if not
    // mention
    // // in generic class
    // Products p = (Products) a;
    // if (pcode > p.pcode)
    // return 1;
    // else if (pcode == p.pcode) {
    // return 0;
    // } else {
    // return -1;
    // }
    // }

    public int compareTo(Products p) {// if we have mentioned <Products>
        // Comparable generic class then we can store
        // product object in products refercence variable
        // Products p = (Products) a;
        if (price > p.price)
            return 1;
        else if (price == p.price) {
            return 0;
        } else {
            return -1;
        }

    }

}

// also do using record as i did in comparator

record A(int roll, String Name, int price) {
    public String toString() {
        return this.roll() + ":" + this.Name + ":" + price();
    }

};

class A_comparotr implements Comparator<A> {
    public int compare(A a, A b) {
        if (a.price() > b.price())
            return 1;
        else if (a.price() == b.price())
            return 0;
        else
            return -1;
    }
}
