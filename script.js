function desktopCheck(){
    if(window.innerWidth < 768){
        console.log("Mobile mode");
    }
    else{
        gsap.from("#pen", {
            x: 1500,
            duration: 1,
            delay: 0.1,
            ease: "back",
        });
        gsap.from(['#p','#o', '#r', '#tf', '#li'],{
            scale: 0.9,
            duration: 1,
        })        
        gsap.from(['#right-cir','#left-cir'],{
            zIndex: 1,
            scale: 0.9,
            duration: 1,
            // duration: 1,
        
        })        
        gsap.from('#scroll_button', {
            opacity: 0,
            duration: 2,    
            delay: .5,
        })
        gsap.from('#downArrow', {
        
            y: -8,
            scaleY: 0.8,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1",
        });
    }
}

const scrollDown = () => {
    var scrollBtn = document.getElementById('scroll_button');
    var body = document.querySelector('body');
    scrollBtn.addEventListener('click', () => {
        console.log("clicked");
        body.scrollTo({
            top: 833,
            behavior: 'smooth',
        })
        
    });
}

scrollDown();

desktopCheck();


