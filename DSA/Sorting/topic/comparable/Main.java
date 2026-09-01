import java.util.*;

class Student implements Comparable<Student> {

    int marks;
    String name;

    Student(int marks, String name) {

        this.marks = marks;
        this.name = name;
    }



    @Override
    public int compareTo(Student s) {

        return this.marks - s.marks;
    }



    public String toString() {

        return name + " : " + marks;
    }
}



public class Main{

    public static void main(String[] args) {

        Student[] students = {

                new Student(80, "Ali"),
                new Student(50, "John"),
                new Student(90, "Zara")
        };



        System.out.println(Arrays.toString(students));
        // Output:
        // [Ali : 80, John : 50, Zara : 90]



        Arrays.sort(students);



        System.out.println(Arrays.toString(students));
        // Output:
        // [John : 50, Ali : 80, Zara : 90]
    }
}


// note->
// Example WITHOUT toString():

// class Student {

//     int marks;
//     String name;

//     Student(int marks, String name) {
//         this.marks = marks;
//         this.name = name;
//     }
// }

// public class Main {

//     public static void main(String[] args) {

//         Student s = new Student(80, "Ali");

//         System.out.println(s);
//     }
// }
// Output:
// Student@36baf30c



// Example WITH toString():

// class Student {

//     int marks;
//     String name;

//     Student(int marks, String name) {
//         this.marks = marks;
//         this.name = name;
//     }

//     public String toString() {

//         return name + " : " + marks;
//     }
// }

// public class Main {

//     public static void main(String[] args) {

//         Student s = new Student(80, "Ali");

//         System.out.println(s);
//     }
// }

// Output:

// Ali : 80