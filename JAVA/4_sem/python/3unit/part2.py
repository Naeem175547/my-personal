import copy
import math
# #list copying

# # l=list()#only for empy


# l=[1,2,3,2,2,3,2,3]
# # x=l here both will point same object
# #first way

# # x=l[:]

# #second way

# # x=copy.copy(l)

# x=l.copy()//#this also work


# print(x,l)
# x[1]=1000
# print(x,l)




#deleting the element form list

# l=[1,2,4,2,23,90]

# print(l)
# # del l[0]
# # print(l)
# # print(l.pop(1))
# # print(l)
# # l.remove(90)

# del l[:2]
# print(l)



#list method

# l=[1,3,21,1,3]
# l.sort()
# l.reverse()
# l.pop(2)
# l.remove(3)
# print(l)
# l.append(200)
# print(l)
# l.extend([0,2])
# print(l)




#list comprehension 

#without list comprehension
# list1=[10,20,30,40,50]
# print(list1)
# for i in range(0,len(list1)):
#     list1[i]+=10
# print(list1)

#using list comprehension

list1=[10,20,30,40,50]
print(list1)
list1=[x+10 for x in list1]
print(list1)


# list1=[10,20,30,40,50]
# list1=[x for x in list1 if x<100]
# print(list1)


# def lessthan(list1,k):
#     return [x for x in list1 if x<k]
# print(lessthan([1,2,412,-101,-1,10],0))





# slicing
list1=[1,2,3,12,1,312,0]
print(list1[::2])
print(list1[::-1])
print(list1.index(12))

tup=(1,30,12)
print(tup)
# tup[4][0]=10000
# print(tup)

print(sorted(list(tup)))



def abc():
    return 1,3,2
print(abc())

def abc1(*t):
    print(t*3)
abc1(1,2,3,1,3)

d={
    1:"iman",
    "a":"khan",
    "":""
    
}
for key in d:
    print(d[key])

print(d.keys())
print(list(d.keys()))
print(d.values())
hello="imran"
d.update({"d":"shayan"})
print(d)
for i in d.keys():
    print(i)

print(d.get("imr","chal"))


print(all(d))
print(any(d))
c=d
print(c,d)
c[1]="imran khan qaziwla"
print(c,d)
c=d.copy()
print(c,d)
c[1]=""
# d.clear()ṣ
print(c,d)


for k,v in d.items():
    print(k,v)

print(sorted((v,k) for  k,v in d.items()))


#set 
s={1,2,3,(2,3,12)}
print(type(s))
l=[23,{3,3,2}]
print(l)