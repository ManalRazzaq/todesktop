//  const { searchForWorkspaceRoot } = require("vite");

const hidenoption = document.getElementById('navhidden');
function hanndlemenu() {
    hidenoption.classList.toggle('hidden');
}

const initranslateLTR = -48*4;
const initranslateRTL = 36*4;
function setupofinntersection(element , isLTR , speed){
    const intersectioncallback = (entries)=>{
         const isIntersecting = entries[0].isIntersecting;
        //  console.log(element , isIntersecting);
         
         if (isIntersecting) {
            document.addEventListener('scroll' , hanndlescroll);
         }else{
            document.removeEventListener('scroll' , hanndlescroll);

         }
    }
const intersection = new IntersectionObserver(intersectioncallback);
intersection.observe(element);
function hanndlescroll() {
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totaltranslate = 0;
    if (isLTR){
      totaltranslate = translateX + initranslateLTR;
    }else{
        totaltranslate = -(translateX + initranslateRTL);

    }
    element.style.transform = `translateX(${totaltranslate}px)`;

}
}
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
setupofinntersection(line1 , true, 0.15);
setupofinntersection(line2 , false, 0.15);
setupofinntersection(line3 , true, 0.15);
setupofinntersection(line4 , true, 0.8);



const dtElem = document.querySelectorAll('dt');
dtElem.forEach((elm)=>{
elm.addEventListener('click' , ()=>{
    const ddId = elm.getAttribute('aria-controls');
    const ddElems = document.getElementById(ddId);
    const ddArrow = elm.querySelectorAll('i')[0];


    ddElems.classList.toggle('hidden');
    ddArrow.classList.toggle('-rotate-180');
})
})