
let trTable = [...document.querySelectorAll('tbody tr')]

for(let i =0 ; i < trTable.length ; i++){
  trTable[i].getElementsByClassName('increaseBtn')[0].addEventListener('click' , (e)=>{
    trTable[i].getElementsByTagName('input')[0].value = eval( trTable[i].getElementsByTagName('input')[0].value + '+1') ;
    trTable[i].getElementsByClassName('prixTotal')[0].textContent = eval( trTable[i].getElementsByClassName('prixUnitaire')[0].textContent + '*' +trTable[i].getElementsByTagName('input')[0].value) ;
    
  })
  trTable[i].getElementsByClassName('decreaseBtn')[0].addEventListener('click' , (e)=>{
    
    if(trTable[i].getElementsByTagName('input')[0].value == 1 ) return
    trTable[i].getElementsByTagName('input')[0].value = eval( trTable[i].getElementsByTagName('input')[0].value + '-1')
    trTable[i].getElementsByClassName('prixTotal')[0].textContent = eval(  trTable[i].getElementsByClassName('prixUnitaire')[0].textContent + '*' +trTable[i].getElementsByTagName('input')[0].value) ;
  
})

  trTable[i].getElementsByClassName('removeBtn')[0].addEventListener('click' , (e)=>{
    
    document.querySelector('tbody').removeChild(trTable[i]);
  
})
}


