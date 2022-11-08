var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay)
	console.log("Looping is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play()
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video")
	video.playbackRate *= .9
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video")
	video.playbackRate /= .9
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	video.currentTime += 10
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Video current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		console.log("Unmute")
		video.muted = false
		this.innerHTML = "Mute"
	}
	
	else {
		console.log("Mute")
		video.muted = true
		this.innerHTML = "Unmute"
	}

});

document.querySelector("#slider").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = video.volume
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%"
	console.log(document.querySelector("#slider").value)
	video.volume = document.querySelector("#slider").value / 100;
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
});
document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});