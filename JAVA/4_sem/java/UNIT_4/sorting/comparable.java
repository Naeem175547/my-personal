import java.util.ArrayList;
import java.util.Collections;

public class comparable {
    public static void main(String[] args) { // all wrapper class implements comparable but non wrapper we have to
                                             // implements if want to sort
        Products l1 = new Products(1, "imran", 200);
        Products l2 = new Products(2, "shayan", 100);
        Products l3 = new Products(10, "naee", 10);
        ArrayList<Products> l = new ArrayList<>();
        l.add(l1);
        l.add(l2);
        l.add(l3);
        System.out.println(l);
        Collections.sort(l);
        System.out.println(l);

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

    public int compareTo(Products a) {
        if (this.price > a.price) {
            return 1;
        } else if (this.price == a.price) {
            return 0;
        } else {
            return -1;
        }

    }
}
