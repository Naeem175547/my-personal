# listbox-it is used to give a user with a list of options
# ops-bg,bd,font,image,width,height
from tkinter import *
window=Tk()
window.geometry("300x300")
# lb=Listbox(window,width=20)
# # lb.pack(side=BOTTOM)
# lb.pack()
# l1=["Tony","edwin","kirtika","eepsa"]
# for i in l1:
#     lb.insert(END,i)
#     # lb.insert(ACTIVE) 
# def delete():
#     lb.delete(ANCHOR)
    

# def add():

#     lb.insert(ACTIVE,input("enter item to be inserted"))
#     # lb.insert(ACTIVE) this will add item over item 
#     # lb.insert(END,input("neter item"))below item

# b1=Button(window,text="remove",bg="red",command=delete)
# b1.pack()
# b2=Button(window,text="add",bg="red",command=add)
# b2.pack()
lb=Listbox(window,width=20)
lb.pack()
l=["imran",13,"234",3]
for i in l:
    # lb.insert(END,i)
    lb.insert(ANCHOR,i)
def add():
    lb.insert(END,input("Enter the value"))
    # lb.insert(ANCHOR,input("enter the vfalue"))
def remove():
    # lb.delete(ANCHOR)
    lb.delete(END) #this will delete last element


Button(window,text="add",borderwidth=3,relief=SOLID,command=add).pack()
Button(window,text="remove",borderwidth=3,relief=SOLID,command=remove).pack()



window.mainloop()

#insert(ENd,item) -inset data in Listbox
#delete(ANCHOR) which is selected jsut delete