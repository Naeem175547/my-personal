
public class anonymous_object {

    public static void main(String[] args) {
        new A().x = 100;
        new A().print();// we use anonymous object where we don't need more than one becuase every time
                        // new object will be crated

    }

}

class A {
    int x = 50;

    void print() {
        System.out.println(x);
    }
}
