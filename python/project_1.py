import random
def game(comp,you):
    if(comp==you):
        return None
    elif comp=='s':
        if you=='g':
            return False
        elif you=='w':
            return True
    elif comp=='g':
            if you=='s':
                return False
            elif you=='w':
                return True 
    elif comp=='w':
            if you=='g':
                return False
            elif you=='s':
                return True
A=True                        
while A:
    print("computer turn: snake(1) gun(2) water(3)")
    randno=random.randint(1,3)
    if(randno==1):
        comp='s'
    elif randno==2:
        comp='g'
    else:
        comp='w'
    print("player turn: snake(s) gun(g) water(w)")
    you=input("enter your choose")
    print(f"computer choose={comp}")
    print(f"user choose={you}")
    r=game(comp,you)
    if r==None:
        print("match tie")
    elif r==True:
        print("you won")    
    else:
        print("you lost")
    a= int(input("for restart enter 1 and for cloase please enter 0"))
    if(a==1):
        A=True
    elif(a==0):
        A=False


