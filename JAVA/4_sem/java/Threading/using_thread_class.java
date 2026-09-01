public class using_thread_class {
    static void run() throws InterruptedException {
        for (int i = 0; i < 10; i++) {
            System.out.println("main class is running");
            // try {
            // Thread.sleep(1000);
            // } catch (InterruptedException e) {
            // e.printStackTrace();
            // }
            Thread.sleep(1000);
        }
    }

    public static void main(String[] args) throws Exception {
        A t1 = new A();
        Thread t2 = new Thread(new B());
        t1.start();
        t2.start();

        run();
        System.out.println("Working is completed");
    }
}

class A extends Thread {
    int sv = 0;

    public void run() { // we can't use throws in override function
        for (int i = 0; i < 10; i++) {
            System.out.println("A is running");
            System.out.println(sv++);
            try {
                sleep(1000);
            } catch (InterruptedException e) {
                // e.printStackTrace();
            }
        }
    }
}

class B implements Runnable {
    public void run() {

        for (int i = 0; i < 10; i++) {
            System.out.println("B is running");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }
}