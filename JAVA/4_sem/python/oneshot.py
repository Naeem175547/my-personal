c=11
match c:
    case 1 | 5 :
        print("Monaday")
    case 2:
        print("saturday")
    case n if n>10:
        print("value is grethrer than 10")
    case _:
        print("select either one or two")


str="imrrmi"
print(str[::-1]==str)

# for i in range(5):
#     for i in range(5):
#         print("*",end="")
#     print()

# for i in range(5):
#     print("*"*(5))

# for i in range(5):
#     for  j in range(0,i+1):
#         print("*",end="")
#     print()


# for i in range(5):
#     print("*"*(i+1))


# for i in range(5):
#     for j in range(0,5-i-1):
#         print(" ",end="")
#     for j in range(0,i+1):
#         print("*",end="")
#     print()

# for i in range(5):
#     print(" "*(5-i-1),end="")
#     print("*"*(i+1))
print("starting")

# for i in range(4):
#     for j in range(0,4-i-1):
#         print(" ",end="")
#     for j in range(0,i+1):
#         print("*",end="")
#     for j in range(0,i):
#         print("*",end="")
#     print()


# for i in range(4):
#     print(" "*(4-i-1),end="")
#     print("*"*(2*i+1))


# for i in range(4):
#     for j in range(0,4-i-1):
#         print(" ",end="")
#     for j in range(0,2*i+1):
#         print("*",end="")
    
#     print()



# for i in range(5):
#     for j in range(0,i):
#         print(" ",end="")
#     for j in range(0,2*5-2*i-1):
#         print("*",end="")
#     print()

# for i in range(5):
#     print(" "*(i),end="")
#     print("*"*(2*5-1-2*i))



# for i in range(5):
#     for j in range(0,5-i-1):
#         print(" ",end="")
#     for j in range(0,2*i+1):
#         print("*",end="")
#     print()
# for i in range(1,5):
#     for j in range(0,i):
#         print(" ",end="")
#     for j in range(0,2*5-1-2*i):
#         print("*",end="")
#     print()






    
# str="imra"
# print(str.find("ra"))
# print(str.index("ra"))
# # # print(str.find(" "))
# # # print(str.index(" "))

# li=[1,3,2,21,1,2]
# print(li.index(21))

# str="12c"
# print(str.isdigit())
# print(str.isalpha())
# print(str.isnumeric())
# print(str.isdecimal())
# print(str.isalnum())

# l=["a","b","c"]
# # l.append("a")
# # l.insert(3,"b")
# # # print(l.remove("b"))
# # print(l.pop(1))
# # print(l)
# # print("MN".join(l))


# l[2:3]=[1,2]
# l[2:]=[1]
# print(l)

# d={
#     1:10,
#     2:20,
#     "i":"imran",
#     "j":"khan"
# }
# print(d)
# print(d.pop(1))
# print(d.popitem())

# print(d)



# print(set(li))
# l=set((2,3,1,3))
# l.add(23)
# l.remove(23)
# l.pop()
# l.discard(2)
# l.clear()
# print(l)

# fs=frozenset((3,21,1,2,1))
# print(fs)
# fs1=frozenset([23,34,22,33,12])
# print(fs)
# fs2=frozenset("imran ")
# print(fs2)
# print(list("imr"))


#decoratero

def decorates(func):
    def wrapper():
        print("Hey,")
        func()
        print("Welcome")
    return wrapper
@decorates
def Hello():
    print("imran khan")
Hello()



di={
    1:10,
    "b":20,
    "c":23

}
print(di)

print(any(di))
# # print(di.get("bb"))
# print(di["ab"])
di["ab"]=1
di.update({"y":100})
print(di.fromkeys("ab","c"))
print(di)
print(di.setdefault("ab",100))

print(di.fromkeys("imran",(3,3,2)))


def abc(*p,**kp):
    for i in p:
        print(i,end=" ")
    print()
    for key,val in kp.items():
        print(key,val)
abc(1,3,2,12,3,name="imran",x="shamsha")

def fib(n):
    if(n==1 or n==0):
        return n
    return fib(n-1)+fib(n-2)
for i in range(10):
    print(f"{i}={fib(i)}")
    