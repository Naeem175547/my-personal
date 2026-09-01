public class string {
    public static void main(String[] args) {
        // //when we declare any string like this and after this declare string like a
        // and assign same
        // value then both will point same object but we Strings is immutabe that's why
        // it does not make any differce
        // but while comparing directy it will reture true
        String a = "imran";
        String b = new String("imran");
        String c = "imran";
        String d = new String("imran");
        System.out.println(a == c);
        System.out.println(b.compareTo(d));
    }
}