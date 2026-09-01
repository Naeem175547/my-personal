from tkinter import *
root=Tk()
def harry(event):
    print(f"you cliked on the button at {event.x}, {event.y}")

root.title("Events in Tkinter")
root.geometry("644x334")
b1=Button(root,text="click me please")
b1.pack()
b1.bind('<Button-1>',harry)
root.mainloop()
