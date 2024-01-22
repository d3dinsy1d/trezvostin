function opentab(tabname, sectionIndex){
    let tabcontent=document.getElementsByClassName("tabs")[sectionIndex].getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    let tablinks = document.getElementsByClassName("tabs")[sectionIndex].getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }
    document.getElementById(tabname).classList.add("active");
    event.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.accordion section');

    sections.forEach(section => {
        const header = section.querySelector('h3');
        const content = section.querySelector('div');

        header.addEventListener('click', () => {
            sections.forEach(s => {
                if (s !== section) {
                    s.classList.remove('active');
                }
            });

            if (section.classList.contains('active')) {
                section.classList.remove('active');
            } else {
                section.classList.add('active');
            }
        });
    });
});

const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    openPopup();
});

function openPopup() {
    if(document.getElementById('popup').classList.contains('active')){
        document.getElementById('popup').classList.remove('active');
    }else{
        document.getElementById('popup').classList.add('active');
    }
}

