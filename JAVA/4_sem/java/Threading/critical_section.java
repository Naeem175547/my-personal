class shared {
    int x = 10;
}

class A extends Thread {
    private shared ss;

    A(shared s) {
        ss = s;
    }

    public void run() {
        System.out.println("A1");
        System.out.println("A2");
        System.out.println("A2");
        // critical section
        synchronized (ss) {
            System.out.println("{");
            System.out.println("X=" + ss.x);
            ss.x = ss.x * 2;
            System.out.println("X=" + ss.x);
            System.out.println("}");
        }

        // critical sectin
        System.out.println("A4");
        ;
        System.out.println("A5");
        System.out.println("A6");

    }

}

class B extends Thread {
    private shared ss;

    B(shared s) {
        ss = s;
    }

    public void run() {
        System.out.println("B1");
        System.out.println("B2");
        System.out.println("B2");
        // critical section
        synchronized (ss) {
            System.out.println("{");
            System.out.println("X=" + ss.x);
            ss.x = ss.x * 2;
            System.out.println("X=" + ss.x);
            System.out.println("}");
        }

        // critical sectin
        System.out.println("B4");
        ;
        System.out.println("B5");
        System.out.println("B6");

    }

}

public class critical_section {
    public static void main(String[] args) {
        shared x = new shared();// we created share class object so that synchronize object should be same
                                // reference not same class
        Thread t1 = new A(x);
        Thread t2 = new B(x);
        System.out.println(t1.getPriority() + " " + t2.getPriority());
        t2.setPriority(10);
        // System.out.println(t1.getPriority() + " " + t2.getPriority());
        t1.start();
        t2.start();
        // try { ///this code will resume main thread until t1 and t2 run
        // t1.join();
        // t2.join();
        // } catch (InterruptedException e) {
        // e.printStackTrace();
        // }
        System.out.println("this is running main");

    }

}
