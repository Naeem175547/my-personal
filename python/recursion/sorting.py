#buble sort
from re import L


def bublesort(x):
    for i in range(0,len(x)-1):
        for j in range(0,len(x)-1-i):
            if(x[j]>x[j+1]):
                temp=x[j]
                x[j]=x[j+1]
                x[j+1]=temp

# buble sort with reacursion
def bublesortR(a,s,l):# 3 2 1
    if(l==0):
        return
    if(s<l):
        if(a[s]>x[s+1]):
            temp=x[s]
            a[s]=a[s+1]
            a[s+1]=temp
        bublesortR(a,s+1,l)
    else:
        bublesortR(a,0,l-1)   
#merge sort
def mergesort(x,s,e):
    if(s<=e):
       return
    #if(s<e)
    mid=s+(e-s)/2 #(e+s)/2
    mergesort(x,s,mid)
    mergesort(x,mid+1,e)
    merge_sort(x,s,mid,e)
    
def merge_sort(x,s,m,e):
    a=[]
    l=s
    r=m+1
    m=0
    while(l<=m and r<=e):
        if(x[l]<x[r]):
            a[m]=x[l]
            l+=1
        else:
            a[m]=x[r]
            r+=1
        m+=1
    while(l<=m):
        a[m]=x[l]
        l+=1
        m+=1
    while(r<=e):
        a[m]=x[r]
        r+=1
        m+=1
    m=0    
    for i in a:
        x[m]=i
        m=+1
#quick sort
def  quicksort(x,l,h):
    s=l
    e=h
    mid=int(s+(e-s)/2)
    p=x[mid]
    while(s<=e):
        while(x[s]<p):
            s=s+1
        while(x[e]>p):
            e=e-1
        if(s<=e):
            temp=x[s]
            x[s]=x[e]
            x[e]=temp
    quicksort(x,l,e)  
    quicksort(x,s,h)
#insertion sort
def insertion_sort(x):
    for i in range(1,len(x)):
        j=i-1
        temp=x[i]
        while(temp<x[j] and j>=0):
            x[j+1]=x[j]
            j=j-1
        x[j+1]=temp






x=[2,1,0]     
print(x)   
bublesort(x)
print(x)
bublesortR(x,0,len(x)-1)
print(x)
mergesort(x,0,len(x)-1)
print(x)
insertion_sort(x)
print(x)