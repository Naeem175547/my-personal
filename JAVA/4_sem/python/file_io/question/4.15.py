with open("input.txt","w",encoding='utf-8') as f:
    for i in range(0,10):
        f.write(str(i)+"\n")
with open("Input.txt") as f:
    for i in f:
        num=int(i.strip())
        if(num%2==0):
            with open("even.txt","a") as even:
                even.write(str(num)+"\n")
        else:
            with open("odd.txt","a") as odd:
                odd.write(str(num)+"\n")



                