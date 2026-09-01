from tkinter import *
from tkinter import messagebox
window=Tk()
window.title("welcome to great leaning")
window.minsize(width=300,height=400)
window.maxsize(width=400,height=800)
# l1=Label(window,text="emp name",fg="blue",bg="red")
# l1.place(x=0,y=20)
# e1=Entry(window,font=("Arail",18),bd=5)
# e1.place(x=80,y=20)
# b1=Button(window,text="enter",fg="yellow",bg="green")
# b1.place(x=120,y=60)
# l2=Label(window,text="nothing",fg="black",bg="brown")
# l2.place(x=120,y=100)
def abc():
    if(x.get()==""):
        messagebox.showwarning("Invalid","please enter your name and pass")
    else:
        print(f"Name : {x.get()}")
        print(f"Pass : {y.get()}")

x=StringVar()
y=StringVar()
l1=Label(window,text="enter your name", bg="red",fg="blue")
l1.place(x=0,y=20)

Entry(window,bg="yellow",fg="black",borderwidth=3,relief=SOLID,font=("Arial",10),textvariable=x).place(x=120,y=20)
Label(window,text="Enter Password",bg="green",fg="black").place(x=0,y=50)
Entry(window,bg="yellow",fg="black",textvariable=y,font=("Arial",10)).place(x=120,y=50)
Button(window,text="Submit",padx=5,pady=4,command=abc).place(x=120,y=70)

window.mainloop()
