const input=document.createElement('input')
const button=document.createElement('button');
button.innerText="click me"
input.setAttribute('placeholder',"username")
button.setAttribute('id','btn')
button.classList.add('btn')

const h1=document.createElement("h1")
h1.innerText="DOM Practive"
h1.style.color="purple"

const p=document.createElement('p')
p.innerText="Apna College Delta Practive"
p.classList.add('para')

document.body.append(input)
document.body.append(button,h1,p)





