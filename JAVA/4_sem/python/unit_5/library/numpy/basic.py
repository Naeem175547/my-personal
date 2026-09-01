# import numpy as np
# x=np.array([1,2,43,23])
# y=np.array([[1,3,4],[3,4,5]])
# print("1 d array \n",x)
# print(np.sum(x))#using numpy function
# print(x.sum())#using array method
# print(y)
# print(np.transpose(x))#1d not transpose
# print(np.transpose(y))
# print(np.mean(x))
# print(np.mean(y))
# print(np.std(x))
# print(np.var(x))
# print(np.dot([1,2],[2,4]))
# print(np.concatenate([1,3,4],[4,2])))#give tuple insid
# print(np.split(x,2))
# print(np.append(x,100))
# print(np.delete(x,0))
# z=x
# x[0]=100
# print(x,z)

# z=np.copy(x)
# x[0]=100
# print(x,z)


import numpy as np
x=np.array([1,2,3,4,5])
print(x)
y=np.array([[1,32343,23,21],[0,3,1,2]])
print(y)
# print(y.transpose())
print(np.min(x))
print(np.min(y))
print(np.sum(x))
print(np.sum(y))
print(np.mean(x))
print(np.dot(x,x))
print(np.append(x,10),x)
print(np.concatenate((x,[34,23,13])),x)
print(np.delete(x,2))











