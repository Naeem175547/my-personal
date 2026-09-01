import pandas as pd
data={
    "Name":["MOhan","shyni","Parul","Sam"],
    "ID":[12,43,54,32],
    "Place":["Dehli","Kochi","PUne","Patna"]

}
# df=pd.DataFrame(data,columns=["Name","b","Place"])
df=pd.DataFrame(data)
print(df)

# selecting row

# sr=df.loc[df["Name"]=="Parul"]#using loc
print(df.iloc[0])
print(df.loc[df["Name"]=="Parul"])

