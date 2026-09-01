from tkinter import *
w=Tk()
w.geometry("600x700")
def click(event):
    text=event.widget.cget("text")
    print(text)
    if(text=="="):
        try:
            value = eval(svalue.get())
            svalue.set(value)
        except Exception as e:
            print(f"Error: {e}")  # Print the error to the console for debugging
            svalue.set("error")
              
            
        
    elif text=="C":
        svalue.set("")
        e1.screen()
    else:
       svalue.set(svalue.get()+text)

        
svalue=StringVar()
svalue.set("")
e1=Entry(w,font=("Arial",18),textvariable=svalue).pack(fill=X,padx=5,pady=8)

#first row
# f1=Frame(w,bg="gray")
# f1.pack()
# b=Button(f1,text="9",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="8",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="7",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# f1=Frame(w,bg="gray")
# f1.pack()
# b=Button(f1,text="6",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="5",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="4",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# #thid row
# f1=Frame(w,bg="gray")
# f1.pack()
# b=Button(f1,text="3",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="2",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="1",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)

# #forth row
# f1=Frame(w,bg="gray")
# f1.pack()
# b=Button(f1,text="0",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="-",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="+",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)

# #fifth row

# f1=Frame(w,bg="gray")
# f1.pack()
# b=Button(f1,text="*",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="/",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="%",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)

# #sixth fow

# f1=Frame(w,bg="gray")
# f1.pack()
# b=Button(f1,text="C",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)
# b=Button(f1,text="=",padx=14,pady=14,borderwidth=2,relief=SOLID)
# b.pack(side=LEFT,padx=10,pady=10)
# b.bind("<Button-1>",click)


buttons=[
    "9","8","7",
    "6","5","4",
    "3","2","1",
    "0","+","-",
    "*","/","%",
    "C","="

]


frame=None
i=0
for text in buttons:
    if(i%3==0):
        frame=Frame(w,bg="gray")
        frame.pack()
    b=Button(frame,text=text,padx=15,pady=15,borderwidth=3,relief=SOLID)
    b.pack(side=LEFT,padx=14,pady=15)
    b.bind("<Button-5>",click)
    i=i+1






w.mainloop()