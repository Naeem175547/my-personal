word="Java"
with open("a1.txt","r") as f:
    # for line in f:
    #     new_data=line.replace("Java","python")
    #     print(new_data)
    data=f.read()
    new_data=data.replace("Java","Python")
    print(new_data)
    if(data.find(word)!=-1):
        print("word found")
    


        