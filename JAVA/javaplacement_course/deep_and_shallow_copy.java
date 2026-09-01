public class deep_and_shallow_copy {
    public static void main(String[] args) {
        Student s1=new Student();
        s1.name="imran khan";
        s1.roll=32;
        s1.password="naeem";
        s1.marks[0]=100;
        s1.marks[1]=200;
        s1.marks[2]=300;
        //Student s2=new Student(s1);//deep copy constructor
        Student s2=s1;
        s2.password="xyz";
        s2.marks[1]=300;
        s2.marks[2]=2000;
        s1.marks[2]=4000;
        for(int i=0;i<s1.marks.length;i++){
            System.out.println(s2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .marks[i]);
        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }
    
}
class Student{
    String name;
    int roll;                                                                                                                                                                                                                                                                                                                                                   
    String password;                                              
    int marks[];
    /* shallow copy
    Student(Student s1){
        marks=new int[3];
        
        this.name=s1.name;
        this.roll=s1.roll;
        this.marks=s1.marks;
    }*/
    //deep copy
    Student(Student s1){
        marks=new int[3];
        
        this.name=s1.name;
        this.roll=s1.roll;
        for(int i=0;i<3;i++){
            this.marks[i]=s1.marks[i];
        }
    }

    Student(){
        marks=new int[3];
        System.out.println("constructor is called");
    }
    Student(String name){
        marks=new int[3];
        this.name=name;
    }
}
