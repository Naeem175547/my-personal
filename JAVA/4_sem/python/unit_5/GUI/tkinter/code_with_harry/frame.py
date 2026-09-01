from tkinter import *
root=Tk()
root.geometry("655x333")
f1=Frame(bg="grey",borderwidth=5)#we can give root to frame or bydefault also will be root(container)
f1.pack(side=LEFT)
# l1=Label(f1,text="project Tkinker")
# l1.pack()

def hello():
    print("Hello tkinter Buttons")
b1=Button(f1,text="Print now", command=hello)
b1.pack(side=LEFT,padx=5)
b2=Button(f1,text="Print now",pady=10,bg="green",padx=10)
b2.pack(side=LEFT)
b3=Button(f1,text="Print now")
b3.pack(side=LEFT)
b4=Button(f1,text="Print now")
b4.pack(side=LEFT)


root.mainloop()