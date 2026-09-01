import java.util.TreeSet;

public class revise {
    public static void main(String[] args) {
        Products p1 = new Products(1, "conputer", 2000);
        Products p2 = new Products(10, "iphone", 3000);
        Products p3 = new Products(2, "Android", 11000);
        // System.out.println(p1);
        // System.out.println(p1.Name());
        // System.out.println(p1.toString());
        TreeSet<Products> lst = new TreeSet<>();
        lst.add(p1);
        lst.add(p2);
        lst.add(p3);
        System.out.println(lst);

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

}
