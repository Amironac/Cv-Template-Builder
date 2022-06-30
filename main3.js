
let add__btn =document.querySelectorAll(".btn-primary")
add__btn.forEach(item => {
    item.addEventListener('click', updateUl);
})

function updateUl (e){
    var input_bio = document.getElementById('textarea-input').value;
    var input_skills = document.getElementById('input-skills').value;
    var input_educations = document.getElementById('input-education').value;
    var input_hobbie = document.getElementById('input-hobbie').value;
    var input_certificate = document.getElementById('input-certificate').value;
    var input_experience = document.getElementById('input-experience').value;

    let p_output ;
    let ul_skills;
    let edu;
    let hobbie;
    let certificate;
    let experience;
    
    
    if(input_bio){

        if(trenutni_cv == 'item-1'){
            p_output = document.getElementById('biography-output-1');
            p_output.innerText = input_bio;
            document.getElementById('textarea-input').value = '';
            checkButtonAndClassList(e);
            
        }else if(trenutni_cv == 'item-2'){
            p_output = document.getElementById('biography-output-2');
            p_output.innerText = input_bio;
            document.getElementById('textarea-input').value = '';
            checkButtonAndClassList(e);

        }
        else if(trenutni_cv == 'item-3'){
            p_output = document.getElementById('biography-output-2');
            p_output.innerText = input_bio;
            document.getElementById('textarea-input').value = '';
            checkButtonAndClassList(e);

        }
        
        
    }

    if(input_skills){
        if(trenutni_cv == 'item-1'){
            ul_skills = document.getElementById('ul-skills-1');

            ul_skills.innerHTML += '<li>'+ input_skills +'</li>';
            document.getElementById('input-skills').value = '';
            checkButtonAndClassList(e);

            
        }else if(trenutni_cv == 'item-2'){
            ul_skills = document.getElementById('ul-skills-2');

            ul_skills.innerHTML += '<li>'+ input_skills +'</li>';
            document.getElementById('input-skills').value = '';
            checkButtonAndClassList(e);


        }
        else if(trenutni_cv == 'item-3'){
            ul_skills = document.getElementById('ul-skills-3');

            ul_skills.innerHTML += '<li>'+ input_skills +'</li>';
            document.getElementById('input-skills').value = '';
            checkButtonAndClassList(e);


        }
    }

    if(input_educations){
        if(trenutni_cv == 'item-1'){
            edu = document.getElementById('edu-1');
            edu.innerHTML += `
            <div class="education-degree">
                <div class="heading">
                    <div>
                        <h4>${input_educations}</h4>
                    </div>
                    <div class="years-active">
                        <span>Sept - Jun </span>
                    </div>
                </div>

               
            </div>

            `
            document.getElementById('input-education').value = '';
            checkButtonAndClassList(e);

            
        }else if(trenutni_cv == 'item-2'){
            edu = document.getElementById('edu-2');
            edu.innerHTML += `
            <div class="education-degree">
                <div class="heading" style="margin-top:2%;">
                    <div>
                        <h4 style="margin-left:10%;">${input_educations}</h4>
                    </div>
                    <div class="years-active">
                        <span>Sept - Jun </span>
                    </div>
                </div>

               
            </div>

            `
            document.getElementById('input-education').value = '';
            checkButtonAndClassList(e);


        }
        else if(trenutni_cv == 'item-3'){
            edu = document.getElementById('edu-3');
            edu.innerHTML += `
            <div class="education-degree">
                <div class="heading">
                    <div>
                        <h4>${input_educations}</h4>
                    </div>
                    <div class="years-active">
                        <span>Sept - Jun </span>
                    </div>
                </div>

               
            </div>

            `
            document.getElementById('input-education').value = '';
            checkButtonAndClassList(e);


        }
    }

    if(input_hobbie){
        if(trenutni_cv == 'item-1'){
            hobbie = document.getElementById('hobbie-1');
           
            hobbie.innerHTML += '<li> ' + input_hobbie + '</li>';
            document.getElementById('input-hobbie').value = '';
            checkButtonAndClassList(e);

            
        }else if(trenutni_cv == 'item-2'){
            hobbie = document.getElementById('hobbie-2');
            hobbie.innerHTML += '<p>' + input_hobbie + '</p>';
            document.getElementById('input-hobbie').value = '';
            checkButtonAndClassList(e);


        }
        else if(trenutni_cv == 'item-3'){
            hobbie = document.getElementById('hobbie-3');
            hobbie.innerHTML += '<p>' + input_hobbie + '</p>';
            document.getElementById('input-hobbie').value = '';
            checkButtonAndClassList(e);


        }

    }

    if(input_certificate){
        if(trenutni_cv == 'item-1'){
            certificate = document.getElementById('certificate-1');
            certificate.innerHTML += 
            `<div class="certificate-layout"> 
                <h3> ${input_certificate} </h3>
            </div>`;

            document.getElementById('input-certificate').value = '';
            checkButtonAndClassList(e);

            
        }else if(trenutni_cv == 'item-2'){
            certificate = document.getElementById('certificate-2');
            certificate.innerHTML += 
            `<div class="certificate-layout-2"> 
                <h3> ${input_certificate} </h3>
            </div>`;

            document.getElementById('input-certificate').value = '';
            checkButtonAndClassList(e);


        }
        else if(trenutni_cv == 'item-3'){
            certificate = document.getElementById('certificate-3');
            certificate.innerHTML += 
            `<div class="certificate-layout"> 
                <h3> ${input_certificate} </h3>
            </div>`;

            document.getElementById('input-certificate').value = '';
            checkButtonAndClassList(e);


        }
    }

    if(input_experience) {
        if(trenutni_cv == 'item-1'){
            experience = document.getElementById('experience-1');
            experience.innerHTML += '<p class="output-experience">' + input_experience + '</p>'
            document.getElementById('input-experience').value = '';
            checkButtonAndClassList(e);

        }else if(trenutni_cv == 'item-2'){
            experience = document.getElementById('experience-2');
            experience.innerHTML += '<p class="output-experience">' + input_experience + '</p>'
            document.getElementById('input-experience').value = '';
            checkButtonAndClassList(e);

        }
        else if(trenutni_cv == 'item-3'){
            experience = document.getElementById('experience-3');
            experience.innerHTML += '<p class="output-experience">' + input_experience + '</p>'
            document.getElementById('input-experience').value = '';
            checkButtonAndClassList(e);


        }
    }

}


function checkButtonAndClassList(e) {
    if(e.target.parentNode.classList != 'content-display'){
        e.target.parentNode.classList.add('content-display');
        button.forEach(item => {
            item.style.display = '';
        })
    }
}