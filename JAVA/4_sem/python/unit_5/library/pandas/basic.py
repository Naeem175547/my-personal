import numpy as np
import pandas as pd
x=np.array(["a","b","c","d"])
data=np.array([["a","b","c","d","e"],
               [10,20,30,40,30],
               [1,2,10,29,29]
               ])
# ser=pd.Series(data)
# print(ser)
# # print(ser[:2])
df1=pd.DataFrame(x)#this will create 1 column also number of elements row
print(df1)
df=pd.DataFrame(data)#this will create number of element of 1 array column

# print(df)
# print(df.head(1))
# print(df.tail(2))
# print(df.info())
# print(df.index)
print(df.columns)
print(len(df.columns))
# print(df[0])
# print(df[[0,3]])
# print(df.iloc[1])
# print("column")
print(df.loc[df[0]==10])




# data = {
#     'Category': ['A', 'B', 'A', 'B', 'A'],
#     'Values': [10, 20, 30, 40, 50]
# }

# df = pd.DataFrame(data)
# print(df)
# grouped = df.groupby('Category')['Values'].sum()#mean we can use
# print("sum",grouped)



# # df1 = pd.DataFrame({
# #     'Key': ['A', 'B', 'C'],
# #     'Value': [1, 2, 3]
# # })

# # # DataFrame 2
# # df2 = pd.DataFrame({
# #     'Key': ['A', 'B', 'D'],
# #     'Value': [4, 5, 6]
# # })

# # merged=df1.merge(df2,on='Key')
# # print("merged group")
# # print(merged)




# # Create a Series from a list
# data = [1, 2, 3, 4, 5]
# series = pd.Series(data)
# print("Series from a list:")
# print(series)

# # Create a Series from a dictionary
# data = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
# series = pd.Series(data)
# print("\nSeries from a dictionary:")
# print(series)
