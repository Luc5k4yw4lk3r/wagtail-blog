document.addEventListener("DOMContentLoaded", function() {

    // Menu
    let logoMenu = document.querySelector('.logo-menu');
    let btnMenuClose = document.querySelector('.btn-menu-close');

    logoMenu.addEventListener("click", (e) => {
        let containerMenu = document.querySelector('.container-menu');
        containerMenu.setAttribute('data-visualization', 'true');
    });

    btnMenuClose.addEventListener("click", (e) => {
        let containerMenu = document.querySelector('.container-menu');
        containerMenu.setAttribute('data-visualization', 'false');
    });

    //Slider
    const sliders = document.querySelectorAll('.slider-inner');
    // const progressBar = document.querySelector('.prog-bar-inner');


    // slider.parentElement.addEventListener('scroll', (e) => {
    //     progressBar.style.width  = `${getScrollPercentage()}%`
    // })
    let sliderGrabbed = false;
    
    sliders.forEach((slider) => {

        slider.addEventListener('mousedown', (e) => {
            sliderGrabbed = true;
            slider.style.cursor = 'grabbing';
        })
    
        slider.addEventListener('mouseup', (e) => {
            sliderGrabbed = false;
            slider.style.cursor = 'grab';
        })
    
        slider.addEventListener('mouseleave', (e) => {
            sliderGrabbed = false;
        })
    
        slider.addEventListener('mousemove', (e) => {
            if(sliderGrabbed){
                slider.parentElement.scrollLeft -= e.movementX;
            }
        })
    
        slider.addEventListener('wheel', (e) =>{
            e.preventDefault()
            slider.parentElement.scrollLeft += e.deltaY;
        })

    })



    // function getScrollPercentage(){
    //     return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
    // }

});