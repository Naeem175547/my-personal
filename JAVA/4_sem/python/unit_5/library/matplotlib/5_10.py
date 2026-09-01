import matplotlib.pyplot as ptl
import numpy as np
x=np.array(["a","b","e","d"])
y=np.array([30,4,5,6])
ptl.bar(x,y)
ptl.hist(x)
ptl.show()