import os
l=["imran khan\n","shanyan\n","youngmaen\n"]
with open("a2.txt","w",encoding="utf-8") as f:
    f.writelines(l)
with open("a2.txt") as f:
    lines=f.readlines()
    print(f.closed)
    print(f.mode)
    print(f.name)
    print(f.encoding)
    count=0
    for i in lines:
        print(i.strip())
        count=count+1


# os.mkdir("hello")
# # os.rmdir("hello")
# os.getcwd("hello")
print(os.path.exists("hello"))

        
    
