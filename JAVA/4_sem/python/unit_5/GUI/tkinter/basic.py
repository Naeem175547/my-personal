# import tkinter
# # from tkinter import *
# window=tkinter.Tk()# for creating main window(container)
# # window=TK()
# window.title("Welcome to greate learning")
# window.geometry("200x300")#initial size
# window.minsize(width=100,height=200)#minsize in px
# window.maxsize(width=300,height=800)#maxsize in px

# window.mainloop()#for running gui application


from tkinter import *
w=Tk()
w.geometry("400x400")
w.title("baisc window")

w.maxsize(width=800,height=800)
w.minsize(width=200,height=200)
l=Label(w,text="first",width=3,height=1,bg="green",font=("Arail",18),padx=5,pady=5,borderwidth=3,relief=SUNKEN)
l.pack(side=TOP)
w.mainloop()