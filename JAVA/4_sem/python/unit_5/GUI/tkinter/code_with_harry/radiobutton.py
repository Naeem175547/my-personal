from tkinter import *
import tkinter.messagebox as mb
root=Tk()
root.geometry("800x500")
var=StringVar()#take value accordinly value of Radiobutton
def abc():
    print("you order is ",var.get())
    mb.showinfo("Order Received",f"you order is {var.get()}")

# Label(root,text="What would you like to  have sir?",font="lucidda 19 bold").grid(row=0,column=3)
# Radiobutton(root,text="Dosa",variable=var, value="Dosa").grid(row=1,column=1)
# Radiobutton(root,text="Idly",variable=var, value="Idly").grid(row=2,column=1)
# Radiobutton(root,text="Paratha",variable=var, value="Paratha").grid(row=3,column=1)
# Radiobutton(root,text="Samosa",variable=var, value="Samosa").grid(row=4,column=1)
# Button(root,command=abc,text="place order").grid(row=5,column=1)

Label(root,text="What would you like to  have sir?",font="lucidda 19 bold").pack(anchor="w")
Radiobutton(root,text="Dosa",variable=var, value="Dosa").pack(anchor="w")
Radiobutton(root,text="Idly",variable=var, value="Idly").pack(anchor="w")
Radiobutton(root,text="Paratha",variable=var, value="Paratha").pack(anchor="w")
Radiobutton(root,text="Samosa",variable=var, value="Samosa").pack(anchor="w")
Button(root,command=abc,text="place order").pack(anchor="w")



root.mainloop()