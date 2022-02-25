// add hovered class in selected list item
let list = document.querySelectorAll('.navigation li');
// console.log(list)
function activeLink(){
    list.forEach((item)=>{
        item.classList.remove('hovered');
        this.classList.add('hovered');
    })
}
list.forEach((itm)=>{
    itm.addEventListener('mouseover', activeLink)
})