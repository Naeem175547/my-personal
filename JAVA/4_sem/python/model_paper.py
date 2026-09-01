import numpy as np
import math
import pandas as pd
import matplotlib.pyplot as plt
import re
from tkinter import *
x=np.linspace(0,100,10)
x=np.arange(0,100,10)
print(x)

#Negative(step) it will go <-- end will be the next small value
#for positive(step) it will go --> end value will be next greter value
l=[1,2,3,4,5,6,7,8,9]
print(l[-1:-3:-1])
print(l[2:-1:])
print(l[1::2])
print(l[len(l)//2:])
M=l[len(l)//2:0:-1]+l[len(l)//2+1:]
print(M)

print([num%2 for num in l])

def perpertsqaure(n):
    x=int(n**0.5)
    if(x*x==n):
        return 1
    return -1

print(perpertsqaure(15))

print(9**0.5,math.sqrt(9))

def file_content_seprate():
    data=None
    s=input("enter the input to be seprated by comma")
    with open("addcomma.txt","w") as f:
        f.write(s)
    with open("addcomma.txt","r") as f:
        data=f.read()
    with open("addcomma.txt","w") as f:
        for char in data:
            if(char!=" "):
                  f.write(char+",")
            else:
                f.write(char)
        
# file_content_seprate()


# foods=["Meat","Banana","Avocados","Sweet Potatoes","Spinach"]
# caloies=[250,130,140,120,20]
# potassium=[40,55,20,30,40]
# fat=[8,5,3,6,1,1]


# d={
#     "foods":["Meat","Banana","Avocados","Sweet Potatoes","Spinach"],
#     "caloies":[250,130,140,120,20],
#     "potassium":[40,55,20,30,40],
#     "fat":[8,5,3,6,1],
# }
# df=pd.DataFrame(d)
# print(df)

# # plt.plot(foods,caloies)
# plt.plot(df["foods"],df["caloies"])



# plt.plot(df["foods"],df["potassium"])



# plt.plot(df["foods"],df["fat"])


# plt.show()



# def removenth(s,n):
#     if(n>=len(s)):
#       return s
#     r=""
#     for i in range(len(s)):
#         if(i!=n):
#             r+=s[i]
#     return r
# print(removenth("Hello",5))
# s='imran'
# print(s.replace(s[2],""))@
# print(s[0:2]+s[2+1:])


def sort_words(input_str):
    words=input_str.split(",")
    print(words)
    words.sort()
    print(words)
    sorted_str=",".join(words)
    return sorted_str
# print(sort_words("without, hello, bag, world"))

def check_pass(passwords):
    p=passwords.split(",")
    accepted_pass=[]
    for password in p:
        if(len(password)<6 or len(password)>12):
            continue
        elif not re.search("[a-z]+",password):
            continue
        elif not re.search("[A-Z]+",password):
            continue
        elif not re.search("[0-9]+",password):
            continue
        
        elif not re.search("[$@#]+",password):
            continue
        else:
            accepted_pass.append(password)
    
    print(accepted_pass)
    print((",".join(accepted_pass)))

# check_pass("Imran@123,Shayan123,K@12,Naeem@35")

def re_smaller(l):
    s_l=l[0]
    for list in l:
        if(len(list)<len(s_l)):
            s_l=list
    print(s_l)
# re_smaller([
#     [1,3,1],
#     [3,1,1,3,1],[2,2,1],
#     [1,2,3],[3,1,1,3,2],[1,3,1]
# ])


def filternumber(text):
    return [x for x in text if x.isdigit()]

volvels=["a","e","i","o","u","A","E","I","O","U"]
def filterString(text):
    return [x for x in text if x[0] in volvels]

names=["Agra","Ramesh","Toamto","Patna"]
def filtername(text):
    return [x for x in text if x in names]

texts=["apple","123","Agra","banana","Ramesh","tomato","1234","orange"]
# print(filternumber(texts))
# print(filterString(texts))
# print(filtername(texts))




def number_to_text(num):
    d={
        0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"
    }
    return d[num]

def contert_number_to_text(filepath):
    with open(filepath,"r") as f:
        content=f.read()
    modified_content="".join([number_to_text(int(c)) if c.isdigit() else c for c in content])
    with open(filepath,"w") as f:
        f.write(modified_content)
# contert_number_to_text("ab.txt")


def composed_of_digits(file_path):
    with open(file_path,"r") as f:
        content=f.read()
    words=content.split()
    words=[x for x in words if x.isdigit()]
    for i in words:
        print(i)
composed_of_digits("ab.txt")


def readdataset():
    df=pd.read_csv()
    last_column=df.iloc[:,-1]
    df_with_out_last_col=df.iloc[:,:-1]

    plt.scatter(df_with_out_last_col[:,0],df_with_out_last_col[:,1])

print(45**4-32*3/5//24+3-43-44)

def count_vovels(s):
    count=0
    vovels=["a","b","c","d","e"]
    for i in s:
        if i.lower() in volvels:
            count+=1
    return count
print(count_vovels("imrna khan shcool"))

student=["Physics","Chemistry","Math","Hindi","English","Computer"]
# marks=[85,63,49,65,88,76]
# plt.pie(marks,labels=student,autopct="%1.1f%%",explode=[1,0,0.2,0.3,0.3,1.2])
# plt.show()


x=np.array([1,3,2,422,1,1,3,1])
# x=[1,3,22,3,22,3]
x=np.sort(x)[::-1]
print(x)


# w=Tk()
# w.geometry("400x400")
# x=StringVar()
# y=StringVar()
# def abc():
#     e1=x.get()
#     e2=y.get()
#     x.set(e2)
#     y.set(e1)
# Entry(w,textvariable=x).pack()
# Entry(w,textvariable=y).pack()
# Button(w,text="swap",command=abc).pack()
# w.mainloop()

def five_divisible(s):
    a=s.split(",")
    v={}
    for binary in a:
        decimal=int(binary,2)
        if(decimal%5==0):
            v[binary]=decimal
    return v
        

str="0100,0011,1010,1001,110,1001"
# print(int("1000",2))
# print(five_divisible(str))


def unique_element(l):
    d={}
    for i in l:
        if(d.get(i)==None):
            d[i]=1
    return list(d.keys())
print(unique_element([1,3,3,3,21,1212,211,3]))
print(set([1,3,3,3,21,1212,211,3]))

del str
# def a(i):
#     s=str(i)
#     l=len(s)
#     sum1=sum(int(x)**l for x in s)#we can give [] or not
#     if(sum1==i):
#         print(i)

# for x in range(100,1000):
#     a(x)



# s1={13,32,21,23,22,32,24,5,432,3}
# s2={3,3,45,3,4653,34,45}
# print(s1.intersection(s2))
# print(s2.union(s1))
# print(s1.difference(s2))



# def find_occurence(s,sym):
#     start=0
    
#     while(True):
#         try:
#             index=s.index(sym,start)
#             print(index)
#             start=index+1
#         except Exception as f:
#             break
# find_occurence("imran khan hello a bc ","a")



def matrix_multiplication(m1,m2):
    if(len(m1[0])!=len(m2)):
      return
    m=[[0 for _ in range(len(m1[0]))] for _ in range(len(m1))]
    for i in range(len(m1)):
        for j in range(len(m1[0])):
            m[i][j]=sum(m1[i][k]*m2[k][j] for k in range(len(m1)))

    print(m)





def matrix_sum(m1,m2):
    m=[[0 for _ in range(len(m1[0]))] for _ in range(len(m1))]
    for i in range(len(m1)):
        for j in range(len(m1[0])):
            m[i][j]=m1[i][j]+m2[i][j]
    print(m)    







m1=[
    [1,2,3],
    [5,6,7],
    [7,8,0]
]
m2=[
    [10,20,39],
    [2,0,1],
    [0,1,0]
]

matrix_sum(m1,m2)
matrix_multiplication(m1,m2)















    
