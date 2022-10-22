$(document).ready(function(){
	
	
		$("#go_forward_logo_icon").css("marginTop", -$("#go_forward_logo_icon").height()/2 + "px");
		$("#go_forward_logo_icon").css("marginLeft", -$("#go_forward_logo_icon").width()/2 + "px");
		if($("body").width() >= $("body").height())
			$("#go_forward_logo_icon").width($("#go_forward_logo_icon").height() + "px");
		else
			$("#go_forward_logo_icon").height($("#go_forward_logo_icon").width() + "px");
		
		$("#play_logo_icon").css("marginTop", -$("#play_logo_icon").height()/2 + "px");
		$("#play_logo_icon").css("marginLeft", -$("#play_logo_icon").width()/2 + "px");
		if($("body").width() >= $("body").height())
			$("#play_logo_icon").width($("#play_logo_icon").height() + "px");
		else
			$("#play_logo_icon").height($("#play_logo_icon").width() + "px");
		
		$("#go_backwards_logo_icon").css("marginTop", -$("#go_backwards_logo_icon").height()/2 + "px");
		$("#go_backwards_logo_icon").css("marginLeft", -$("#go_backwards_logo_icon").width()/2 + "px");
		if($("body").width() >= $("body").height())
			$("#go_backwards_logo_icon").width($("#go_backwards_logo_icon").height() + "px");
		else
			$("#go_backwards_logo_icon").height($("#go_backwards_logo_icon").width() + "px");
		
		
		$("#play_pause_logo_round_icon").css("marginTop", -$("#play_pause_logo_round_icon").height()/2 + "px");
		$("#play_pause_logo_round_icon").css("marginLeft", -$("#play_pause_logo_round_icon").width()/2 + "px");
		if($("body").width() >= $("body").height())
			$("#play_pause_logo_round_icon").width($("#play_pause_logo_round_icon").height() + "px");
		else
			$("#play_pause_logo_round_icon").height($("#play_pause_logo_round_icon").width() + "px");
		
		
		$("body").find("div a img[src='https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png']").css("display", "none");
		
	
	var songs = ['Rolipso - Sway.mp3', 'Lumian - The Night.mp3', 'Evalk - Zero.mp3', 'Kevano - Excision.mp3'];
	var songsName = ['Rolipso - Sway', 'Lumian - The Night', 'Evalk - Zero', 'Kevano - Excision'];
	var pr = false;
	var playing_audio = false;
	var ind_of_song = 0;
	
	var h = setInterval(function(){
	    $("body").find("div a img[src='https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png']").css("display", "none");
		/*
		$("#my_audio").on('playing', function(){
			playing_audio = true;
		});
		$("#my_audio").on('ended', function(){
			playing_audio = false;
			$("#my_audio")[0].pause();
		});
		*/
		if(playing_audio == false && pr == true)
		{
			ind_of_song++;
			if(ind_of_song >= songs.length)
				ind_of_song = 0;
			$("#my_audio").attr("src", songs[ind_of_song]);
			$("#my_audio")[0].play();
			playing_audio = true;
			$("#name_of_song").text(songsName[ind_of_song]);
		}
		
		$("#go_forward_logo_icon").css("marginTop", -$("#go_forward_logo_icon").height()/2 + "px");
		$("#go_forward_logo_icon").css("marginLeft", -$("#go_forward_logo_icon").width()/2 + "px");
				
		$("#play_logo_icon").css("marginTop", -$("#play_logo_icon").height()/2 + "px");
		$("#play_logo_icon").css("marginLeft", -$("#play_logo_icon").width()/2 + "px");
				
		$("#go_backwards_logo_icon").css("marginTop", -$("#go_backwards_logo_icon").height()/2 + "px");
		$("#go_backwards_logo_icon").css("marginLeft", -$("#go_backwards_logo_icon").width()/2 + "px");
				
		$("#play_pause_logo_round_icon").css("marginTop", -$("#play_pause_logo_round_icon").height()/2 + "px");
		$("#play_pause_logo_round_icon").css("marginLeft", -$("#play_pause_logo_round_icon").width()/2 + "px");
		
		$("body").find("div a img[src='https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png']").css("display", "none");
		
		$("#name_of_song").css("marginTop", -$("#name_of_song").height()/2 + "px");
		$("#name_of_song").css("marginLeft", -$("#name_of_song").width()/2 + "px");
		$("#name_of_song").css("marginLeft", -$("#name_of_song").width()/2 + "px");
		
		$("#go_forward_logo_icon").css("opacity", 1);
		$("#play_logo_icon").css("opacity", 1);
		$("#go_backwards_logo_icon").css("opacity", 1);
		
	}, 10);
	
	
	$("#play_logo_icon").click(function(){
		if(pr===false)
		{
			$("#my_audio")[0].play();
			$("#play_logo_icon").attr("src", "../Pause_Rotating_PAUSE_ICON_Logo_Icon_Music_SVG_AI.svg");
			$("#play_pause_logo_round_icon").css("display", "block");
		}
		else
		{
			$("#my_audio")[0].pause();
			$("#play_logo_icon").attr("src", "../ProtoPage_Music_Play_Logo_Icon_SVG.svg");
			$("#play_pause_logo_round_icon").css("display", "none");
		}
		pr = !pr;
		playing_audio = pr;
		$("#name_of_song").text(songsName[ind_of_song]);
	});
	$("#go_backwards_logo_icon").click(function(){
		if(pr===true)
		{
			ind_of_song--;
			if(ind_of_song < 0)
				ind_of_song = songs.length - 1;
			$("#my_audio")[0].pause();
			$("#my_audio").attr("src", songs[ind_of_song]);
			$("#my_audio")[0].play();
		}
		else
		{
			ind_of_song--;
			if(ind_of_song < 0)
				ind_of_song = songs.length - 1;
			$("#my_audio").attr("src", songs[ind_of_song]);
		}
		$("#name_of_song").text(songsName[ind_of_song]);
	});
	$("#go_forward_logo_icon").click(function(){
		if(pr===true)
		{
			ind_of_song++;
			if(ind_of_song >= songs.length)
				ind_of_song = 0;
			$("#my_audio")[0].pause();
			$("#my_audio").attr("src", songs[ind_of_song]);
			$("#my_audio")[0].play();
		}
		else
		{
			ind_of_song++;
			if(ind_of_song >= songs.length)
				ind_of_song = 0;
			$("#my_audio").attr("src", songs[ind_of_song]);
		}
		$("#name_of_song").text(songsName[ind_of_song]);
	});
	
	$("#my_audio").on('playing', function(){
		playing_audio = true;
	});
	$("#my_audio").on('ended', function(){
		playing_audio = false;
		$("#my_audio")[0].pause();
	});
});   