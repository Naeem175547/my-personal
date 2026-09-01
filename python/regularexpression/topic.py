import re
x='''sachin scors 76 and Dravin Scores 40 and rohit scores 88 and Dhoni Scores 99'''
print(re.findall('[A-Z][a-z]*',x))
print(re.findall("[0-9]+",x))
print(re.findall("[0-9]*",x))
print(re.findall("\d+",x))
print(re.finditer("sa",x))

