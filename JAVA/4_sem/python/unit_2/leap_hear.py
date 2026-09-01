x=int(input("Enter an year"))
result=False
if(x%400==0):
    result=True
else:
    if(x%4==0 and x%100!=0):
        result=True
    else:
        result=False
if(result):
    print(f"{x} is leap year")
else:
    print(f"{x} is not leap year")


#century year which can be divided by 400 is leap year(366 days)
#and non century year which can be divided by 4 also leap year