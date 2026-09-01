import java.util.*;
public class stack_stock_problem{
    public static void stock_Span(int stocks[],int span[]){
        StackUsingArray<Integer> s=new StackUsingArray();
        span[0]=1;//by default
        s.push(0);
        for(int i=1;i<stocks.length;i++){
            int currprice=stocks[i];
            while(!s.isEmpty() && currprice>stocks[s.peek()]){
                s.pop();

            }
            if(s.isEmpty()){
                span[i]=i+1;

            }else{
                int prevHigh_index=s.peek();
                span[i]=i-prevHigh_index;
            }
            s.push(i);
        }



    }
    public static void main(String[] args) {
        int stock[]={100,80,60,70,60,85,100};
        int span[]=new int[stock.length];
        stock_Span(stock, span);
        for(int i=0;i<span.length;i++){
            System.out.print(span[i]+" ");
        }
        
    }
    
}
