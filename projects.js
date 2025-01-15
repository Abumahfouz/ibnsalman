const projects = document.querySelectorAll('.project-item');
// Loop through project list and display corresponding text on hover
// if user is on div 1, remove hidden from text container classList
    
    projects.forEach((p)=>{
        p.addEventListener('click', ()=>{
                p.childNodes[1].classList.toggle('hidden');
        });
    });
