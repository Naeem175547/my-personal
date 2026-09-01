import pandas as pd

di = {
    "Name": ["MOhammad Naeem", "imran", "shayan"],
    "Phone_no": [3, 2, 43],
    "Id": [0, 1, 3]
}

df = pd.DataFrame(di)
csvfile="output.csv"
df.to_csv(csvfile,index=True)#false row index will not include true by default





