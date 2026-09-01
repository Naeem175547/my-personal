#first problem
'''f=open('file/p1.txt')
data=f.read()
if "twinkle" in data:
    print("Yes it's there")
else:
    print("it's not here")    
f.close()    
'''
#second problem
'''def game():
    return 60
score=game()    
with open("file/p1.txt",'r') as f:
    hiscore=int(f.read())
if hiscore<score:
    with open("file/p1.txt",'w') as f:
        f.write(score)
        '''
#third program
for i in range(1,11):
    with open(f"file/table_{i}.txt",'w') as f:
        for j in range(1,11):
            f.write(f"{i}*{j}=={i*j} \n")
        

