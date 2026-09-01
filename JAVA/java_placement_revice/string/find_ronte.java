public class find_ronte {
    static float find_rounte(String str) {
        str = str.toUpperCase();
        int x = 0;
        int y = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == 'E') {
                x++;

            } else if (str.charAt(i) == 'W') {
                x--;

            } else if (str.charAt(i) == 'N') {
                y++;

            } else if (str.charAt(i) == 'S') {
                y--;
            }
        }
        x = (int) Math.abs(x);
        y = (int) Math.abs(y);
        // we know that center points are (0,0)
        x = x * x;
        y = y * y;
        return (float) Math.sqrt(x + y);

    }

    static String capitalize(String str) {
        str = str.trim();
        StringBuilder sb = new StringBuilder();
        sb.append(Character.toUpperCase(str.charAt(0)));
        for (int i = 1; i < str.length(); i++) {
            if ((str.charAt(i) == ' ') && i < str.length() - 1) {
                sb.append(str.charAt(i));
                i++;
                sb.append(Character.toUpperCase(str.charAt(i)));

            } else {
                sb.append(str.charAt(i));
            }
        }
        return sb.toString();
    }

    public static String compress(String str) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            int count = 1;
            while (i < str.length() - 1 && str.charAt(i) == str.charAt(i + 1)) {
                count++;
                i++;
            }
            sb.append(str.charAt(i));
            if (count > 1) {
                sb.append(count);

            }

        }
        return sb.toString();

    }

    public static void main(String[] args) {
        // System.out.println(find_rounte("wwss"));
        // System.out.println(capitalize("hey my name is mohd naeem"));
        // System.out.println("imrannnnnnnn".compareTo("imranz"));
        System.out.println(compress("imrrrannnn"));

    }

}
