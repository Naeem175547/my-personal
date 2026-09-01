import math
def default_art(name="imran khan"):
    print(name)

def keyword_argument(fname,lname):#we can give default value also
    print(f"{fname} {lname}")

def positional_arg(fname,lname):
    print(f"{fname} {lname}")


def arbitrary_positional_arg(*p):
    #p is tuple
    for i in range(len(p)):
        print(p[i],end=" ")
    print()

def arbitrary_keyword_arg(**p):
    print(p)
    # for i in p:
    #     print(p[i],end=" ")
    # print()

    for key,value in p.items():
        print(f"{key}=={value}",end=" ")
    print()

def calculator():
    def add(x,y):
        print(x+y)
    def sub(x,y):
        print(x-y)
    def mul(x,y):
        print(x*y)
    def division(x,y):
        print(x/y)
    def modulus(x,y):x/y
    while(True):
        print("select the choices")
        print("1:add")
        print("2:sub")
        print("3:mul")
        print("4:divide")
        print("5:modulus")
        print("0:exit()")
        choice=int(input("choice the operation no"))
        num1=int(input("enter first operand"))           
        num2=int(input("enter second operand"))
        if(choice==1):
            add(num1,num2)
        elif choice==2:
            sub(num1,num2)
        elif choice==3:mul(num1,num2)
        elif choice==4:division(num1,num2)
        elif (choice==5): modulus(num1,num2)
        elif(choice==0):break
        else:print("enter valid choice")

            



def hcf(v1,v2):
    if(v1<v2):
        small=v1
    else:
        small=v2
    for i in range(1,small+1):
        if(v1%i==0 and v2%i==0):
            hcf=i
    return hcf


def lcm(v1,v2):
    if(v1>v2):
        x=v1
    else:
        x=v2
    while(True):
        if(x%v1==0 and x%v2==0):
            lcm=x
            return lcm
        x=x+1
    

def ASCII_VALUE(a):
    # print(f"ASCII Value of {a} is ",ord(a))
    print(f"The ascii value of {a} is {ord(a)}")
def bin_oct_hex(a):
    print(bin(a),"binary equivalent")
    print(oct(a),"octal equivalent")
    print(hex(a),"hexadecimal equivalent")

def removekth(s,k):
    if(k>=len(s)):
        return s
    # return s[0:k]+s[k+1:]
    return s.replace(s[k],"")

def factor(n):
   list=[]
   if n>=1:
       for i in range(1,n+1):
           if(n%i==0):
              list.append(i)
   return list
   
def make_pair(l1,l2):
    if(len(l1)!=len(l2)):
        return "the pairing you have mentioned is not posible"
        
    # pair=[]
    # for i in range(len(l1)):
    #     pair.append((l1[i],l2[i]))
    pair=[(l1[x],l2[x]) for x in range(0,len(l1))]
    return pair

def countSquare(N):
    count=0
    for i in range(1,N+1):
        temp=int(math.sqrt(i))
        if(temp*temp==i):
            count=count+1
    return count


def alternating(list):
    if(len(list)==0):
        return True
    if(len(list)==1):
        if(list[0]%2==0):
            return True
        return False
    if list[0]%2==0:
        for i in range(len(list)-1):
            if( list[i]%2==list[i+1]%2):
                return False
        return True
    else:
        False
    
def searchMany(s,x,k):
   count=0
   for i in s:
       if(i==x):
           count=count+1
   if count<=k:
       return True
   else:
       return False
    
def triangle(n):
   for i in range(n):
       for j in range(i+1):
           print("*",end="")
       print()





    



# default_art()

# keyword_argument(lname="khan55",fname="imran")
# positional_arg("naeem ","Ahamd")
# arbitrary_positional_arg("imran",22,"RJP")
# arbitrary_keyword_arg(name="rahel",roll_no=10,college="Goverment polytecnic college")
# calculator()
# print(hcf(16,30))

# print(lcm(15,80))
# ASCII_VALUE("r")
# bin_oct_hex(10)
# print(removekth("imran",2))
# print(factor(13))
# print(make_pair([1,2,4,7],[2,4,6,8]))
# print(make_pair([1,2,3],[1,2]))
# print(make_pair([],[]))
# print(countSquare(55))
# print(alternating([10,79,30,41]))
# print(alternating([10]))
print(searchMany([10,17,15,12],1,0))
triangle(5)






# let ={"name":"a",
#       "roll_no":13
      
#       }
# a=let.keys()
# a=list(a)
# print(a[1])
# list=["aa","b","c","d"]
# print(list.count("a"))
# str="abcdcd"
# print(str.count("c"))

print(" \" ")