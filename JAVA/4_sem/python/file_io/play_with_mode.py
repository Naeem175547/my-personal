import os
with open("a.txt",'a+')as f:
    
    print(f.readlines())
    

    # print(f.readline())
    # f.write("imran khan")
    print(f.read())
    os.remove("abcd.txt")


