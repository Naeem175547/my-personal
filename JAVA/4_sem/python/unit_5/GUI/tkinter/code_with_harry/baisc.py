from tkinter import *

window=Tk()
window.geometry("500x420")
window.minsize(200,200)
# window.maxsize(width=200,height=200)
l1=Label(window,text="naeem is good boy",bg="green",fg="black",padx=10,pady=20,font=("arial",12,"bold"),borderwidth=3,relief=SUNKEN)

l1.pack(side=LEFT,fill=Y)
# photo=PhotoImage(file="heroImage.png")#use only png png but not use  jpeg there is different process for this
# l2=Label(window,image=photo)
# l2.pack()

#for jpeg img

# l1.place(x=10,y=100)
window.maxsize(800,700)
window.mainloop()