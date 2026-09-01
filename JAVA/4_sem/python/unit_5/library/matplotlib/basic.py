# import matplotlib.pyplot as plt
# import numpy as np
# x=[3,3,4]#only one diamention array
# y=np.array([1,4,2,30])
# # plt.plot(x,y)
# # plt.plot(x)
# # plt.scatter(x,y)
# # plt.bar(x,y)
# # plt.hist(x)
# labels=['a','b','c']
# plt.xlabel('X-axis label')
# plt.ylabel('Y-axis label')
# # plt.pie(x,labels=labels,autopct="%1.1f%%" ,startangle=90)


# plt.plot(x)
# plt.grid(True)


# plt.title(" diagram")
# plt.show()


import matplotlib.pyplot as  ptl
import numpy as np
x=np.array([1,20,3,4])
y=np.array([10,10,30,40])
ptl.scatter(x,y)
# ptl.bar(x,y)
# ptl.hist(x,y)
# ptl.plot_date(x,y)
lebel1=["my","Name","is","naeem"]
e=[0.2,0,4,0]
ptl.pie(x,autopct="%1.1f%%",labels=lebel1,startangle=90,explode=e)
ptl.grid()

ptl.title("simple cahrt",color='red',fontsize=18)
ptl.xlabel("imrna",color="green")
ptl.ylabel("kah")
ptl.show()