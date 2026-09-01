
public class Oop {

    public static void main(String[] args) {
        Student s1 = new Student("Imran", 23);
        s1.detail();
        s1.detail_With_static();

    }

}

class Student {
    String name;
    int roll_no;
    static String college_name = "VKIT";

    void detail() {
        System.out.println(name);
        System.out.println(roll_no);
        System.out.println(college_name);
    }

    static void detail_With_static() {

        System.out.println(college_name);

    }

    Student(String name, int roll_no) {
        this.name = name;
        this.roll_no = roll_no;

    }
}
