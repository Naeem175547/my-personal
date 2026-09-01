import pandas as pd
import matplotlib.pyplot as plt

df=pd.read_csv("output.csv")
print(df)
plt.plot(df["Name"],df["Id"])
plt.xlabel("a")
plt.ylabel("b")
plt.xticks(df["Name"])
plt.grid(True)
plt.tight_layout()

plt.show()