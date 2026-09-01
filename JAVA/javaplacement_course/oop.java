import java.time.chrono.MinguoChronology;

public class oop {//class name always must be in CAPITAL LATTER
    public static void main(String[] args) {
        Pen a=new Pen();
        a.setColor("Blue");
        a.setTip(5);
        System.out.println(a.tip);
        a.setTip(34);
        System.out.println(a.tip);
        a=new Pen();
        System.out.println(a.tip);
       
        BackAccount x=new BackAccount();
        x.setPassword("imran khan");
        System.out.println(x.getpassword());
        Student b=new Student("imranff");
        Student y=new Student();
       



        
    }
    
                                                               

    
}
class Pen{
    String color;
    int tip;
    //method name must start small letter
    void setColor(String newColor){
        color=newColor;
    }
    void setTip(int newTip){
        tip=newTip;


    }

}
class Student{
    String name;
    int age;
    float percentage;
    Student(String s){
        name=s;
    }
    Student(){
        
    }
    }
 
class BackAccount{
    public String username;
    private String password;
    public void setPassword(String pwd){
        password=pwd;
    }
    public String getpassword(){
        return password;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }

}

