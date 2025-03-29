//get sidebar in mobile viewport
function getSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    const menu = document.getElementById('menu')
    menu.style.zIndex = "-1"
}

//close sidebar in mobile viewport
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    const menu = document.getElementById('menu')
    menu.style.zIndex = "3000"
}


//change topnav color when scrolled
document.addEventListener('scroll',()=>{
    const topbar = document.querySelector('.topbar');
    
    if(window.scrollY > 100){
        topbar.classList.add('scrolled');
    }
    else{
       topbar.classList.remove('scrolled');
    }
}
)

//SHOP - play song when product is hovered over
function playAudio() {
    // Get the audio element
    var audio = event.currentTarget.querySelector('audio');

    // Play the audio
    audio.play();
}

function stopAudio() {
    // Get the audio element
    var audio = event.currentTarget.querySelector('audio');

    // Play the audio
    audio.pause();
	//audio.currentTime = 0;
}



