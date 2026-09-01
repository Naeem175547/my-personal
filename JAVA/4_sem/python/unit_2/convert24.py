import math
def convert24(str1):
    #for AM
    if str1[-2:]=="AM" and str1[:2]=="12":
        return "00"+str1[2:-2]
    elif str1[-2:]=="AM":
        return str1[:-2]
    #for PM
    elif str1[-2:]=="PM" and str1[:2]=="12":
        return str1[:-2]
    else:
        return str(int(str1[:2])+12)+str1[2:-2]




def convert12(str1):
    #for AM
    if(str1[:2]=="00"):
        return "12"+str1[2:]+" AM"
    elif(int(str1[:2])<12):
        return str1+" AM"
    #for PM
    elif(str1[:2]=="12"):
        return str1+" PM"
    else:
        return str(int(str1[:2])-12)+str1[2:]+" PM"
   
print(convert24("03:04:32 PM"))
print(convert12("15:04:32"))





def reverse_nu(num):
    val=0
    while(num!=0):
        digit=num%10
        val=val*10+digit
        num=num//10
    return val
print(reverse_nu(11000))



def isPerfectSquare(n):
    x=int(math.sqrt(n))
    return x*x==n
def check_fibbonaci(n):
    return isPerfectSquare(5*n*n+4) or isPerfectSquare(5*n*n-4)
print(check_fibbonaci(9))
