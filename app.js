
let listContent=document.createDocumentFragment()
const numberSections = document.querySelectorAll('.allsections');
let ulist = document.getElementById('ulist');

// create an elements of navigation bar

for (let i = 1; i <= numberSections.length; i++) {
   let li = document.createElement('li')
   let a = document.createElement('a')
   let node = document.createTextNode(`section ${i}`)
    li.classList.add('list')
    a.classList.add('a')
    a.appendChild(node)
    li.appendChild(a)
    listContent.appendChild(li)
    ulist.appendChild(listContent)}

// distinguish the active section 

const lis=ulist.querySelectorAll('a')
for(let i=0;i<lis.length;i++){
    lis[i].addEventListener('click',function() {
        for(let x=0;x<lis.length;x++){
            if (lis[x]===this)
                 {this.classList.add('active')}}})} 
    
//convert the sections and li list to array   

let arraySections =[]
   for(let z of numberSections) {
          arraySections.push(z)}
let lisArray = []
     for(let i of lis){
          lisArray.push(i) }

// section active state in an appropiate section

window.addEventListener('scroll',function () {
    for(f of numberSections) {
    bool=f.getBoundingClientRect().top<=0 && f.getBoundingClientRect().bottom>=0
    if(bool){
        lisArray[arraySections.indexOf(f)].classList.add('active')
     }
    else{
        lisArray[arraySections.indexOf(f)].classList.remove('active')
    }   
    }
})

// scrolling function

for(let l of lis) {
    l.addEventListener('click',function(event) {
       let index=lisArray.indexOf(l)
       let position= numberSections[index].offsetTop
       event.preventDefault()
       scrollTo({
             left:0,
             top:position,
             behavior:"smooth",})
       
       })}
