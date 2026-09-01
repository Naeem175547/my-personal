def subseq(new,x):
    if(len(x)<1):
        print(new)
        return
    subseq(new+x[0],x[1:])
    subseq(new,x[1:])
x="abc"    
subseq("",x)
#subseq with return 
def subseq(new,x):
    if(len(x)<1):
        print(new)
        return
    subseq(new+x[0],x[1:])
    subseq(new,x[1:]) 
   # subseq(new+(x[0]+0),x)
x="abc"    
subseq("",x)


