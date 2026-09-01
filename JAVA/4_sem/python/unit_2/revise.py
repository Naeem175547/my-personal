from copy import copy
str="imran"
print(str[::-1])
#list comping method

l=[3,2,321,23,12,12]
x=l
print(x,l)
x[0]=1000
print(x,l)
#[:]using slice
x=l[:]
print(x,l)
x[0]=100
print(x,l)

#suing compy method

x=copy(l)
print(x,l)
x[0]=000
print(x,l)

x=[1,3,12,23]
print(x)
del x[3]
print(x)
print(min(x))

