import matplotlib.pyplot as ptl
import numpy as np
x=np.array([1,8,3,0])
y=x*2
print(y)
# ptl.scatter(x,y,marker="D",s=100)
ptl.plot(x,y,marker="*",color="r")
ptl.show()
