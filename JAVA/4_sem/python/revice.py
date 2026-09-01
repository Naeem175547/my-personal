# i = 13
# s = "str"
# c = "str"
# b = False
# print(type(float(i)), type(s), type(c), type(b), type(2.3),type(None))
a=23
v="23"
print(str(a)+v)

if 5>9:
    print("yes")
elif 5>0:
    print("no")


x=10
y=20
c=0
ans= c and y# if any value is false(0) then false otherwise last value
ans1=c or x#if first value is not false(0) then it will return first otherwise second directly
print(ans,ans1)
print(1^1000)

print(float(32.0))
print(type(32))
print(type(3.2))

x=3.111
print(x)
print(100+int("00"))

x=(3+1j)+(2+2j)
print(x)


'''a=10
b=30
z=b if(a>10) else a
print(z)

if 2>0: print("imran")
'''

str='''Imran":" shayna ' skd' '''
print(str)

x=list()
y=x
print(x is y)


# a=10
# y=0
# try:
#     x=input("enter the another vale")
#     y=a+x
# except:
#     y=-1
# print(y)
# print("after except value statement also run")


def maxfind(list1):
    max=-1
    for i in list1:
        if(max<i):
            max=i;
    return max;
def minfind(list1):
    min=list1[0]
    for i in list1:
        if(min>i):
            min=i;
    return min;
print(maxfind([1,4,29,28,1,9,2]))
print(minfind([10,4,10,28,991,29]))

x=10
print(isinstance(x,float)) 
print(f"hello {x}")
print("hello {}".format(x))
print("hello",(x))
print("hello",end=" ")
print("khan")
print("enter %a"%x)

str=  "    imran  \n"  
print(str[0:5:2])
print(str[-3:-1])
print(str)
print(str.strip())#this will remove left and right leading space as well as new lines
print(str.strip("\n"))#this will remove new line form left and right

l=[1,32,3,2,432]
# for i in range(1):
#     print(i)
# l.sort(reverse=True)
l.sort()

print(l)
l.append(10)
print(l)
l.insert(1,100)
print(l)
l.pop()
print(l)
l.remove(2)
print(l)


del l[1:4]
print(l)

str="im ran kha n"
print(str.split()) 
print(str.index("a"))




#tuple
(x,y)=(1,3)
print(type(x))
print(x,y)
x,y=1,3
print(x,y)

print("//looping")
for i in range(10,0,-1):
    if(i==3):
        continue
    print(i)

# i=0
# while(i<=5):
#     if(i==3):
#         continue
#     print(i)
#     i=i+1



i=0
while(i<=5):
    if(i==3):
        i=i+1
        break
    print("naeem{}".format(i))
    
    i=i+1
else:
    print("loop termates")


print(int("01"))


str="imrafrr"
a={1,2,3,5,2,2,0}
t=(1,3,2,3,2,1,1)
d={
    "a":"imran",
    1:"khan" 
}
print(len(str))
print(len(a))
print(len(t))
print(d,len(d))

print(str.lower())
print(str.upper())
print(str.capitalize())
print(str.title())
print(str.strip())
print(str.replace("a","A"))
print(str.isdigit())
print(str.isnumeric())
print(str.isalnum())

# isdigit() is more restrictive and only returns True for strings containing digits 0-9.
# isnumeric() is broader and returns True for any numeric characters, including digits, fractions, subscripts, Roman numerals, etc.
# isalnum() checks for a combination of alphabetic and numeric characters, ensuring there are no special characters or spaces
print(str.islower())
print(str.isupper())


str1="8"
print(str1.isalnum())
print(str1.isnumeric())
print(str1.isdigit())


#list co







