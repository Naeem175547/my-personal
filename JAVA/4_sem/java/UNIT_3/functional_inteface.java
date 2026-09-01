class functional_inteface {
    public static void main(String[] args) {
        // Aa a = new Aa();
        // a.print();

    }

}

@FunctionalInterface
interface A {
    void print();

}

class Aa implements A {
    public void print() {
        System.out.println("running");
    }

}
