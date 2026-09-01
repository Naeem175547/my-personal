import math
import calendar
addr="hello@python.org"
username,domain=addr.split('@')
a,b=[1,2]
print(username,domain)
print(a,b)


list1=[10,30,332,2011,10,30]
# print(min(list))
print(max(list1))    


d={
    1:10,
    3:10,
    2:20,
    
}
print(d)
print(sorted(d))

c=calendar.month(1991,3)
print(c )


l=(1,3,23,4)
l2=(2,3,1,3)
print(min(l))
print(max(l))
print(list(zip(l,l2)))



x,y,z=1,2,3
# a,b=4,5,6#error
u=7,8,9

l1=[1,2,3]
print(l1)
l1.extend((1,334,2))
l1.extend("imran")
print(l1)

s="@".join(["m","n","k"])
print(s)