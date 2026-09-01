import random
def string_test(s):
    d={"uppercase":0,"lowercase":0,"totallength":0,"digit":0}
    for i in s:
        print(i)
        if(i.isupper()):
            d["uppercase"]=d["uppercase"]+1
        elif i.islower():
            d["lowercase"]=d["lowercase"]+1
        elif i.isdigit():
            d["digit"]=d["digit"]+1
        d["totallength"]=d["totallength"]+1
        
    print("upper_case digit=",d["uppercase"])
    print("lower case length=",d["lowercase"])
    print("tatal length = ",d["totallength"])
    print("total digit  = ",d["digit"])


def change_str(str):
    return str[len(str)-1:]+str[1:-1]+str[:1]
    #return str[-1:]+str[1:-1]+str[:1]

def vowel_count(str):
   count=0
   s=set("aeiouAEIOU")
   for i in str:
       if i in s:
           count=count+1
   print(count)


def randomize_list(l):
    
    print(l)
    random.shuffle(l)
    print("Reshuffeld l:",l)


def  capitalize_list_line():
   lines=[]
   while True:
       line=input("enter the line")
    #    if not line:
       if line=="":
           break
       else:
           lines.append(line)
   for i in lines:
       print((i.upper()))
    
       
           
       
    

    
    





string_test("my Naeem 423 4 kah")
print(change_str("My name is KHan"))
vowel_count("My Name s MohaE")
randomize_list([20,30,10,5])
capitalize_list_line()



