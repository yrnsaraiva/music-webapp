function audioPlayer(){
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#PlayList li a")[0];
    $("#audioPlayer")[0].play();
    $("#PlayList li a").click(function(e){
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#PlayList li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });

    $("#audioPlayer")[0].addEventListener("ended", function(){
        currentSong++;
        if(currentSong === $("#PlayList li a").length)
            currentSong = 0;
        $("#PlayList li").removeClass("current-song");
        $("#PlayList li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#PlayList li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}