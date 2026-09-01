# n=5
# for i in range(1,n+1):
#     for j in range(i):
#         print("*",end=" ")
#     print()
# for i in range(1,n):
#     for j in range(i,n):
#         print("*",end=" ")
#     print()    
        

# n=5 
# for i in range(n):
#     for j in range(i):
#         print("*",end="")
#     print()
# print("another")
# for i in range(n):
#     for j in range(i,n):
#         print("*",end="")
#     print() 


#prime numbers in range
# lower_range=int(input("please enter a range"))
# upper_range=int(input("please enter upper range"))
# temp=0
# for i in range(lower_range,upper_range+1):
#     if i>1:
        
#         for x in range(2,i):
#             temp=x
            
#             if(i%x==0):
#                 break
#         else:
#             print("this will run afer loop end")
#             print(i)
# while(lower_range<=upper_range):
#     i=2
#     while i<=lower_range-1:
#         if lower_range%2==0:
#             break
#         i=i+1
#     if(i==lower_range):
#         print(lower_range)
#     lower_range+=1  


# i=0
# while i<3:
#     print(i)
#     i=i+1
# else:
#     print("imran kan ")

# x,y=0,1
# while y<10:
#     print(y,end="")
#     x,y=y,x+y


# *revese a number
import math
def reverse(num):
    r_n=0
    while(num!=0):
        digit=num%10
        r_n=r_n*10+digit
        num=num//10
    print(r_n)
reverse(2321)

print(math.sqrt(49))

