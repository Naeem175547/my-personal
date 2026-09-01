from tkinter import *
root=Tk()
root.geometry("500x800")

def click(event):
    global scvalue
    text=event.widget.cget("text")#by this you can get the value of attributes text 
    print(text)
    if(text=="="):
        try:
           value=eval(scvalue.get())       
           scvalue.set(value)
           screen.update()#can write or not screen is entry
        except Exception as f:
            scvalue.set("error")
    elif text=="C":
        scvalue.set("")
        screen.update()
    else:
        scvalue.set(scvalue.get()+text)
        screen.update()

scvalue=StringVar()
scvalue.set("")#this will set entry value 
screen=Entry(root,textvariable=scvalue,font="Arail 20 bold")
screen.pack(fill=X, ipadx=8 , ipady=10, padx=10)



# f=Frame(root,bg="grey")
# f.pack()
# b=Button(f,text="9", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="8", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="7", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)

# f=Frame(root,bg="grey")
# f.pack()
# b=Button(f,text="6", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="5", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="4", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)


# f=Frame(root,bg="grey")
# f.pack()
# b=Button(f,text="3", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="2", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="1", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)


# f=Frame(root,bg="grey")
# f.pack()
# b=Button(f,text="0", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="-", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="+", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)

# f=Frame(root,bg="grey")
# f.pack()
# b.bind('<Button>',click)
# b=Button(f,text="/", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="*", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="%", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)

# f=Frame(root,bg="grey")
# f.pack()
# b=Button(f,text="C", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)
# b=Button(f,text="=", font="Arail 15 bold",padx=14,pady=12)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind('<Button>',click)


#Instead of writing above long code write only this

buttons = [
    "9", "8", "7",
    "6", "5", "4",
    "3", "2", "1",
    "0", "-", "+", "/",
    "*", "%", "C", "="
]

# frame = None
# for i, text in enumerate(buttons):
#     if i % 3 == 0:
#         frame = Frame(root, bg="grey")
#         frame.pack()
#     b = Button(frame, text=text, font="Arial 15 bold", padx=14, pady=12)
#     b.pack(side=LEFT, padx=10, pady=10)
#     b.bind('<Button>', click)


#enumerate returns (index,value of that index) if don't want to use enumerate use buttons but i will have to be delared own and manage

frame=None
i = 0
for text in buttons:
    if i % 3 == 0:
        frame = Frame(root, bg="grey")
        frame.pack()
    b = Button(frame, text=text, font="Arial 15 bold", padx=14, pady=12)
    b.pack(side=LEFT, padx=10, pady=10)
    b.bind('<Button>', click)#<Button-1> also same
    i += 1

root.mainloop()