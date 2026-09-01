# with open ("a.txt") as f:
    # print(f.read())
    # print(f.readline())
    # # print(f.readlines())
    # print(f.tell())
    # f.seek(11)
    # print(f.readline())
    # print(f.tell())
    # print(f.read())
    # print(f.tell())
    # f.seek(0)
    # print(f.tell())
    # print(f.read(10))
    # print(f.tell())
    # f.seek(2,0)
    # print(f.tell())
    # fl=next(f)
    # print(fl)
    # print(next(f))


with open("abc.txt","w") as fi:
    fi.write("imran khan")
    fi.write("shayan")
    fi.write("kahn")
    for i in range(0,5):
        fi.write(str(i))
    