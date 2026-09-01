
public class anonymous_class {
    public static void main(String[] args) {

        new A() {
            void f1() {
                System.out.println("my code is running");
            }

            void f2() {
                System.out.println("imran khan");
            }

        }.f2();

        new B() {
            public void f2() {
                System.out.println("interce in anonymous class is running");
            }
        }.f2();

        new Thread() {
            public void run() {
                for (int i = 0; i < 5; i++) {
                    System.out.println("my name is mohaamd naeem");

                }

            }

        }.start();

        Thread a = new Thread(
                new Runnable() {
                    public void run() {
                        for (int i = 0; i < 5; i++) {
                            System.out.println("my name is mohaamd naeem HELLO");

                        }

                    }
                });
        a.start();
        // new Thread() {
        // public void run() {
        // for (int i = 0; i < 5; i++) {
        // System.out.println("A");
        // }
        // }
        // }.start();
        // for (int i = 0; i < 5; i++) {
        // System.out.println("main class is running");
        // }
        // new Thread(
        // new Runnable() {
        // public void run() {
        // System.out.println("thread using function interfae");
        // }

        // }).start();
    }

}

class A {
    void f1() {
        System.out.println("class a is running");
    }
}

interface B {
    void f2();
}
