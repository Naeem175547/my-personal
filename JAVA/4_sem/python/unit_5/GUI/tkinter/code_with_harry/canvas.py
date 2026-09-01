from tkinter import *
root=Tk()
canvas_width=800
canvas_height=400
root.geometry(f"{canvas_width}x{canvas_height}")
canvs=Canvas(root,width=canvas_width,height=canvas_height)
canvs.pack()
canvs.create_line(100,400,800,20,fill="red")#(x1,y1,x2,y2) (x1,y1) from where start and (x2,y2) ending point
canvs.create_line(0,0,800,400)
# Draw a rectangle on the canvas
# Parameters: x1, y1, x2, y2 (top-left and bottom-right corners)
canvs.create_rectangle(100,200,200,200,fill="blue")

canvs.create_text(200,200,text="python")#(x,y)


# Parameters: x1, y1, x2, y2 (top-left and bottom-right corners of the bounding box)
canvs.create_oval(100, 100, 300, 200, outline="blue", width=2)
root.mainloop()