exports.postAceInit = function(hook, context){

  if($('#options-ircchat').is(':checked')) {
    chatEnable();
  }

  $('#options-ircchat').on('click', function() {
    if($('#options-ircchat').is(':checked')) {
      chatEnable();
    }else{
      chatDisable();
    }
  });

  function chatEnable(){
    chat.stickToScreen();
	var params = {
		'channels':clientVars.ep_irc_channels.join(','),
		'from':'ep_irc_nex@etherpad',
	};
	
	if(!pad.getUserIsGuest()) {
		params["nick"]=pad.getUserName();
	}
	
    var url= '<iframe src="http://'+clientVars.ep_irc_qchaturi+'?'+jQuery.param(params)+'" width="400" height=100% frameBorder=0></iframe>';

    $('#chatbox').html(url);
    $('#editorcontainer').css({"right":"406px", "width":"auto"});
    $('#chatbox').css("cssText", "width:405px !important;display:block;right:0px;top:37px;bottom:0px;padding:0;margin:0;height:auto;border:0;");
  }

  function chatDisable(){
    location.reload();
  }
}

