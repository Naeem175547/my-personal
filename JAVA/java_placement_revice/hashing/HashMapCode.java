import  java.util.LinkedList;
public  class HashMapCode{
   static  class HashMap<K,V>{//generic also object type not primitive type and we can use null with non primitve type
        class Node{
            K key;
            V value;
            Node(K key,V value){
                this.key=key;
                this.value=value;
            }
            
        }
        private int N;//size of bucket
        private int n;//no of nodes
        private LinkedList<Node>[] bucket;
        public HashMap(){
            this.N=4;
            this.bucket=new LinkedList[N];
            for(int i=0;i<N;i++){
              bucket[i]=new LinkedList<>();
            }
    
        }
        private int hashFunction(K key){
            int hc=key.hashCode();
            return Math.abs(hc)%N;
        }
        private  int searchInLL(K key,int bi){
            LinkedList<Node> ll=bucket[bi];
            for(int i=0;i<ll.size();i++){
                Node temp=ll.get(i);
                if(temp.key.equals(key)){
                    return i;
                }
    
            }
            return -1;
    
    
        }
        private void rehash(){
            System.out.println("aa gaya");
            LinkedList<Node>[] oldBucket=bucket;
            N=N*2;
            n=0;
            bucket=new LinkedList[N];
            for(int i=0;i<N;i++){
                bucket[i]=new LinkedList<>();
            }
            //
            //nodes ->add in bucket
            for(int i=0;i<oldBucket.length;i++){
                LinkedList<Node> ll=oldBucket[i];
                for(int j=0;j<ll.size();j++){
                    Node node=ll.get(j);
                   put(node.key,node.value);
                }
            }
    
            
    
    
        }
    
        //put method
        public void put(K key,V val){
            int bi=hashFunction(key);//this will return bucket index
            int di=searchInLL(key,bi);
            if(di!=-1){
                Node temp=bucket[bi].get(di);
                temp.value=val;
            }
            else{
                bucket[bi].add(new Node(key, val));
                n++;
                System.out.println(n);
    
            }
            double lembda=(double)n/N;
            if(lembda>2){//threshhold value k==2
                rehash();
    
    
    
            }
            
        }
        public V remove(K key){
            int bi=hashFunction(key);
            int di=searchInLL(key, bi);
            if(di!=-1){
                Node temp=bucket[bi].remove(di);
                n--;
                return temp.value;

            }
            else{
                return null;
            }

        }
        private  boolean  containsKey(K key){
            int bi=hashFunction(key);
            int di=searchInLL(key, bi);
            if(di!=-1){
                return true;

            }
            else{
                return false;
            }


        }
        public V get(K key){
            int bi=hashFunction(key);//bucket index
            int di=searchInLL(key,bi);
            if(di!=-1){
                Node node=bucket[bi].get(di);
                return node.value;
            }
            else{
                return null;
            }
        }
         public void print(){
            for(int i=0;i<bucket.length;i++){
                LinkedList<Node> ll=bucket[i];
                for(int j=0;j<ll.size();j++){
                    Node temp=ll.get(j);
                    System.out.println(temp.key+":"+temp.value);
                }
            }
        }

    }

    
    public static void main(String[] args) {
        HashMap<String,Integer> hm=new HashMap<>();
        hm.put("A", 1);
        hm.put("B", 2);
        hm.put("c", 3);
        hm.put("d", 3);
        hm.put("e", 2);
        hm.print();
        hm.remove("e");
        System.out.println("gone");
        hm.print();
        System.out.println(hm.containsKey("e"));//note this we can use private if we have declare private method inside the class of parent clas
        
        
    }

}