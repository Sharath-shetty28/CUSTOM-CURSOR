var main=document.querySelector('.main')
var cr=document.querySelector('.cursor')

main.addEventListener('mousemove',function(detail){
    console.log(detail.x)
    cr.style.left=detail.x +"px"
    cr.style.top=detail.y +"px"

})