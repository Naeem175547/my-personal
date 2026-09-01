class customers {
    int amount = 0;

    synchronized void deposite(int amt) {
        System.out.println("initail: " + amount);
        amount = amount + amt;
        System.out.println("After deposite " + amount);
        try {
            notify();
        } catch (Exception e) {

        }
    }

    synchronized void withdraw(int amt) {
        System.out.println("waiting for ");
        while (amount < amt) {
            try {
                System.out.println("Insufficient funds, waiting for deposit...");
                wait(); // Wait until a deposit is made
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted: " + e.getMessage());
            }
        }
        System.out.println("initail: " + amount);
        amount = amount - amt;
        System.out.println("After withdraw " + amount);
    }
}

class A extends Thread {
    customers cc;

    A(customers c) {
        cc = c;
    }

    public void run() {
        cc.withdraw(5000);
    }
}

class B extends Thread {
    customers cc;

    B(customers c) {
        cc = c;
    }

    public void run() {
        cc.deposite(5000);
    }
}

public class syncrnization {
    public static void main(String[] args) {
        customers c = new customers();
        A t1 = new A(c);
        Thread t2 = new B(c);
        t1.start();
        t2.start();

    }

}
