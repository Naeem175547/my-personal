public class sealed_classes_and_interface {
    public static void main(String[] args) {
        B b = new B();
        C c = new C();
        b.f1();
        c.f1();
        x x1 = new x();
        x1.f1();

    }

}

sealed class A permits C, B {
    void f1() {
        System.out.println("F1 is running");
    }

}

sealed interface I permits d {
    void f2();
}

non-sealed class B extends A {
    public void f2() {
        System.out.println("f2 is running");
    }

}

final class C extends A {
    public void f2() {
        System.out.println("f2 is running");
    }

}

final class d implements I {
    public void f2() {
        System.out.println("f2 of class d");
    }
}

sealed class x extends A {

}

final class T extends x {

}