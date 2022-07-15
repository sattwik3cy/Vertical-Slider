const slideLeft = $(".left-container");
const slideRight = $(".right-container");
const upButton = $(".slide-up");
const downButton = $(".slide-down");
let a=-300;
let b=0;
let activeSlide=0;
slideLeft.css("top",`${a}vh`);


const changeSlide =(direction)=> {
    if(direction==="up"){
        if(activeSlide==3){
            a=-300;
            b=0;
            activeSlide=0;
        }
        else{
            a+=100;
            b-=100;
            activeSlide++;
        }
            slideLeft.css("top",`${a}vh`);
            slideRight.css("top",`${b}vh`);
            
    }

    if(direction==="down"){
        if(activeSlide==0){
            a=0;
            b=-300;
            activeSlide=3;
        }
        else{
            a-=100;
            b+=100;
            activeSlide--;
        }
            slideLeft.css("top",`${a}vh`);
            slideRight.css("top",`${b}vh`);
            
    }
}

$(upButton).click(()=>{changeSlide("up")});
$(downButton).click(()=>{changeSlide("down")});
