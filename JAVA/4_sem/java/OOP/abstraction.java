public class abstraction {
    public static void main(String[] args) {
        A a = new B();
        a.print();
        a.print_1();

    }

}

abstract class A {
    int data;

    void print() {
        System.out.println("abstract simple method");

    }

    A() {
        System.out.println("abstract class construcot is running");
    }

    abstract void print_1();

}

class B extends A {

    void print_1() {
        // TODO Auto-generated method stub
        System.out.println("print_1 of class b this is abstract method");

    }

    void f1() {
        System.out.println("f1 is running");
    }

}
