
import java.io.IOException;
import java.lang.*;

public class using_runnable_interferce {
    static void run1() throws Exception {
        for (int i = 0; i < 10; i++) {
            System.out.println("main class is running");
            // Thread.sleep(1000);
        }
    }

    public static void main(String[] args) throws Exception {
        // Thread t1 = new Thread(new A());
        // Thread t2 = new Thread(new A());

        Thread t1 = new Thread(new MyThread());
        Thread t2 = new Thread(new MyThread());

        t1.setName("Thread A");
        t2.setName("Thread B");

        t1.start();
        t2.start();
        // Thread.sleep(1000);

        run1();
        System.out.println("Woking is completd");

    }

}

class A implements Runnable {
    public void run() {
        for (int i = 0; i < 10; i++)
            System.out.println("A is runnig");
    }
}

class B implements Runnable {
    public void run() {
        for (int i = 0; i < 10; i++)
            System.out.println("B is runnig");
    }
}

class MyThread implements Runnable {
    public void run() {
        for (int i = 0; i < 10; i++)

            try {
                Thread.sleep(5000);
                System.out.println(Thread.currentThread().getName() + " is runnig");
            } catch (Exception e) {

            }

    }

}
