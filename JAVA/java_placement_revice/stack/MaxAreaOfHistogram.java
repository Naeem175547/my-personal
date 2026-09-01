import java.util.Stack;
public class MaxAreaOfHistogram {
    
    static int MaxArea(int histogrm[]){
        int nsr[]=new int[histogrm.length];
        int nsl[]=new int[histogrm.length];
        Stack<Integer> s=new Stack<>();
        //finding nsr
        for(int i=nsr.length-1;i>=0;i--){
            while(!s.isEmpty() && histogrm[s.peek()]>=histogrm[i]){
                s.pop();
            }
            if(s.isEmpty()){
                nsr[i]=histogrm.length;
                s.push(i);
            }
            else{
                nsr[i]=s.peek();
                s.push(i);
            }

        }
        

        s.clear();

        //finding nsl
        for(int i=0;i<histogrm.length;i++){
            while(!s.isEmpty() && histogrm[s.peek()]>=histogrm[i]){
                s.pop();
            }
            if(s.isEmpty()){
                nsl[i]=-1;
                s.push(i);
            }
            else{
                nsl[i]=s.peek();
                s.push(i);
            }

        }
       

        //current width=nsr[i]-snl[i]-1;
        int MaxArea=Integer.MIN_VALUE;

        for(int i=0;i<histogrm.length;i++){
            int width=nsr[i]-nsl[i]-1;
            int hight=histogrm[i];
            int ca=width*hight;
            MaxArea=Math.max(ca, MaxArea);

        }
        return MaxArea;
        
    }
    public static void main(String[] args) {
        int arr[]={2,1,5,6,2,3};
        System.out.println(MaxArea(arr));
        
    }
    
}
