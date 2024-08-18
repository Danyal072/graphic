function desktopCheck(){
    if(window.innerWidth < 768){
        console.log("Mobile mode");
        gsap.from("#pen-img", {
            x: 1500,
            duration: 1,
            delay: 0.1,
            ease: "back",
        });
        gsap.from('#scroll_button', {
            opacity: 0,
            duration: 2,    
            delay: .5,
        })
        gsap.from('#downArrow', {
        
            y: -5,
            scaleY: 0.8,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1",
        });
    
    }
    else{
        gsap.from("#pen", {
            x: 1500,
            duration: 1,
            delay: 0.1,
            ease: "back",
        });
        gsap.from(['#p','#o', '#r', '#tf', '#li'],{
            scale: 0.5,
            duration: 0.5,
        })        
        gsap.from(['#right-cir','#left-cir'],{
            zIndex: 1,
            scale: 0.5,
            duration: 0.5,
            // duration: 1,
        
        })        
        gsap.from('#scroll_button', {
            opacity: 0,
            duration: 2,    
            delay: .5,
        })
        gsap.from('#downArrow', {
        
            y: -8,
            scaleY: 0.7,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1",
        });
        gsap.from('#bar', {
            width: 0,
            duration: 1,
            delay: 1,
            ease: "power1",
            scrollTrigger: {
                trigger: '#bar',
                scrollTrigger: '#skill-set',
                start: 'top 80%',
                end: 'top 80%',
                scrub: 3,
                markers: false,
            }
        })
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


function canvasCreate() {
    window.onload = function() {
        const canvas = document.getElementById('rightCanvas');
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const radius = width / 2 - 10; // Adjust the radius to fit within the canvas
    
        // Create a gradient
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(1, 'orange');
    
        // Draw the circle using curves
        ctx.beginPath();
        const startAngle = 29.8;
        const endAngle = 6.49 * Math.PI;
        ctx.arc(width / 2, height / 2, radius, startAngle, endAngle);
        ctx.lineWidth = 10;
        ctx.strokeStyle = gradient;
        ctx.stroke();
    };
    
}



canvasCreate();
scrollDown();
desktopCheck();


