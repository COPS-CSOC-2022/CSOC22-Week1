for(var i=0;i<localStorage.length;i++){
document.getElementById('box').insertAdjacentHTML('beforeend',`<div color="brown">${localStorage.key(i)}  ${localStorage.getItem(localStorage.key(i))}</div><br>`)
}
document.getElementById('dlt').addEventListener('click',()=>{
    document.getElementById('box').innerHTML=""
    localStorage.clear()
})