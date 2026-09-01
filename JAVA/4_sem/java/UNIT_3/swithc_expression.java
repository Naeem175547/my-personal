import java.beans.Expression;

public class swithc_expression {
    public static void main(String[] args) {
        Day today = Day.TUESDAY;
        // System.out.println(Day.SATURDAY);
        int x = -1;

        // switch (today) {
        // case MONDAY:
        // case FRIDAY:

        // x = 10;
        // break;
        // case SUNDAY:
        // case SATURDAY:
        // x = 100;
        // case TUESDAY:
        // case WEDNESDAY:
        // case THURSDAY:
        // x = 1000;
        // break;
        // default:
        // System.out.println("please select valid value");
        // }
        // System.out.println(x);

        // switch Expression
        x = switch (today) {
            case MONDAY, FRIDAY, SUNDAY -> 6;// these value or enum data type ok..
            case TUESDAY -> 7;
            case THURSDAY -> 8;
            case WEDNESDAY, SATURDAY -> 9;
            default -> 100;

        };

        System.out.println(x);

    }

    enum Day {
        SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY

    }
}
