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
// MenuToggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = ()=>{
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

