# a={
#     "python","java","c++","python","js","java","python","java"
# }
# print(len(a))

# a={9,9.5}
# print(a)

# a={9,9.0}
# print(a)

# solution
a={
    ("float",9.0),
    ("int",9)
}
print(a.difference({2,3,22}))

