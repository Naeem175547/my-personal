public class inheritance {

    public static void main(String[] args) {
        B obj = new B();
        obj.f1();
        obj.f2();
        // obj.f3();
        obj.setData(3);
        obj.print();

    }

}

class A {
    int x;

    void setData(int data) {
        x = data;
    }

    void print() {
        System.out.println(x);
    }

    void f1() {
        System.out.println("A f1");
    }

    void f2() {
        System.out.println("A f2");
    }

}

class B extends A {
    @Override

    void print() {
        System.out.println(x);
    }

    void f2() {
        System.out.println(" B f2");
    }

    void f3() {
        System.out.println(" B f3");
    }

}