#value error
#int(input("please enter first value"))#value error
'''TypeError
a=input("please enter second value")
b=int(input("please enter second value5"))
c=a+b'''
#if variable is not difined NameError
'''
try:
    if 5>4:
        raise ValueError("mera exception")
except ValueError as x:
    print("chal na",x)    
'''

#user define exception
'''class A_B(Exception):
     pass
raise A_B("pehle heee")     
try:     
    if 3<4:
        raise A_B("aa gya aa gya")
except Exception as i:
    print(i)   
    '''
         
  