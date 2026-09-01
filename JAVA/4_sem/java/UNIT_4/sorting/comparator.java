import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class comparator {
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
        Collections.sort(l, new sortbyprice());
        System.out.println(l);
        Collections.sort(l, new sortbypcode());
        System.out.println(l);

    }

}

class Products {
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

}

class sortbyprice implements Comparator<Products> {
    public int compare(Products a, Products b) {
        if (b.price > a.price) {
            return 1;
        } else if (b.price == a.price) {
            return 0;
        } else {
            return -1;
        }

    }
}

class sortbypcode implements Comparator<Products> {
    public int compare(Products a, Products b) {
        if (b.pcode < a.pcode) {
            return 1;
        } else if (b.pcode == a.pcode) {
            return 0;
        } else {
            return -1;
        }

    }
}

// we can make any number of sorting class
