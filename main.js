
let button = document.querySelectorAll('.button');
let span = document.querySelectorAll('.floating-x');

span.forEach(item => {
    item.addEventListener('click', () => {
        
        if(item.parentNode.classList != 'content-display' && item.classList.contains('floating-one')){
            
            item.parentNode.classList.add('content-display');
            document.querySelector('.button-one').style.display = '';
            
        }

        
        if(item.parentNode.classList != 'content-display' && item.classList.contains('floating-two')){
            
            item.parentNode.classList.add('content-display');
            document.querySelector('.button-two').style.display = '';
            
        }
        
        if(item.parentNode.classList != 'content-display' && item.classList.contains('floating-three')){
            
            item.parentNode.classList.add('content-display');
            document.querySelector('.button-three').style.display = '';
            
        }
        
        if(item.parentNode.classList != 'content-display' && item.classList.contains('floating-four')){
            
            item.parentNode.classList.add('content-display');
            document.querySelector('.button-four').style.display = '';
            
        }
        
        if(item.parentNode.classList != 'content-display' && item.classList.contains('floating-five')){
            
            item.parentNode.classList.add('content-display');
            document.querySelector('.button-five').style.display = '';
            
        }
        
        if(item.parentNode.classList != 'content-display' && item.classList.contains('floating-six')){
            
            item.parentNode.classList.add('content-display');
            document.querySelector('.button-six').style.display = '';
            
        }
    })
})


button.forEach(item => {
    item.addEventListener('click', ()=>{
        
        if(item.parentNode.nextElementSibling.nextElementSibling.classList == 'content-display'){
            item.parentNode.nextElementSibling.nextElementSibling.classList.remove('content-display');
            item.style.display = 'none';
        }
    
    })
})

