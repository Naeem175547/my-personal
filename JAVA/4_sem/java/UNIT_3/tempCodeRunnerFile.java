public class method_references {
    public static void main(String[] args) {
        B b = new B();
        A a = b::add;
        System.out.println(a.add(10, 20));
    }

}

interface A {
    int add(int x, int y);
}

class B {
    int add(int x, int y) {
        return x + y;

    }
}