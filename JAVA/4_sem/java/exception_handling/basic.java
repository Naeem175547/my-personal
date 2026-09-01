import java.io.IOException;

class a extends ArithmeticException {

    public String toString() {
        return "exception is comming from declare class";
    }

    public String getMessage() {
        return "my error from getMessage";
    }

}

class basic {

    public static void main(String[] args) throws IOException {
        // int a = 10;
        // float b = 20;
        // // System.out.println(a / 0);
        // System.out.println(b / 0);
        // System.out.println();
        // if (1 < 2) {
        // throw new IndexOutOfBoundsException("merea messeaege");
        // }
        if (2 < 3) {
            // throw new IOException();
        }
        String s1 = null;
        try {
            System.out.println(1 / 0);

        } catch (a e) {
            System.out.println("this is runnig ");
            System.out.println(e.toString());
        }
        // catch (ArithmeticException e) {
        // System.out.println("ArithematicException");
        // System.out.println(e.getMessage());
        // } catch (NullPointerException e) {
        // System.out.println("NullPointersException");
        // System.out.println(e.getMessage());
        // finally {
        // System.out.println("end..");
        // }
        // System.out.println("imran");

    }
}
