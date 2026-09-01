c=0;
t=0;
while True:
    i = input("please a number:")
    if i=="null":
        break
    try :
        inti = float(i)
    except:
        print("invalied number")   
        continue

    c=c+1
    t=t+inti
print(c,t,t/c)    



