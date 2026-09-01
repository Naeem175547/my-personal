#check array is sorted or not
def issort(arr,index):
    if index==len(arr)-1:
        return True
    return (arr[index] <= arr[index+1]) and issort(arr,index+1)
#seach in array 
def linearseach1(x,index,val):
    if index==len(x):
        return False
    if(x[index]==val):
        return True#or index
    return linearseach1(x,index+1,val)
# seach in array another way    
def linearseach2(x,index,val):
    if index==len(x):
        return False
    return x[index]==val or linearseach2(x,index+1,val)
#search all value and index store in list
def linearseach3(x,index,val):
    if index==len(x):
        return list
    if(x[index]==val)    :
        list.append(index)
    return linearseach3(x,index+1,val) 
#retrun the list and don't take list in argument
'''def linearseach4(x,index,val):
    list=[]
    if index==len(x):
        return list
    
    if x[index]==val:
        list.append(index)
    listreferance= linearseach4(x,index+1,val)
    list.append(listreferance)
    return list
    '''
#rotated binary search 
def rbs(x,val,f,l):
    while(f<=l):
        mid=int((f+l)/2)
        if(x[mid]==val):
            return True
        if(x[f]<=x[mid]):
            if(x[f]<=val and x[mid]>val):
                l=mid-1
            else:
                f=mid+1
        else:
            if x[mid]<val and x[l]>=val:
                f=mid+1
            else:
                l=mid-1
 #rotate binary seach with recursion
def rbsrecusion(x,val,f,l):
    if(f>l):
        return False
    mid=int((f+l)/2)
    if(x[mid]==val)               :
        return True
    if(x[f]<=x[mid]):
            if(x[f]<=val and x[mid]>val):
                return rbsrecusion(x,val,f,mid-1)
            else:
                return rbsrecusion(x,val,mid+1,l)
    else:
        if x[mid]<val and x[l]>=val:
                return rbsrecusion(x,val,mid+1,l)
        else:
                return rbsrecusion(x,val,f,mid-1)
                        



x=[2,2,20,40,45,345]
print(rbsrecusion(x,20,0,len(x)-1))

