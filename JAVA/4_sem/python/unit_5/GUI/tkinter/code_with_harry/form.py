from tkinter import *
window=Tk()
window.geometry("700x400")
def abc():
    print(f"{nameval.get(),phoneno.get(),genderval.get(),paymode.get(),foodserviceval.get()}")
    with open("abcd.txt","a")as f:
        f.write(f"{nameval.get(),phoneno.get(),genderval.get(),paymode.get(),foodserviceval.get()} \n")




Label(window,text="Welcome to Harry Travels",pady=5,font=("Arail",18)).grid(row=0,column=3)
name=Label(window,text="Name")
phone=Label(window,text="phone number")
gender=Label(window,text="Gender")
paymentmode=Label(window,text="Payment mode")


name.grid(row=1,column=2)
phone.grid(row=2,column=2)
gender.grid(row=3,column=2)
paymentmode.grid(row=4,column=2)

nameval=StringVar()
phoneno=IntVar()
genderval=StringVar()
paymode=StringVar()
foodserviceval=IntVar()


#entity

Entry(window,textvariable=nameval).grid(row=1,column=3)
Entry(window,textvariable=phoneno).grid(row=2,column=3)
Entry(window,textvariable=genderval).grid(row=3,column=3)
Entry(window,textvariable=paymode).grid(row=4,column=3)

foodservice=Checkbutton(window,text="Want to prebook you rmeals?" ,variable=foodserviceval)#checkbox value either will be 1 if check other wise 0
foodservice.grid(row=5,column=3)
Button(window,text="submit",command=abc,padx=10).grid(row=6,column=3)


window.mainloop()