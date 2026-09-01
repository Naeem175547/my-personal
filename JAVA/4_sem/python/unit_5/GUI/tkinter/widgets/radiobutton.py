from tkinter import *
window=Tk()
window.geometry("300x300")
# v=IntVar()
# def abc():
#     print(v.get())
# rb1=Radiobutton(window,text="yes",value=0,variable=v)
# rb1.pack()
# rb2=Radiobutton(window,text="no",value=1,variable=v)#when value will be same this will seprately but when different they will work integrated
# rb2.pack()     
def abc():
    if(x.get()==1):
        print("you are female")
    else:
        print("you are male")
x=IntVar()
Radiobutton(window,text="male",value=0,variable=x).pack()
Radiobutton(window,text="female",value=1 ,variable=x).pack()

b1=Button(window,text="Enter",command=abc)
b1.pack()
window.mainloop()
