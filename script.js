score= 0;
cross=true;
audio= new Audio('music.mp3');
audiogo= new Audio('gameover_music.wav');
setTimeout(() =>{
    audio.play();                                                 
    },1000);
document.onkeydown= function(e)
{
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38)
    {
        man= document.querySelector('.man');
        man.classList.add('animateman');
        setTimeout(()=>
        {
            man.classList.remove('animateman')
        },1500);
    }
        if(e.keyCode==39)
        {
            man= document.querySelector('.man');
            mx=window.parseInt(getComputedStyle(man,null).getPropertyValue('left'));
            man.style.left= (mx+ 112 ) + "px";
        }
        if(e.keyCode==37)
        {
            man= document.querySelector('.man');
            mx=window.parseInt(getComputedStyle(man,null).getPropertyValue('left'));
            man.style.left= (mx-112) + "px";
        }
    }
        setInterval(()=>
        {
            man=document.querySelector('.man');
            gameover=document.querySelector('.gameover');
            dragon=document.querySelector('.dragon');
            mx=window.parseInt(getComputedStyle(man,null).getPropertyValue('left'));
            my=window.parseInt(getComputedStyle(man,null).getPropertyValue('top'));
            dx=window.parseInt(getComputedStyle(dragon,null).getPropertyValue('left'));
            dy=window.parseInt(getComputedStyle(dragon,null).getPropertyValue('top'));
            offsetX=Math.abs(mx-dx);
            offsetY=Math.abs(my-dy);
            console.log(offsetX,offsetY);
            if(offsetX<73 &&offsetY<52)
            {
                gameover.style.visibility='visible';
                dragon.classList.remove('dragonani');
                audiogo.play();
                setTimeout(() =>
                {
                    audiogo.pause();
                    audio.pause();
                  
                },1000);

            }
          else if (offsetX<145 && cross)
            {
                score+=1;
                updateScore(score);
                cross=false;
                setTimeout(()=>
                {
                    cross=true;

                },1000);
                setTimeout(()=>
                {
                    aniDur=parseFloat(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));
                    newDur=aniDur-0.1;
                    dragon.style.animationDuration=newDur + 's';
                    console.log('New animation duration: ', newDur)
                },500)
            }
        }, 10);
        
       function updateScore(score)
       {
           scoreCont.innerHTML="Your Score: "+score;
       }
    
    
