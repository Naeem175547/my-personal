public class Record_ {
    public static void main(String[] args) {
        Employee e = new Employee("imran", 100);
        System.out.println(e.name());
        System.out.println(e.salery());
        System.out.println();

        e.display_details();

        A a = new A(10, 20, 01);
        System.err.println(a.x());
        a.display_details();
    }

}

record Employee(String name, int salery) {
    // we can write our own static or non static method also
    void display_details() {
        System.out.println(name + " " + salery);
    }

}

record A(int x, int y, int z) {
    void display_details() {
        System.out.println("x=" + x + " " + "y=" + y + " z=" + z);
    }

}
