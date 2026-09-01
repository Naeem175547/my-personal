# frame-it serves as a coantiner and used to organize the widgets.
# opt-bg,bd,cursor,width,height,

from tkinter import *
window=Tk()
window.geometry("300x300")
f1=Frame()
f1.pack()
f2=Frame()
f2.pack(side=BOTTOM)#from where it start putting
# f2.pack()
l1=Label(f1,text="great leaning")
l1.pack()
l2=Label(f2,text="bottom")
l2.pack()


window.mainloop()
