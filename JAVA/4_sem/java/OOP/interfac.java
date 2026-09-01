
public class interfac {
    public static void main(String[] args) {
        // classplayer a = new A();

        // System.out.println(a.x);
        A a = new B();
        a.print();
        System.out.println(a.x);

    }

}

interface classplayer {
    int x = 10;

    void print();
}

class A {
    int data;
    int x = 20;

    public void print() {
        System.out.println("Imran a class print");
    }

}

class B extends A {
    int x = 200;

    public void print() {
        System.out.println("Imran B class print");
    }

}