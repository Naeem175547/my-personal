#Label- display box in whih image or text is added
#syntax- l1=Label(master,opts=val)
# opt=bg,command,font,image,width,heigth,text
#text for writing some thing in label



from tkinter import *
window=Tk()
window.geometry("500x500")
l1=Label(window,text="Greate leaning",bg="yellow",font=("Arial",20),width=20)#in label width does not in px so avoid it until learn






# l1.place(x=50,y=10)#x,y in pixed but no need to specify
l1.pack(side=LEFT,anchor="e")
# l1.grid(row=0,column=1)

# img=PhotoImage(file="4_sem\python\unit_5\GUI\tkinter\widgets\.png")
# l2=Label(window,image=img)


window.mainloop()
