import java.util.*;
import java.util.Comparator;

import javax.print.attribute.standard.MediaSize.NA;

public class use_of_comparator_in_TreeMap {
    public static void main(String[] args) {
        A s1 = new A(120, "Raman", 24);
        A s2 = new A(25, "Aman", 21);
        A s3 = new A(12, "akash", 19);
        A s4 = new A(31, "Sureah ", 22);
        Map<A, String> mp = new TreeMap<>(new StudentComparator1());
        // Map<Students1, String> mp = new TreeMap<>();
        mp.put(s1, "A");
        mp.put(s2, ("B"));
        mp.put(s3, "C");
        mp.put(s4, "D");
        System.out.println(mp);

    }

}

class A {
    int rollno;
    int age;
    String Name;

    A(int rollno, String Name, int age) {
        this.rollno = rollno;
        this.Name = Name;
        this.age = age;
    }

    public String toString() {
        return "roll_no=" + rollno + " Name=" + Name + " age=" + age;
    }

}

class StudentComparator1 implements Comparator<A> {

    public int compare(A a1, A a2) {
        if (a1.age < a2.age) {
            return 1;
        } else if (a1.age == a2.age) {
            return 0;
        } else {
            return -1;
        }
    }
}

record Students2(int rollno, String name, int age) {
}

class StudentComparator2 implements Comparator<Students2> {
    @Override
    public int compare(Students2 s1, Students2 s2) {
        if (s1.age() > s2.age())
            return 1;
        else if (s1.age() == s2.age())
            return 0;
        else
            return -1;

    }

}

// another method
// for this we will have to make another class for compareTo not same as in
// comparable

// import java.util.Map;
// import java.util.TreeMap;

// class Students1 implements Comparable<Students1> {
// int rollno;
// int age;
// String Name;

// Students1(int rollno, String Name, int age) {
// this.rollno = rollno;
// this.Name = Name;
// this.age = age;
// }

// public String toString() {
// return age + " " + this.Name + " " + this.rollno;
// }

// public int compareTo(Students1 s) {
// if (rollno < s.rollno) {
// return 1;
// } else if (rollno == s.rollno) {
// return 0;
// } else {
// return -1;
// }

// }
// }
