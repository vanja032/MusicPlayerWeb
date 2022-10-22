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
		
	setInterval(function(){
		
		$("#go_forward_logo_icon").css("marginTop", -$("#go_forward_logo_icon").height()/2 + "px");
		$("#go_forward_logo_icon").css("marginLeft", -$("#go_forward_logo_icon").width()/2 + "px");
		/*if($(document).width() > $(document).height())
			$("#go_forward_logo_icon").width($("#document).height()/100*14 + "px");
		else
			$("#go_forward_logo_icon").height($(document).width()/100*35  + "px");*/
		
		$("#play_logo_icon").css("marginTop", -$("#play_logo_icon").height()/2 + "px");
		$("#play_logo_icon").css("marginLeft", -$("#play_logo_icon").width()/2 + "px");
		/*if($("body").width() >= $("body").height())
			$("#play_logo_icon").width($("#play_logo_icon").height() + "px");
		else
			$("#play_logo_icon").height($("#play_logo_icon").width() + "px");*/
		
		$("#go_backwards_logo_icon").css("marginTop", -$("#go_backwards_logo_icon").height()/2 + "px");
		$("#go_backwards_logo_icon").css("marginLeft", -$("#go_backwards_logo_icon").width()/2 + "px");
		/*if($("body").width() >= $("body").height())
			$("#go_backwards_logo_icon").width($("#go_backwards_logo_icon").height() + "px");
		else
			$("#go_backwards_logo_icon").height($("#go_backwards_logo_icon").width() + "px");*/
		
		
		$("#play_pause_logo_round_icon").css("marginTop", -$("#play_pause_logo_round_icon").height()/2 + "px");
		$("#play_pause_logo_round_icon").css("marginLeft", -$("#play_pause_logo_round_icon").width()/2 + "px");
		
		$("body").find("div a img[src='https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png']").css("display", "none");
		
		$("#name_of_song").css("marginTop", -$("#name_of_song").height()/2 + "px");
		$("#name_of_song").css("marginLeft", -$("#name_of_song").width()/2 + "px");
		$("#name_of_song").css("marginLeft", -$("#name_of_song").width()/2 + "px");
		
	}, 10);
	
});