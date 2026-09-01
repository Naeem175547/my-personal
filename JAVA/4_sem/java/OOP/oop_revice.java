class oop_revice {

    public static void main(String[] args) {
        B a = new B(56);
        // a.data = 10;
        // ;a.f1();
        // a.f2();
        // a.print();

        // a.f3();
        System.out.println(a.data);
        C c = new C();

    }

}

class A {
    int data;

    void f1() {
        System.out.println("f1 is running of class A");
    }

    void f2() {
        System.out.println("f2 is runnin of class A");
    }

}

class B extends A {
    B(int x) {
        super.data = x;
    }

    void f2() {
        System.out.println(" f2 is running of B");
        // super.f2();
    }

    void f3() {
        System.out.println("f3 is running of B");
    }

    void print() {
        System.out.println(data);
    }

}

class C extends B {

    void print() {
        System.out.println(super.data);
        f1();
        f2();
        f3();
    }

}

class copy {
    int data;
    int arr[];

    copy() {
        arr = new int[] { 1, 2, 3, 4, 5 };
    }

    copy(copy c) {
        arr = new int[c.arr.length];
        for (int i = 0; i < c.arr.length; i++) {
            arr[i] = c.arr[i];
        }

        this.data = c.data;

    }

    void print() {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

}
