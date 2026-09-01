def count_letter_digits(input_str):
    digits=0
    letters=0
    for i in input_str:
        if(i.isdigit()):
            digits+=1
        elif(i.isalpha()):
            letters+=1
    return letters,digits

input_str="Hello   1234"
file_name="output.txt"
letters,digits=count_letter_digits(input_str)
with open(file_name,"w") as file:
    file.write(f"Numbe of letter : {letters} \n")
    file.write(f"number of digits : {digits} \n")
print("count of lettr and digits written to the file successfully!")
