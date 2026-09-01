public class Polymorphism {
    public static void main(String[] args) {
        B x = new B();
        x.setData((long) 23);

        x.printdata();

    }
}

class A {
    String name;
    long roll_no;

    // A(int roll_no, String name) {
    // this.name = name;
    // this.roll_no = roll_no;
    // }

    A() {
        System.out.println("simple construcotr is running");
    }

    void setData(int roll_no) {

        this.roll_no = roll_no;
        System.out.println("interger value has beeen assigned to long");
    }

    void setData(long roll_no) {

        this.roll_no = roll_no;
        System.out.println("long value has beeen assigned to long");
    }

    protected void printdata() {
        System.out.println(name);
        System.out.println(roll_no);
    }
}

class B extends A {
    B() {
        System.out.println("subclass construtor is running");
    }

    void setData(int roll_no) {

        this.roll_no = roll_no;
        System.out.println("interger value has beeen assigned to long");
        System.out.println("sub class is running");
    }

    // void setData(long roll_no) {

    // this.roll_no = roll_no;
    // System.out.println("long value has beeen assigned to long");
    // System.out.println("sub class is running");
    // }

}