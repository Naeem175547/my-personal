# skip a
def askip(x):
    if len(x)==0:
        return
    if(x[0]=='a'):
        askip(x[1:len(x)])
    else:
        print(x[0],end="")
        askip(x[1:len(x)])
# skip a and other values store in str in print in base condition        
def askipe(n,o):
    if(len(o)==0):
        print(n)
        return
    if(o[0]=='a')    :
        askipe(n,o[1:len(o)])
    else:
        askipe(n+o[0],o[1:len(o)])    
# skip a and other values store in str and return
def askiper(o):
    if(len(o)==0):
        return ""
    if(o[0]=='a')    :
        return askiper(o[1:len(o)])
    else:
       return o[0] + askiper(o[1:len(o)]) 
#skip apple
def skipapple(o):
    if(len(o)==0):
        return ""
    if(o.startswith("apple"))    :
        return skipapple(o[5:len(o)])
    else:
       return o[0] + skipapple(o[1:len(o)]) 
#skip app not apple
def skipappnoapple(o):
    if(len(o)==0):
        return ""
    if(not o.startswith("apple") and o.startswith("app")):
        return skipappnoapple(o[3:len(o)])
    else:
       return o[0] + skipappnoapple(o[1:len(o)]) 



str="abcdea"       
#askipe("",str)
print(askiper(str))
str1="shayan khanapple Ahamad"
print(skipapple(str1))
str2="imran apple khanapp khan"
print(skipappnoapple(str2))