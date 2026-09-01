# b1=Button(master,ops=val) master=contianer and ops: bg,command,font,image,width,height 
#text-for writing something in button
#button is used to show button in applcation
from tkinter import *
window=Tk()
def abc():
    print("running")

window.geometry("300x300")
b1=Button(window,text="enter",bg="green",fg="red",command=abc)#fg - font color and font=(font-family,size,style)
b1.pack()
window.mainloop()