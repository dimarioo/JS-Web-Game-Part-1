
function newImage(link , left , bottom){
    let item = document.createElement('img')
    item.src = link
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom  + 'px'
    document.body.append(item)
    

}

newImage('assets/green-character.gif', 100 , 100)
newImage('assets/pine-tree.png', 450 , 200)
newImage('assets/tree.png', 200 , 300)
newImage('assets/pillar.png', 350  , 100)
newImage('assets/crate.png', 150 , 200)
newImage('assets/well.png', 500 , 425)




function newItem(link , left , bottom){
    let item2= document.createElement('img')
    item2.src = link
    item2.position = 'fixed'  
    item2.left = left + 'px'
    item2.bottom = bottom + 'px'
    document.body.append(item2)

    item2.addEventListener('dblclick', function(){
    item2.remove()
})


}

newItem('assets/sword.png',500, 405,)
newItem('assets/shield.png',165, 185,)
newItem('assets/staff.png',600, 100)
