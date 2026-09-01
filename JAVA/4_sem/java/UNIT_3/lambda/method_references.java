public class method_references {
    public static void main(String[] args) {
        A a = (x, y) -> x + y;// not put retrun here othewise erro
        A b = (x, y) -> {
            return x + y;
        };// like this we can write

        System.out.println(a.add(20, 3));

    }

}

interface A {
    int add(int a, int b);
}