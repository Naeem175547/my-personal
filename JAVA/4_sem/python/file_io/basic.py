# f=open("abcd.txt","r")
# print(f.read())
# # print(f.next())
# f.seek(0,0)
# print(f.read(4))
# f.seek(0,0)
# # print(f.readline())
# print(f.readlines())
# print(f.tell())

def game():
    return int(input("enter the score"))


def game1():
    hisscore=game()
    with open("score.txt","r")as f:
       score=int(f.read())
    if score<hisscore:
       with open("score.txt","w") as f:
          f.write(str(hisscore))  



def replace():    
    f=open("abcd.txt","r")
    content=f.read()
    print(content)
    f.close()
    str=content.replace("ello","Imran")
    print(str)
    with open("abcd.py","w") as f:
        f.write(str)


with open("abcd.txt") as f:
    for line in f:
        print(line.strip())



with open("a1.txt","w") as f:
    f.write("imran khan\n")
    f.write("shayan khan\n")
    f.write("rahul\n")
    f.write("R J P Arya Inter College\n")
with open("a1.txt","r+") as f:
    print(f)
    print(f.readline().strip())
    print(f.readline(5))
    print(f.readlines())
    # print(f.tell())
    f.truncate(100)