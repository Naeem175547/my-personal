import java.util.*;

public class JavaBasic {
    public static void main(String[] args) {
        // Stack<Integer> s=new Stack<>();
        /*int arr[]={2,3,21};
        // System.out.println(arr);
        s.push(23);
        s.push(10);
        s.push(30);
        System.out.println(s);
        System.out.println(s.pop());
        System.out.println(s.isEmpty());

        */
       /*List<Integer> l=new ArrayList<>();
       l.add(10);
       l.add(30);
       l.add(20);
       l.add(1,100);
       l.remove(1);
       System.out.println(l);
       Vector<Integer> v=new Vector<>(l);
       v.addAll(l);
    //    v.removeAll(l);
    l.add(1000);
    System.out.println(l);
       l.retainAll(v);
       v.retainAll(l);
       System.out.println((int)v.set(2, 2000));
       System.out.println(v);
       l.add(2,20000);
       System.out.println(l);
    //    Object arr[]=l.toArray();
    // Integer arr[]=l.toArray(new Integer[0]);
    //    for(int x:arr){
    //     System.out.println(x);
    //    }

    // Iterator<Integer> i=l.iterator();
    // while(i.hasNext()){
    //     System.out.println(i.next());
    // }

    // l.forEach((value)->{
    //     System.out.println(value);
        
    // });



        */
   //set
//    Set<Integer> s=new HashSet<>();
//    Set<Integer> s=new LinkedHashSet<>();
//       Set<Integer> s=new TreeSet<>();

//    s.add(10);
//    s.add(20);
//    s.add(30);
//    s.add(3);
//    System.out.println(s.remove(20));
//    System.out.println(s);;

//treeset
// Map<Integer,String> map=new HashMap<>();
// Map<Integer,String> map=new LinkedHashMap<>();
Map<Integer,String> map=new TreeMap<>();

map.put(4,"shayan");
map.put(5,"utra");
map.put(1, "Imran");
// map.remove(1);
System.out.println(map.get(1));
System.out.println(map.size());
System.out.println(map.isEmpty());
System.out.println(map.keySet());
System.out.println(map.values());
for(String str:map.values()){
    System.out.println(str);
}
map.replace(1, "khan");
System.out.println(map);
System.out.println(map.containsKey(1));
System.out.println(map.containsValue("Imran"));
Set s=map.entrySet();
System.out.println(s);
map.forEach((index,value)->{
    System.out.println(index+"="+value);
});





    }
    
   

    
}
