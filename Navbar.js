document.querySelector('.hamburgur').addEventListener('click',()=>{
    let links=document.querySelector('.links')
    let position=links.computedStyleMap().get('top').value;
    if(position=="-200"){
        
        links.style.top="100px"
    }
    else{
       
         links.style.top="-200px"
    }
})