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
    var authorName = pad.getUserName();
    var url= '<iframe src="http://'+EP_IRC_QCHATURI+'?nick='+authorName+'&channels='+EP_IRC_CHANNELS.join(',')+'&from=pad.nexisonline.net" width="400" height=100% frameBorder=0></iframe>';

    $('#chatbox').html(url);
    $('#editorcontainer').css({"right":"406px", "width":"auto"});
    $('#chatbox').css("cssText", "width:405px !important;display:block;right:0px;top:37px;bottom:0px;padding:0;margin:0;height:auto;border:0;");
  }

  function chatDisable(){
    location.reload();
  }
}

