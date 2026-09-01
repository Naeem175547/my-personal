for i in range(1,8,2):
    for j in range(i):
        print(i,end=" ")
    print()  


n=int(input("inter the number"))
for i in range(n):
    for j in range(i+1):
        print("*",end="")
    print()
for i in range(n-1):
    for  j in range(n-i-1):
        print("*",end="")
    print()



def prime_numbers():
    uv = int(input("Enter the upper value: "))
    lv = int(input("Enter the lower value: "))
    
    for i in range(lv, uv + 1):
        if i > 1:
            check = True
            for j in range(2, i):
                if i % j == 0:
                    check = False
                    break
            if check:
                print(i, end=" ")

prime_numbers()


