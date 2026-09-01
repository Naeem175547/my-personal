from tkinter import *
from tkinter import messagebox
# window=Tk()
# window.geometry("300x300")
# v=StringVar()
# def abc():
#     if(v.get()==""):
#         messagebox.showwarning("Cuation","its Empty")
#     else:
#         messagebox.showinfo("Successfule",v.get())
# e1=Entry(window,width=20,bd=5,font=("Arail",10),bg="green",fg="white",textvariable=v)#bd==size of border
# # e1.pack(side=BOTTOM)
# e1.pack()
# b1=Button(window,text="Enter",command=abc)
# b1.pack()
# window.mainloop()


w=Tk()
w.title("abc")
w.geometry("400x400")
def abc():
    if(v.get()==""):
        messagebox.showwarning("Caution","its empty")
    else:
        messagebox.showwarning("Succesfull",v.get())

v=StringVar()
e1=Entry(w,bg="red",fg="yellow",font=("Arial",20),textvariable=v)
e1.pack()
Button(text="CLICk",bg="pink",fg="green",command=abc).pack()
w.mainloop()
