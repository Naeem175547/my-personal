import java.util.*;

class Student {

    int marks;
    String name;
    Student(int marks, String name) {
        this.marks = marks;
        this.name = name;
    }

    public String toString() {

        return name + " : " + marks;
    }
}

public class Main {

    public static void main(String[] args) {
        Student a=new Student(2, "a");
        // System.out.println(a);
        // System.out.println(a.marks);

        Student[] students = {

                new Student(80, "Ali"),
                new Student(50, "John"),
                new Student(90, "Zara")
        };



        System.out.println(Arrays.toString(students));
        // Output:
        // [Ali : 80, John : 50, Zara : 90]



        Comparator<Student> byMarks =
                new Comparator<Student>() {
                    @Override
                    public int compare(Student a,
                                       Student b) {
                        return a.marks - b.marks;
                    }
                };



        Arrays.sort(students, byMarks);



        System.out.println(Arrays.toString(students));
        // Output:
        // [John : 50, Ali : 80, Zara : 90]



        Comparator<Student> byName =
                new Comparator<Student>() {

                    @Override
                    public int compare(Student a,
                                       Student b) {

                        return a.name.compareTo(b.name);
                    }
                };



        Arrays.sort(students, byName);



        System.out.println(Arrays.toString(students));
        // Output:
        // [Ali : 80, John : 50, Zara : 90]
    }
}