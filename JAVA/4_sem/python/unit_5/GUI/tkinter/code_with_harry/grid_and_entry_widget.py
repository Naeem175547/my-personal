from tkinter import  *
root=Tk()
root.geometry("655x333")
user=Label(root,text="username")
password=Label(root,text="password")
user.grid()#row=0
password.grid(row=1)


#variable classes ii tkinter
#BooleanVar, DoubleVar,IntVar,StringVar
def abc():
    print(f"The user is {uservalue.get()}")
    print("the pass is = ",passval.get())
uservalue=StringVar()
passval=StringVar()


userentry=Entry(root,textvariable=uservalue )#textvariable mean by which it can be accessed
userentry.grid(row=0,column=1)
passentry=Entry(root,textvariable=passval)
passentry.grid(row=1,column=1)

Button(root,text="submit",command=abc).grid(row=10,column=1)

root.mainloop()

