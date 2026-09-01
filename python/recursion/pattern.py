def patten1(r,c):
    if(r==0):
        return
    if(r>c):
        print("* ",end="")
        patten1(r,c+1)
    else:
        print()
        patten1(c-1,0)
def patten2(r,c):
    if(r==0):
        return
    if(r>c):
        patten2(r,c+1)
        print("* ",end="")
        
    else:
        patten2(r-1,0)
        print()
#my patten 2
#   *
#   * *
#   * * * 
#   * * * * 
def patten2my(r,c,n):
    if(n==r):
      return
    if(r>=c):
        print("* ",end="")
        patten2my(r,c+1,n)
    else:
        print("")    
        patten2my(r+1,0,n)
                
patten2my(0,0,4)        