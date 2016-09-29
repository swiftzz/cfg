$(function(){
	var video = document.querySelector("video");
        var play = document.querySelector("#play");
        play.addEventListener('click',function(){
            if(video.paused){
                video.play();
                play.className = 'play-off';
            }else{
                video.pause();
                play.className = 'play';
            }
        })
});