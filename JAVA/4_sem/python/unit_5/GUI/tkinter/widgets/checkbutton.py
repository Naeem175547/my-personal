from tkinter import *
window=Tk()
x=IntVar()
def abc():
    print(x.get())#if check then 1 otherwise 0
cb=Checkbutton(window,text="Male",variable=x)
cb.pack()
Button(window,text="CLICk",command=abc).pack()
window.mainloop()