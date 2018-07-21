let nextBtn = document.getElementById('nav_right');
let prevtBtn = document.getElementById('nav_left');




function funcNext() {
    let learn = document.getElementById("learn");
    let play = document.getElementById("play");

    learn.style.transform = 'translateX(555px)';
    play.style.transform = 'translateX(0px)';

        if (learn.style.transform = 'translateX(555px)') {
            learn.style.opacity = '0';
            play.style.opacity = '1';
        }
  }


function funcPrev() {
    let slider1 = document.getElementById('slider1');
    let slider2 = document.getElementById('slider2');

    slider1.style.transform = 'translateX(0px)';
    slider2.style.transform = 'translateX(-600px)';

        if (slider2.style.transform = 'translateX(-600px)') {
            slider2.style.width = '300px';
            slider1.style.width = '';
            slider2.style.opacity = '0';
            slider1.style.opacity = '1';
        }
  }
  


  nextBtn.addEventListener('click', () => {
            let slider1 = document.getElementById('slider1');
            let slider2 = document.getElementById('slider2');
            let nextBtn = document.getElementById('nav_right');
            let prevtBtn = document.getElementById('nav_left');

            slider1.style.transform = 'translateX(605px)';
            slider2.style.transform = 'translateX(0px)';

            slider2.style.width = '';

            setTimeout(funcNext, 500);

            if (slider1.style.transform = 'translateX(600px)') {
                
                prevtBtn.style.opacity = '1';
                prevtBtn.style.border = '4px solid #8EC63B';
                prevtBtn.style.color =  '#fff';

                nextBtn.style.opacity = '0.5';
                nextBtn.style.border = '4px solid #d12a7b';
                nextBtn.style.color =  '#d12a7b';

                slider1.style.width = '300px';
                slider1.style.opacity = '0';
                slider2.style.opacity = '1';

            }
        });



        prevtBtn.addEventListener('click', () => {

            let nextBtn = document.getElementById('nav_right');
            let prevtBtn = document.getElementById('nav_left');
            let learn = document.getElementById("learn");
            let play = document.getElementById("play");

            learn.style.transform = 'translateX(0px)';
            play.style.transform = 'translateX(-555px)';
            
            setTimeout(funcPrev, 500);

            if (play.style.transform = 'translateX(-555px)') {
                
                nextBtn.style.opacity = '';
                nextBtn.style.border = '';
                nextBtn.style.color =  '';

                prevtBtn.style.opacity = '0.5';
                prevtBtn.style.border = '4px solid #d12a7b';
                prevtBtn.style.color =  '#d12a7b';

                play.style.opacity = '0';
                learn.style.opacity = '1';
            }
        });
