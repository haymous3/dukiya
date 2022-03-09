const openBar = document.querySelectorAll('.open');
const closeBar = document.querySelectorAll('.close');
const navItems = document.querySelector('.navigation-item');
const switchIcon = document.querySelector('.icon')

loadEvenListerners = () => {
    switchIcon.addEventListener('click', swapIcon);   
}


swapIcon = () => {
    openBar.forEach((me) => {
        me.classList.toggle('off');
    })
    closeBar.forEach((them) => {
        them.classList.toggle('on');
    })
    navItems.classList.toggle('display-one');
}

loadEvenListerners();


// explore section


const nextBar = document.querySelector('.arrow-next');
const prevBar = document.querySelector('.arrow-prev');
const exploreAll = document.querySelectorAll('.explore-all')

barEventListerners = () => {
    nextBar.addEventListener('click', switchTextOne);
    prevBar.addEventListener('click', switchTextTwo);
}




let start = 0;

switchTextOne = () => {
    start++
   
    exploreAll.forEach((hey) => {
        if(start > exploreAll.length-1){
            start = 0;
        }
         hey.style.display = "none"
         exploreAll[start].style.display = "block"
     
    }) 
 
    
}

switchTextTwo = () => {
    start--;
    
    exploreAll.forEach((hey) => {
        if(start < 0){
           start = exploreAll.length-1
        }
        hey.style.display = "none"
        exploreAll[start].style.display = "block"
    
   }) 

}

barEventListerners()






// about-us




// const eachTeam = document.querySelectorAll('.each-team')
// const favImg = document.querySelectorAll('.fav-img')

// moveEvenListerner = () => {
//     // eachTeam.addEventListener('mouseenter', moveIn)
// }

// for(let i = 0; i < eachTeam.length; i++){
//     console.log(eachTeam[i])
// }




// movein = () =>{
    
// }




// moveEvenListerner()







