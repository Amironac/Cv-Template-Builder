let item = document.querySelectorAll('.item');
let trenutni_cv ;

item.forEach(element => {
    
    element.addEventListener('click', function (e) {
        let main = document.getElementById('main');
       

        document.getElementById('choose-template').style.display = 'none'

        document.getElementById('change-template').style.display = 'flex';

        let section_one = document.getElementById('section-one')
        section_one.style = 'width:50%;padding-top:50px;'
        
        let section_two = document.getElementById('section-two')
        section_two.style = 'display:block;';

        let form = document.getElementById('form');
        form.style = 'width:100%;'
        let trenutni = e.target.classList;
       
        trenutni_cv = e.target.id; 
       
        document.querySelector('.container').style.display = "none";
        
        if(trenutni.contains('item-1')){
            document.querySelector('.template-1').style.display = "block";
            document.querySelector('.template-2').style.display = "none";
            document.querySelector('.template-3').style.display = "none";
        }
        if(trenutni.contains('item-2')){
            document.querySelector('.template-2').style.display = "block";
            document.querySelector('.template-1').style.display = "none";
            document.querySelector('.template-3').style.display = "none";
        }
        if(trenutni.contains('item-3')){
            document.querySelector('.template-3').style.display = "block";
            document.querySelector('.template-2').style.display = "none";
            document.querySelector('.template-1').style.display = "none";

        }
        
    })
})


let change_template = document.getElementById('change-template');

change_template.addEventListener('click', function () {
    let main = document.getElementById('main');
    main.style = 'display:""';

    document.getElementById('section-one').style = 'width:100%;';
    document.getElementById('section-two').style = 'width:50%;margin:auto;'
    document.getElementById('choose-template').style.display = ''
    

    document.querySelector('.container').style.display = "";
    document.querySelector('.template-1').style.display = "none";
    document.querySelector('.template-2').style.display = "none";
    document.querySelector('.template-3').style.display = "none";

   
    
    this.style.display="none"
    
})


