public class method_references {
    public static void main(String[] args) {
        // B b = new B();
        // A a = b::add1;//reference to an instance method
        A a = B::add;// if method is static in class B .static method reference
        // A a=B::new;//constructor referece

        System.out.println(a.add(10, 20));
    }

}

interface A {
    int add(int x, int y);
}

class B {
    B(int x, int y) {
        System.out.println(x + y);
    }

    static int add(int x, int y) {
        return x + y;

    }

    int add1(int x, int y) {
        return x + y;

    }

}

// note -- signature of method reference and abstuct method of functional
// interface should be same
