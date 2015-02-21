var eejs = require('ep_etherpad-lite/node/eejs/');
var settings = require('ep_etherpad-lite/node/utils/Settings');
var checked_state = '';

exports.eejsBlock_mySettings = function (hook_name, args, cb) {
  var checked_state = 'checked';
  if(settings.ep_irc){
    if (settings.ep_irc.disable_by_default === true){
      checked_state = 'unchecked';
    }else{
      checked_state = 'checked';
    }
  }
  args.content = args.content + eejs.require('ep_irc/templates/irc_entry.ejs', {checked : checked_state});
  return cb();
}

/*
exports.eejsBlock_styles = function (hook_name, args, cb)
{
  args.content = args.content + '<link href="../static/plugins/ep_irc/static/css/irc.css" rel="stylesheet">';
}
*/

exports.eejsBlock_scripts = function (hook_name, args, cb)
{
  var values = {};
  values.push('EP_IRC_QCHATURI', settings.ep_irc.qchat_uri);
  values.push('EP_IRC_CHANNELS', settings.ep_irc.channels);
  var buffer = '<script src="http://simplewebirc.com/latest.js"></script>';
  buffer += '<script src="../static/plugins/ep_irc/static/js/irc.js"></script>';
  buffer += '<script>';
  for(var key in values) {
    buffer += 'var '+key+'='+JSON.stringify(values[key])';';
  }
  buffer += '</script>';
  args.content = buffer + args.content;
}
