public class In_heritance{
    public static void main(String[] args) {
        Mammals a=new Dog();
        Animal d=new Dog();
        d.basic();
        
        

        
    }
}
class Animal{
    String color;
    void eat(){
        System.out.println("eats animal class");
    }
    void breathe(){
        System.out.println("breathes");
    }
    void basic(){
        System.out.println("animal is running");
    }
}
class Mammals extends Animal{
    int legs=10;
    void basic(){
        System.out.println("mamals is running");
    }
}
class Dog extends Mammals{
    String breed="shayan";
    void basic(){
        System.out.println("dog is running");
    }


}
