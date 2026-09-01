public class default_method_in_interface {
    public static void main(String[] args) {
        B b = new B();
        b.f1();
        b.f2();
        A.f4();
        b.f3();
        B.f4();// this is calling classs b f4 but it is not the static method overriden ,this
               // is seprate

    }

}

interface A {
    void f1();

    default void f2() {
        System.out.println("default method is running");
    }

    default void f3() {
        System.out.println("default method is running");
    }

    static void f4() {
        System.out.println("static method is running");
    }

    static void f5() {
        System.out.println("static method is running");
    }
}

class B implements A {
    public void f1() {
        System.out.println("abstract method of a but in b");
    }

    public void f3() {
        System.out.println("class b object is runnning");
    }

}