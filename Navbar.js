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


function Readmore(btn){
    let element=document.querySelector('.AboutList_option')
    let heading=document.getElementById('aboutHeading')
    let screenSize=window.screen.width
    
    let display=window.getComputedStyle(element, null).display
    if(display=="none"){
        element.style.display="block"
        heading.style.position="absolute"
        heading.style.transform="translate(-50%, -50%)";
        btn.innerText="Read Less....!"
    }
    else{
        element.style.display="none"
        heading.style.position="static"
        heading.style.transform="unset";
        btn.innerText="Read More....!"
    }

}