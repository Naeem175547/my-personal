import java.util.Base64;

/**
 * base4_encode_and_decode
 */
public class base4_encode_and_decode {
    public static void main(String[] args) {
        // String str = "Emaple of Base 64 coversion";
        // System.out.println(str);
        // byte[] b = str.getBytes();
        // // converting into base 64(encoding)
        // String base64 = Base64.getEncoder().encodeToString(b);
        // // converting Base64 to Binary (decoding)
        // System.out.println(base64);
        // byte[] decodeByte = Base64.getDecoder().decode(base64);
        // String s = new String(decodeByte);
        // System.out.println(s);
        // System.out.println("my nam eis mohhamd \"naeem ");

        String s = "My name is mohammad Naeem";
        byte[] b = s.getBytes();
        System.out.println(s + ' ' + b);
        // converting into Base64(encoding)
        // String base64 = Base64.getEncoder().withoutPadding().encodeToString(b);
        String base64 = Base64.getEncoder().encodeToString(b);
        System.out.println(base64);
        // converting base64 to binaryt
        byte[] decodeByte64 = Base64.getDecoder().decode(base64);
        System.out.println(decodeByte64);
        String s1 = new String(decodeByte64);
        System.out.println(s1);

    }

}

enum A {
    jan, feb, march;
}