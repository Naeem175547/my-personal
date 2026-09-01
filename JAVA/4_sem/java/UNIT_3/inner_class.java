class inner_class {
    int x = 10;

    class A1 {
        int x = 100;

        void print() {
            System.out.println(x + " " + " nested class of inner class");
        }

    }

    class A2 {
        int x = 200;

        void print() {
            System.out.println(x + " " + " nested class of inner class");
        }

        class A2_a {
            int x = 300;

            void print() {
                System.out.println(x + " " + " nested class of a2");
            }

        }

    }

    public static void main(String[] args) {
        System.out.println("imran");
        // inner_class a = new inner_class();
        // inner_class.A1 x = a.new A1();
        // x.print();
        // inner_class.A2 y = a.new A2();
        // y.print();
        // inner_class.A2.A2_a z = y.new A2_a();
        // z.print();

        // // by anonymous object
        // a.new A1().print();
        // a.new A2().print();

        // A1 a = new A1(); //if nested class is nested then it can be called inside the
        // main function directyr otherwise throught main class instance
        // a.print();

        inner_class ac = new inner_class();
        inner_class.A1 a1 = ac.new A1();
        // inner_class.A1 a1=new inner_class().new A1();
        a1.print();

        inner_class.A2 a2 = ac.new A2();
        a1.print();

        inner_class.A2.A2_a a2_a = a2.new A2_a();
        a2_a.print();

    }

}