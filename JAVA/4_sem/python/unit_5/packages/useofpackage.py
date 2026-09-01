# from pack1 import module1
# from pack1 import module2
# from pack1.module2 import *
# print(module1.sum(1,3))
# print(module2.mul(1,3))
# print(mul(1,3))


# import pack1
# print(pack1.mul(3,2))


from pack1 import mul as a # mul name is now a
print(a(3,1))
from pack1 import sub_pack1

# import pack1 as a  #pack1 name now is a
# print(a.mul(23,2))


