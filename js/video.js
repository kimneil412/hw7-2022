var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
	console.log("Auto Play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = document.getElementById("slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("The current volume is " + video.volume + "%");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("Current Playback Rate is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() { 
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("Current Playback Rate is: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip 10 seconds");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current time of video: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute";
		document.querySelector("#volume").innerHTML="100%";
	}
	else {
		console.log("Mute");
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute";
		document.querySelector("#volume").innerHTML="0%";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.getElementById("slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("The current volume is " + video.volume + "%");
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Style: 'oldSchool'");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Style: 'original'");
	video.classList.remove("oldSchool");
});
