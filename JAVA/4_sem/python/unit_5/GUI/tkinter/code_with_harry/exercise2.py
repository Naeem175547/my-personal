from tkinter import *
root=Tk()
root.geometry("300x500")
def abc():
    width=int(input("enter width"))
    height=int(input("enter height"))
    root.geometry(f"{width}x{height}")

Button(root,text="set size of window",command=abc).pack()


root.mainloop()