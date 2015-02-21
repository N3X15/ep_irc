var eejs = require('ep_etherpad-lite/node/eejs/');
var settings = require('ep_etherpad-lite/node/utils/Settings');
var checked_state = '';

exports.eejsBlock_mySettings = function (hook_name, args, cb) {
  var checked_state = 'checked';
  if(settings.ep_irc_nex){
    if (settings.ep_irc_nex.disable_by_default === true){
      checked_state = 'unchecked';
    }else{
      checked_state = 'checked';
    }
  }
  args.content = args.content + eejs.require('ep_irc_nex/templates/irc_entry.ejs', {checked : checked_state});
  return cb();
}

/*
exports.eejsBlock_styles = function (hook_name, args, cb)
{
  args.content = args.content + '<link href="../static/plugins/ep_irc/static/css/irc.css" rel="stylesheet">';
}
*/
exports.clientVars = function(hook, context, callback)
{
  // return the setting to the clientVars, sending the value
  return callback({ 
    "ep_irc_qchaturi": settings.ep_irc.qchaturi,
    "ep_irc_channels": settings.ep_irc.channels 
  });
};

exports.eejsBlock_scripts = function (hook_name, args, cb)
{
  var buffer = '<script src="http://simplewebirc.com/latest.js"></script>';
  buffer += '<script src="../static/plugins/ep_irc_nex/static/js/irc.js"></script>';
  args.content = buffer + args.content;
}
