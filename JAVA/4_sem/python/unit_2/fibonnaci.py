n=int(input("Enter the how many terms do you want to print of fibonacci"))
a=-1
b=+1
c=0
for i in range(0,n):
    c=a+b
    print(c,end=" ")
    a=b
    b=c


#for till n terms
n=int(input("Enter the how many terms do you want to print of fibonacci"))
a=-1
b=+1
c=0
while(True):
    c=a+b
    if c>n: break
    print(c,end=" ")
    a=b
    b=c